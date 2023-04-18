import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from '../../../contexts/product/ProductContext';
import AuthContext from "../../../contexts/auth/AuthContext";
import CartContext from "../../../contexts/cart/CartContext";
import RatingView from "../../ratingView/RatingView";
import './ProductOverview.css';

const ProductOverview = () => {

    const {addToCart,cartItems} = useContext(CartContext);
    const product = useContext(ProductContext);
    const {isAuthenticated} = useContext(AuthContext);
    const isInCart = (product) => {return !!cartItems.find((item) => item.id === product.id)}

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
                    <h3 className="product-price">${product?.price} {product?.sale > 0 ? (<del className="product-old-price">${product?.oldPrice}</del>) : ''}</h3>
                    {product?.inStock ? <span className="product-available">In Stock</span> : ''}
                </div>
                <p>{product?.shortDescription}</p>
                <div className="product-options">                    
                </div>
                <div className="add-to-cart">
                    {isInCart(product) ?
                        <button className="add-to-cart-btn" disabled={true}><i className="fa fa-shopping-cart"></i> added</button>
                    : 
                        <button className="add-to-cart-btn" disabled={false} onClick={() => addToCart(product)}><i className="fa fa-shopping-cart"></i> add to cart</button>
                    }
                </div>
                <ul className="product-btns">
                    <li><Link to="#"><i className="fa fa-heart-o"></i> add to wishlist</Link></li>
                </ul>
                <ul className="product-links">
                    <li>Category:</li>
                    <li><Link to={'/'+product?.category}>{product?.category}</Link></li>
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