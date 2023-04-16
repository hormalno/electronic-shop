import { Link } from 'react-router-dom';
import RatingView from '../ratingView/RatingView'
import { ProductShortViewClass,ProductShortViewImgClass,ProductShortViewLabelClass,ProductShortViewLabelSpanClass,ProductShortViewBodyClass,ProductShortViewCategoryClass,
         ProductShortViewNameClass,ProductShortViewPriceClass,ProductShortViewRatingClass,ProductShortViewButtonClass,AddToCartClass } from './ProductShortViewStyle';
import { useContext } from 'react';
import CartContext from '../../contexts/cart/CartContext';

const ProductShortView = ({product}) => {

    const { addToCart, increase, cartItems, sumItems, itemCount } = useContext(CartContext);

    const isInCart = (product) => {return !!cartItems.find((item) => item.id === product.id)}

    return (
        <ProductShortViewClass>
            <ProductShortViewImgClass>
                <img src={product.mainImg} alt={product.name} />
                <ProductShortViewLabelClass>
                    {product.isNew ? (<ProductShortViewLabelSpanClass new>new</ProductShortViewLabelSpanClass>) : ''}
                    {product.sale > 0 ? (<ProductShortViewLabelSpanClass sale>-{product.sale}%</ProductShortViewLabelSpanClass>) : ''}
                </ProductShortViewLabelClass>
            </ProductShortViewImgClass>
            <ProductShortViewBodyClass>
                <ProductShortViewCategoryClass>{product.category}</ProductShortViewCategoryClass>
                <ProductShortViewNameClass><Link to={"/categories/"+product.id}>{product.name}</Link></ProductShortViewNameClass>
                <ProductShortViewPriceClass>${product.price.toFixed(2)} {product.sale > 0 ? <del className="product-old-price">${product.oldPrice.toFixed(2)}</del> : ''}</ProductShortViewPriceClass>
                <ProductShortViewRatingClass>
                    <RatingView rating={product.rating} />
                </ProductShortViewRatingClass>
                <div className="product-btns">
                    <ProductShortViewButtonClass><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></ProductShortViewButtonClass>
                    <ProductShortViewButtonClass><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></ProductShortViewButtonClass>
                </div>
            </ProductShortViewBodyClass>
            <AddToCartClass className="add-to-cart">
                {isInCart(product) ?
                    <button className="add-to-cart-btn" disabled={true}><i className="fa fa-shopping-cart"></i> added to cart</button>
                    :
                    <button className="add-to-cart-btn" disabled={false} onClick={() => addToCart(product)}><i className="fa fa-shopping-cart"></i> add to cart</button>
                }
            </AddToCartClass>
        </ProductShortViewClass>
    )
}

export default ProductShortView;