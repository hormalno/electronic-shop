import RatingView from "../../ratingView/RatingView";
import ProductReviews from "./productReviews/ProductReviews";
import RatingScheme from "./ratingScheme/RatingScheme";
import ReviewForm from "./productReviews/reviewForm/ReviewForm";
import {ProductTabStyle,RatingAvgStyle,RatingStarsStyle} from './ProductInformationStyle';

function ProductInformation({product}) {
    return ( 
        <div className="col-md-12">
            <ProductTabStyle>
                <ul className="tab-nav">
                    <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                    <li><a data-toggle="tab" href="#tab2">Details</a></li>
                    <li><a data-toggle="tab" href="#tab3">Reviews (12)</a></li>
                </ul>
                <div className="tab-content">
                    <div id="tab1" className="tab-pane fade in active">
                        <div className="row">
                            <div className="col-md-12">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" className="tab-pane fade in">
                        <div className="row">
                            <div className="col-md-12">
                                <p>{product.details}</p>
                            </div>
                        </div>
                    </div>
                    <div id="tab3" className="tab-pane fade in">
                        <div className="row">
                            <div className="col-md-3">
                                <div id="rating">
                                    <RatingAvgStyle>
                                        <span>{product.rating}</span>
                                        <RatingStarsStyle>
                                            <RatingView rating={product.rating} />
                                        </RatingStarsStyle>
                                    </RatingAvgStyle>
                                    {/* <RatingScheme reviews={product.id}/> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="reviews">
                                    <ProductReviews productId={product.id} />
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