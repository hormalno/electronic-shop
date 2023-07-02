import { useContext, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import RatingView from '../ratingView/RatingView'
import CartContext from '../../contexts/cart/CartContext';
import WishlistContext from '../../contexts/wishlist/WishlistContext';
import { ProductShortViewClass,ProductShortViewImgClass,ProductShortViewLabelClass,ProductShortViewLabelSpanClass,ProductShortViewBodyClass,ProductShortViewCategoryClass,
    ProductShortViewNameClass,ProductShortViewPriceClass,ProductShortViewRatingClass,ProductShortViewButtonClass,AddToCartClass } from './ProductShortViewStyle';

const ProductShortView = ({product}) => {

    const { addToCart, cartItems } = useContext(CartContext);
    const {addToWishlist, removeFromWishlist, wishlistItems} = useContext(WishlistContext);
    const isInCart = !!cartItems.find((item) => item.id === product.id);
    const isInWishlist = !!wishlistItems.find((item) => item.id === product.id);
    const [{cartDisabledBtn,cartBtnTitle}, setCartBtn] = useState({cartDisabledBtn: false, cartBtnTitle:'add to cart'});
    const [{wishlistIcon,wishlistTitle},setWishlistBtn] = useState({wishlistIcon: "fa fa-heart-o",wishlistTitle: 'add to wishlist'})

    useEffect(() => {
        if (isInWishlist) {
            setWishlistBtn({wishlistIcon: "fa fa-heart",wishlistTitle: 'remove'})
        } else {
            setWishlistBtn({wishlistIcon: "fa fa-heart-o",wishlistTitle: 'add to wishlist'})
        }
        if (isInCart) {
            setCartBtn({cartDisabledBtn:true, cartBtnTitle:'added'})
        } else {
            setCartBtn({cartDisabledBtn: false, cartBtnTitle:'add to cart'})
        }
    },[isInCart,isInWishlist])
    
    const onWishlistClickHandler = () => isInWishlist ? removeFromWishlist(product) : addToWishlist(product);
    const onCartClickHandler = () => isInCart ? '' : addToCart(product);

    return (
        <ProductShortViewClass>
            <ProductShortViewImgClass>
                <img src={'/'+product.mainImg} alt={product.name} />
                <ProductShortViewLabelClass>
                    {product.isNew ? (<ProductShortViewLabelSpanClass new>new</ProductShortViewLabelSpanClass>) : ''}
                    {product.sale > 0 ? (<ProductShortViewLabelSpanClass sale>-{product.sale}%</ProductShortViewLabelSpanClass>) : ''}
                </ProductShortViewLabelClass>
            </ProductShortViewImgClass>
            <ProductShortViewBodyClass>
                <ProductShortViewCategoryClass>{product.category}</ProductShortViewCategoryClass>
                <ProductShortViewNameClass><Link to={"/categories/"+product.category+"/"+product.id}>{product.name}</Link></ProductShortViewNameClass>
                <ProductShortViewPriceClass>${product.price.toFixed(2)} {product.sale > 0 ? <del className="product-old-price">${product.oldPrice.toFixed(2)}</del> : ''}</ProductShortViewPriceClass>
                <ProductShortViewRatingClass>
                    <RatingView rating={product.rating} />
                </ProductShortViewRatingClass>
                <div className="product-btns">
                    <ProductShortViewButtonClass onClick={onWishlistClickHandler}><i className={wishlistIcon}></i><span className="tooltipp">{wishlistTitle}</span></ProductShortViewButtonClass>                    
                    <ProductShortViewButtonClass><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></ProductShortViewButtonClass>
                </div>
            </ProductShortViewBodyClass>
            <AddToCartClass className="add-to-cart">
                <button className="add-to-cart-btn" disabled={cartDisabledBtn} onClick={onCartClickHandler}><i className="fa fa-shopping-cart"></i>{cartBtnTitle}</button>
            </AddToCartClass>
        </ProductShortViewClass>
    )
}

export default ProductShortView;