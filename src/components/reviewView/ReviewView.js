import RatingView from "../ratingView/RatingView";

function ReviewView(props) {
    return (
        <li>
            <div className="review-heading">
                <h5 className="name">{props.review.name}</h5>
                <p className="date">{props.review.date}</p>
                <div className="review-rating">
                    <RatingView rating={props.review.rating} />
                </div>
            </div>
            <div className="review-body">
                <p>{props.review.text}</p>
            </div>
        </li>
    )
};

export default ReviewView;