import RatingView from "../../ratingView/RatingView";
import './ProductOverview.css'

function ProductOverview(props) {
    return (
        <div className="col-md-5">
            <div className="product-details">
                <h2 className="product-name">{props.product.name}</h2>
                <div>
                    <div className="product-rating">
                        <RatingView rating={props.product.rating} />
                    </div>
                    <a className="review-link" href="#review-form">{props.product.reviews.length} Review(s) | Add your review</a>
                </div>
                <div>
                    <h3 className="product-price">${props.product.price.toFixed(2)} {props.product.oldPrice ? <del className="product-old-price">${props.product.oldPrice.toFixed(2)}</del> : ''}</h3>
                    {props.product.inStock ? <span className="product-available">In Stock</span> : ''}
                </div>
                <p>{props.product.shortDescription}</p>
                <div className="product-options">
                    <label>
                        Size
                        <select className="input-select">
                            <option value="0">X</option>
                        </select>
                    </label>
                    <label>
                        Color
                        <select className="input-select">
                            <option value="0">Red</option>
                        </select>
                    </label>
                </div>
                <div className="add-to-cart">
                    <div className="qty-label">
                        Qty
                        <div className="input-number">
                            <input type="number"/>
                            <span className="qty-up">+</span>
                            <span className="qty-down">-</span>
                        </div>
                    </div>
                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                </div>
                <ul className="product-btns">
                    <li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                    <li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
                </ul>
                <ul className="product-links">
                    <li>Category:</li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
                <ul className="product-links">
                    <li>Share:</li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
    )
};

export default ProductOverview;