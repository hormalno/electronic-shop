import styled from "styled-components";
import RatingView from "../../ratingView/RatingView";
import {RatingStyle,RatingProgress,RatingStars,RatingSum} from "./RatingSchemaStyle";

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
        <RatingStyle>
            {ratings.map((rating) => 
                <li>
                    <RatingStars>
                        <RatingView rating={rating.key} />
                    </RatingStars>
                    <RatingProgress>
                        <Progress percentage={rating.progress}></Progress>
                    </RatingProgress>
                    <RatingSum>{rating.sum}</RatingSum>
                </li>)}
        </RatingStyle>
    )
};



export default RatingScheme;