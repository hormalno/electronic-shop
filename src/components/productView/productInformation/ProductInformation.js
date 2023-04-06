import RatingView from "../../ratingView/RatingView";
import ProductReviews from "./productReviews/ProductReviews";
import RatingScheme from "./ratingScheme/RatingScheme";
import ReviewForm from "./productReviews/reviewForm/ReviewForm";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import ProductContext from "../../../contexts/ProductContext";
import {ProductTabStyle,RatingAvgStyle,RatingStarsStyle} from './ProductInformationStyle';
import useReviews from "../../../hooks/useReviews";

const ProductInformation = () => {
    
    const product = useContext(ProductContext);

    const reviewHandler = () => {

    };

    return ( 
        <div className="col-md-12">
            <ProductTabStyle>
                <ul className="tab-nav">
                    <li className="active"><Link to="#tab1">Description</Link></li>
                    <li><Link to="#tab2">Details</Link></li>
                    <li><Link to="#tab3" onClick={reviewHandler}>Reviews {product && product.reviewsCount > 0 ? `(${product.reviewsCount})` : ''}</Link></li>
                </ul>
                <div className="tab-content">
                    <div id="tab1" className="tab-pane fade in active">
                        <div className="row">
                            <div className="col-md-12">
                                <p>{product?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" className="tab-pane fade in">
                        <div className="row">
                            <div className="col-md-12">
                                <p>{product?.details}</p>
                            </div>
                        </div>
                    </div>
                    <div id="tab3" className="tab-pane fade in">
                        <div className="row">
                            <div className="col-md-3">
                                <div id="rating">
                                    <RatingAvgStyle>
                                        <span>{product?.rating}</span>
                                        <RatingStarsStyle>
                                            <RatingView rating={product?.rating} /> 
                                        </RatingStarsStyle>
                                    </RatingAvgStyle>
                                    <RatingScheme productId={product?.id}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="reviews">
                                    <ProductReviews productId={product?.id} />
                                </div>                                
                            </div>
                            <ReviewForm />
                        </div>
                    </div>
                </div>
            </ProductTabStyle>
        </div>
    )
};

export default ProductInformation;