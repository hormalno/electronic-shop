import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from '../../../contexts/product/ProductContext';
import AuthContext from "../../../contexts/auth/AuthContext";
import CartContext from "../../../contexts/cart/CartContext";
import WishlistContext from "../../../contexts/wishlist/WishlistContext";
import CurrencyContext from "../../../contexts/currency/CurrencyContext";
import RatingView from "../../ratingView/RatingView";
import { priceView } from "../../../utils/currency";
import './ProductOverview.css';

const ProductOverview = () => {

    const {isAuthenticated} = useContext(AuthContext);
    const product = useContext(ProductContext);
    const {addToCart,cartItems} = useContext(CartContext);
    const {addToWishlist,removeFromWishlist,wishlistItems} = useContext(WishlistContext);
    const {currency} = useContext(CurrencyContext);
    const isInCart = !!cartItems.find((item) => item.id === product.id);
    const isInWishlist = !!wishlistItems.find((item) => item.id === product.id);
    const [{cartDisabledBtn,cartBtnTitle}, setCartBtn] = useState({cartDisabledBtn: false, cartBtnTitle:'add to cart'});
    const [{wishlistClass,wishlistIcon,wishlistTitle},setWishlistBtn] = useState({wishlistClass:'',wishlistIcon: "fa fa-heart-o",wishlistTitle: 'add to wishlist'})

    useEffect(() => {
        if (isInWishlist) {
            setWishlistBtn({wishlistClass:'removed',wishlistIcon: "fa fa-heart",wishlistTitle: 'remove from wishlist'})
        } else {
            setWishlistBtn({wishlistClass:'',wishlistIcon: "fa fa-heart-o",wishlistTitle: 'add to wishlist'})
        }
        if (isInCart || !product.inStock) {
            setCartBtn({cartDisabledBtn:true, cartBtnTitle: product.inStock ? 'Added' : 'Out of stock'})
        } else {
            setCartBtn({cartDisabledBtn: false, cartBtnTitle:'add to cart'})
        }
    },[isInCart,isInWishlist,product])
    
    const onWishlistClickHandler = () => isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id);
    const onCartClickHandler = () => isInCart ? '' : addToCart(product.id, product.price);

    return (
        <div className="col-md-5">
            <div className="product-details">
                <h2 className="product-name">{product?.name}</h2>
                <div>
                    <div className="product-rating">
                        <RatingView rating={product?.rating} />
                    </div>
                    <Link className="review-link" to={isAuthenticated ? "#review-form" : '/login'}>{product?.reviewsCount} Review(s) | Add review</Link>
                </div>
                <div>
                    <h3 className="product-price">{priceView(product?.price,currency)} {product?.sale > 0 ? (<del className="product-old-price">{priceView(product?.oldPrice,currency)}</del>) : ''}</h3>
                    {product?.inStock ? <span className="product-available">In Stock</span> : ''}
                </div>
                <p>{product?.shortDescription}</p>
                <div className="product-options">                    
                </div>
                <div className="add-to-cart">
                    <button className="add-to-cart-btn" disabled={cartDisabledBtn} onClick={onCartClickHandler}><i className="fa fa-shopping-cart"></i>{cartBtnTitle}</button>
                </div>
                <ul className="product-btns">
                    <li className={wishlistClass} onClick={onWishlistClickHandler}><i className={wishlistIcon}></i> {wishlistTitle}</li>
                </ul>
                <ul className="product-links">
                    <li>Category:</li>
                    <li><Link to={'/categories/'+product?.category}>{product?.category}</Link></li>
                </ul>
                <ul className="product-links">
                    <li>Share:</li>
                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-envelope"></i></Link></li>
                </ul>
            </div>
        </div>
    )
};

export default ProductOverview;