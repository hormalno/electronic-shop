import RatingView from "../../../../ratingView/RatingView";
import {ReviewsStyle, ReviewHeading, ReviewRating, ReviewBody} from "./ReviewViewStyle"

function ReviewView({review}) {
    return (
        <ReviewsStyle>
            <ReviewHeading>
                <h5 className="name">{review.name}</h5>
                <p className="date">{review.createdAt}</p>
                <ReviewRating>
                    <RatingView rating={review.rating} />
                </ReviewRating>
            </ReviewHeading>
            <ReviewBody>
                <p>{review.text}</p>
            </ReviewBody>
        </ReviewsStyle>
    )
};

export default ReviewView;