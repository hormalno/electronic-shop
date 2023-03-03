import {ProductClass,
        ProductImgClass,
        ProductLabelClass,
        ProductLabelSpanClass,
        ProductBodyClass,
        ProductCategoryClass,
        ProductNameClass,
        ProductPriceClass,
        ProductRatingClass,
        ProductButtonClass,
        AddToCartClass
    } from './ProductStyle'

function Product(props) {
    return (
        <ProductClass>
            <ProductImgClass>
                <img src={props.img} alt="" />
                <ProductLabelClass>
                    <ProductLabelSpanClass className="sale">-30%</ProductLabelSpanClass>
                </ProductLabelClass>
            </ProductImgClass>
            <ProductBodyClass>
                <ProductCategoryClass>Category</ProductCategoryClass>
                <ProductNameClass><a href="#">Product name goes here</a></ProductNameClass>
                <ProductPriceClass>$980.00 <del className="product-old-price">$990.00</del></ProductPriceClass>
                <ProductRatingClass>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </ProductRatingClass>
                <div className="Product-btns">
                    <ProductButtonClass><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></ProductButtonClass>
                    <ProductButtonClass><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></ProductButtonClass>
                    <ProductButtonClass><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></ProductButtonClass>
                </div>
            </ProductBodyClass>
            <AddToCartClass className="add-to-cart">
                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
            </AddToCartClass>
        </ProductClass>
    )
}

export default Product;