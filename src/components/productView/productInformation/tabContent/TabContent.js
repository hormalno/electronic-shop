import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../../contexts/ProductContext";
import { RatingAvgStyle, RatingStarsStyle } from "./TabContentStyle";
import RatingView from "../../../ratingView/RatingView";
import RatingScheme from "./ratingScheme/RatingScheme";
import ProductReviews from "./productReviews/ProductReviews";
import ReviewForm from "./reviewForm/ReviewForm";

const TabContent = ({tabId}) => {

    const product = useContext(ProductContext);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (tabId === "tab1") {
            setContent(<div className='col-md-12'>
                            <p>{product?.description}</p>
                        </div>)
        } else if (tabId === "tab2") {
            setContent(<div className='col-md-12'>
                            <p>{product?.details}</p>
                        </div>)
        } else  {
            setContent(<>
                            <div className="col-md-3">
                                <div id="rating">
                                    <RatingAvgStyle>
                                        <span>{product.rating}</span>
                                        <RatingStarsStyle>
                                            <RatingView rating={product.rating} /> 
                                        </RatingStarsStyle>
                                    </RatingAvgStyle>
                                    <RatingScheme />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="reviews">
                                    <ProductReviews />
                                </div>                                
                            </div>
                            <ReviewForm productId={product.id} />
                        </>)
        }
    },[tabId,product])


    return (
        <div className="tab-pane fade in active">
            <div className="row">                
                {content}
            </div>
        </div>
    )
};

export default TabContent;