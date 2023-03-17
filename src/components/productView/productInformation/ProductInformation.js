import RatingView from "../../ratingView/RatingView";
import ProductReviews from "../productReviews/ProductReviews";
import RatingScheme from "../ratingSchema/RatingScheme";
import ReviewForm from "../reviewForm/ReviewForm";
import {ProductTab,RatingAvg,RatingStars} from './ProductInformationStyle';

function ProductInformation({product}) {
    return ( 
        <div className="col-md-12">
            <ProductTab>
                <ul className="tab-nav">
                    <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                    <li><a data-toggle="tab" href="#tab2">Details</a></li>
                    <li><a data-toggle="tab" href="#tab3">Reviews ({product.reviews.length})</a></li>
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
                                    <RatingAvg>
                                        <span>{product.rating}</span>
                                        <RatingStars>
                                            <RatingView rating={product.rating} />
                                        </RatingStars>
                                    </RatingAvg>
                                    <RatingScheme reviews={product.reviews}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="reviews">
                                    <ProductReviews pageData={product.reviews} />
                                </div>                                
                            </div>
                            <ReviewForm />
                        </div>
                    </div>
                </div>
            </ProductTab>
        </div>
    )
};

export default ProductInformation;