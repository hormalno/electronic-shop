import { Link } from 'react-router-dom';
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
                <img src={props.img} alt="" />
                <ProductShortViewLabelClass>
                    <ProductShortViewLabelSpanClass className="sale">-30%</ProductShortViewLabelSpanClass>
                </ProductShortViewLabelClass>
            </ProductShortViewImgClass>
            <ProductShortViewBodyClass>
                <ProductShortViewCategoryClass>Category</ProductShortViewCategoryClass>
                <ProductShortViewNameClass><Link to="/categories/1">ProductShortView name goes here</Link></ProductShortViewNameClass>
                <ProductShortViewPriceClass>$980.00 <del className="ProductShortView-old-price">$990.00</del></ProductShortViewPriceClass>
                <ProductShortViewRatingClass>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </ProductShortViewRatingClass>
                <div className="ProductShortView-btns">
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