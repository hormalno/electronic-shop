import Paginate from "../paginate/Paginate";
import RatingView from "../ratingView/RatingView";
import ReviewView from "../reviewView/ReviewView";
import RatingScheme from "./RatingScheme";
import ReviewForm from "./ReviewForm";

function ProductInformation({product}) {
    return ( 
        <div className="col-md-12">
            <div id="product-tab">
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
                                    <div className="rating-avg">
                                        <span>{product.rating}</span>
                                        <div className="rating-stars">
                                            <RatingView rating={product.rating} />
                                        </div>
                                    </div>
                                    <RatingScheme reviews={product.reviews}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="reviews">
                                    {/* <ul className="reviews">
                                        {product.reviews.map(review => <ReviewView review={review} />)}
                                    </ul>
                                    <ul className="reviews-pagination">
                                        <li className="active">1</li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                        <
                                    </ul> */}
                                    <Paginate pageData={product.reviews} />
                                </div>
                                
                            </div>
                            <ReviewForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductInformation;