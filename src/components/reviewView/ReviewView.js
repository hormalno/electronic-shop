import RatingView from "../ratingView/RatingView";
import {ReviewsStyle, ReviewHeading, ReviewRating, ReviewBody} from "./ReviewViewStyle"

function ReviewView(props) {
    return (
        <ReviewsStyle>
            <ReviewHeading>
                <h5 className="name">{props.review.name}</h5>
                <p className="date">{props.review.date}</p>
                <ReviewRating>
                    <RatingView rating={props.review.rating} />
                </ReviewRating>
            </ReviewHeading>
            <ReviewBody>
                <p>{props.review.text}</p>
            </ReviewBody>
        </ReviewsStyle>
    )
};

export default ReviewView;