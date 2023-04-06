import RatingView from "../../ratingView/RatingView";
import './ProductOverview.css';
import { useContext } from "react";
import ProductContext from '../../../contexts/ProductContext';
import { Link } from "react-router-dom";

const ProductOverview = () => {

    const product = useContext(ProductContext);

    return (
        <div className="col-md-5">
            <div className="product-details">
                <h2 className="product-name">{product?.name}</h2>
                <div>
                    <div className="product-rating">s
                        <RatingView rating={product?.rating} />
                    </div>
                    <Link className="review-link" to="#review-form">{product?.reviewsCount} Review(s) | Add review</Link>
                </div>
                <div>
                    <h3 className="product-price">${product?.price} {product?.oldPrice ? <del className="product-old-price">${product?.oldPrice}</del> : ''}</h3>
                    {product?.inStock ? <span className="product-available">In Stock</span> : ''}
                </div>
                <p>{product?.shortDescription}</p>
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
                    <li><Link to="#"><i className="fa fa-heart-o"></i> add to wishlist</Link></li>
                </ul>
                <ul className="product-links">
                    <li>Category:</li>
                    <li><Link to="#">{product?.category}</Link></li>
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