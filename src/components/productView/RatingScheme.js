import styled from "styled-components";
import RatingView from "../ratingView/RatingView";

function RatingScheme(props) {

    const Progress = styled.div `
        width: ${props => props.percentage ? props.percentage : '0%'};
    `
    let ratings = [];
    for (let index = 5; index > 0; index--) {
        let ratingObj = {};
        ratingObj.key = index;
        ratingObj.sum = props.reviews.filter((review) => review.rating === index).length;
        ratingObj.progress = ((ratingObj.sum / props.reviews.length) * 100).toString() + '%';
        ratings.push(ratingObj)
    }

    console.log(ratings)
    
    return (
        <ul className="rating">
            {ratings.map((rating) => 
                <li>
                    <div className="rating-stars">
                        <RatingView rating={rating.key} />
                    </div>
                    <div className="rating-progress">
                        <Progress percentage={rating.progress}></Progress>
                    </div>
                    <span className="sum">{rating.sum}</span>
                </li>)}
        </ul>
    )
};



export default RatingScheme;