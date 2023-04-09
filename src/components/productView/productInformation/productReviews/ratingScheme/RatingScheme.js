import { useEffect, useState } from "react";
import RatingView from "../../../../ratingView/RatingView";
import {RatingStyle,RatingProgressStyle,RatingStarsStyle,RatingSumStyle, Progress} from "./RatingSchemaStyle";

const RatingScheme = ({reviews}) => {

    const [ratings, setRatings] = useState([
        {star:5, sum:0, progress:'0%'},
        {star:4, sum:0, progress:'0%'},
        {star:3, sum:0, progress:'0%'},
        {star:2, sum:0, progress:'0%'},
        {star:1, sum:0, progress:'0%'}
    ]);

    useEffect(() => {
        if (reviews.length > 0) {
            let calculatedRatings = [];
            for (let index = 5; index > 0; index--) {
                let ratingObj = {};
                ratingObj.star = index;
                ratingObj.sum = reviews.filter((review) => +review.rating === index).length;
                ratingObj.progress = ratingObj.sum > 0 ? ((ratingObj.sum / reviews.length) * 100).toString() + '%' : '0%';
                calculatedRatings.push(ratingObj);
            };
            console.log(reviews)
            setRatings(calculatedRatings);
        }        
    },[reviews])
    
    return (
        <RatingStyle>
            {ratings && ratings.map((rating) => 
                <li key={rating.star}>
                    <RatingStarsStyle>
                        <RatingView rating={rating.star} />
                    </RatingStarsStyle>
                    <RatingProgressStyle>
                        <Progress percentage={rating.progress}></Progress>
                    </RatingProgressStyle>
                    <RatingSumStyle>{rating.sum}</RatingSumStyle>
                </li>)}
        </RatingStyle>
    )
};



export default RatingScheme;