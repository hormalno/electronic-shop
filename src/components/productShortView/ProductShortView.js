import { useContext, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import RatingView from '../ratingView/RatingView'
import CartContext from '../../contexts/cart/CartContext';
import WishlistContext from '../../contexts/wishlist/WishlistContext';
import CurrencyContext from '../../contexts/currency/CurrencyContext';
import useProduct from '../../hooks/useProduct';
import { priceView } from '../../utils/currency';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import { ProductShortViewClass,ProductShortViewImgClass,ProductShortViewLabelClass,ProductShortViewLabelSpanClass,ProductShortViewBodyClass,ProductShortViewCategoryClass,
    ProductShortViewNameClass,ProductShortViewPriceClass,ProductShortViewRatingClass,ProductShortViewButtonClass,AddToCartClass } from './ProductShortViewStyle';


const ProductShortView = ({productId}) => {

    const {product,isLoading} = useProduct(productId);
    const [loadingImage, setLoadingImage] = useState(true);
    const { addToCart, cartItems } = useContext(CartContext);
    const {addToWishlist, removeFromWishlist, wishlistItems} = useContext(WishlistContext);
    const {currency} = useContext(CurrencyContext);
    const isInCart = !!cartItems.find(item => item.id === productId);
    const isInWishlist = !!wishlistItems.find((item) => item.id === productId);
    const [{cartDisabledBtn,cartBtnTitle}, setCartBtn] = useState({cartDisabledBtn: false, cartBtnTitle:'add to cart'});
    const [{wishlistIcon,wishlistTitle},setWishlistBtn] = useState({wishlistIcon: "fa fa-heart-o",wishlistTitle: 'add to wishlist'})

    useEffect(() => {
        if (isInWishlist) {
            setWishlistBtn({wishlistIcon: "fa fa-heart",wishlistTitle: 'remove'})
        } else {
            setWishlistBtn({wishlistIcon: "fa fa-heart-o",wishlistTitle: 'add to wishlist'})
        }
        if (isInCart || !product.inStock) {
            setCartBtn({cartDisabledBtn:true, cartBtnTitle: product.inStock ? 'added' : 'out of stock'})
        } else {
            setCartBtn({cartDisabledBtn: false, cartBtnTitle:'add to cart'})
        }
    },[isInCart,isInWishlist,product])
    
    const onWishlistClickHandler = () => isInWishlist ? removeFromWishlist(product?.id) : addToWishlist(product?.id);
    const onCartClickHandler = () => isInCart ? '' : addToCart(product?.id,product?.price);

    return (
        <ProductShortViewClass>         
            <ProductShortViewImgClass>
                {loadingImage ? <LoadingSpinner /> : ''}
                <img src={'/'+product?.mainImg} alt={product?.name} onLoad={()=>setLoadingImage(false)} />
                <ProductShortViewLabelClass>
                    {product?.isNew ? (<ProductShortViewLabelSpanClass new>new</ProductShortViewLabelSpanClass>) : ''}
                    {product?.sale > 0 ? (<ProductShortViewLabelSpanClass sale>-{product.sale}%</ProductShortViewLabelSpanClass>) : ''}
                </ProductShortViewLabelClass>
            </ProductShortViewImgClass>
            <ProductShortViewBodyClass>
                <ProductShortViewCategoryClass>{isLoading ? "category" : product.category}</ProductShortViewCategoryClass>
                <ProductShortViewNameClass><Link to={"/categories/"+product?.category+"/"+product?.id}>{isLoading ? "name" : product.name}</Link></ProductShortViewNameClass>
                <ProductShortViewPriceClass>{priceView(isLoading ? 0 : product.price,currency)} {isLoading === false && product.sale > 0 ? <del className="product-old-price">{priceView(product.oldPrice,currency)}</del> : ''}</ProductShortViewPriceClass>
                <ProductShortViewRatingClass>
                    <RatingView rating={isLoading ? 0 : product.rating} />
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