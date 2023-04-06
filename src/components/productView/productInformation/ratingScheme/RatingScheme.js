import styled from "styled-components";
import RatingView from "../../../ratingView/RatingView";
import {RatingStyle,RatingProgressStyle,RatingStarsStyle,RatingSumStyle, Progress} from "./RatingSchemaStyle";
import { useEffect,useState } from "react";

const RatingScheme = ({productId}) => {

    const [ratings, setRatings] = useState([
        {star:5, sum:0, progress:0},
        {star:4, sum:0, progress:0},
        {star:3, sum:0, progress:0},
        {star:2, sum:0, progress:0},
        {star:1, sum:0, progress:0}
    ]);

    // useEffect(() => {

    //     getDocs(collection(db, "products", productId, "reviews"))
    //     .then((snapshot) => {
    //         if (snapshot.length > 0) {
    //             snapshot.forEach((doc) => {
    //                 doc.data().rating 
    //             })
    //         };            
    //     }).catch(e => console.log(e));

    //     // for (let index = 5; index > 0; index--) {
    //     //     let ratingObj = {};
    //     //     ratingObj.star = index;
    //     //     ratingObj.sum = reviews.filter((review) => review.rating === index).length;
    //     //     ratingObj.progress = ((ratingObj.sum / reviews.length) * 100).toString() + '%';
    //     //     ratings.push(ratingObj)
    //     // };
    // })

    
    
    return (
        <RatingStyle>
            {ratings.map((rating) => 
                <li key={rating?.star}>
                    <RatingStarsStyle>
                        <RatingView rating={rating?.star} />
                    </RatingStarsStyle>
                    <RatingProgressStyle>
                        <Progress percentage={rating?.progress}></Progress>
                    </RatingProgressStyle>
                    <RatingSumStyle>{rating?.sum}</RatingSumStyle>
                </li>)}
        </RatingStyle>
    )
};



export default RatingScheme;