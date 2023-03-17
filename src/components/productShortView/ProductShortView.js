import { Link } from 'react-router-dom';
import RatingView from '../ratingView/RatingView'
import {ProductShortViewClass,
        ProductShortViewImgClass,
        ProductShortViewLabelClass,
        ProductShortViewLabelSpanClass,
        ProductShortViewBodyClass,
        ProductShortViewCategoryClass,
        ProductShortViewNameClass,
        ProductShortViewPriceClass,
        ProductShortViewRatingClass,
        ProductShortViewButtonClass,
        AddToCartClass
    } from './ProductShortViewStyle'

function ProductShortViewView(props) {

    return (
        <ProductShortViewClass>
            <ProductShortViewImgClass>
                <img src={props.product.mainImg} alt="" />
                <ProductShortViewLabelClass>
                    {props.product.isNew ? <ProductShortViewLabelSpanClass new >NEW</ProductShortViewLabelSpanClass> : ''}
                    {props.product.sale ? <ProductShortViewLabelSpanClass sale >-{props.product.sale}%</ProductShortViewLabelSpanClass> : ''}
                </ProductShortViewLabelClass>
            </ProductShortViewImgClass>
            <ProductShortViewBodyClass>
                <ProductShortViewCategoryClass>{props.product.category}</ProductShortViewCategoryClass>
                <ProductShortViewNameClass><Link to="/categories/1">{props.product.name}</Link></ProductShortViewNameClass>
                <ProductShortViewPriceClass>${props.product.price.toFixed(2)} {props.product.oldPrice ? <del className="product-old-price">${props.product.oldPrice.toFixed(2)}</del> : ''}</ProductShortViewPriceClass>
                <ProductShortViewRatingClass>
                    <RatingView rating={props.product.rating} />
                </ProductShortViewRatingClass>
                <div className="product-btns">
                    <ProductShortViewButtonClass><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></ProductShortViewButtonClass>
                    <ProductShortViewButtonClass><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></ProductShortViewButtonClass>
                    <ProductShortViewButtonClass><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></ProductShortViewButtonClass>
                </div>
            </ProductShortViewBodyClass>
            <AddToCartClass className="add-to-cart">
                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
            </AddToCartClass>
        </ProductShortViewClass>
    )
}

export default ProductShortViewView;