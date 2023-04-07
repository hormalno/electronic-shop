import { collection, getDocs } from "firebase/firestore";
import ProductContext from "../../../../../contexts/ProductContext";
import RatingView from "../../../../ratingView/RatingView";
import {RatingStyle,RatingProgressStyle,RatingStarsStyle,RatingSumStyle, Progress} from "./RatingSchemaStyle";
import { useContext, useEffect,useState } from "react";
import { db } from "../../../../../utils/firebase";

const RatingScheme = () => {

    const product = useContext(ProductContext);
    const [ratings, setRatings] = useState([
        {star:5, sum:0, progress:0},
        {star:4, sum:0, progress:0},
        {star:3, sum:0, progress:0},
        {star:2, sum:0, progress:0},
        {star:1, sum:0, progress:0}
    ]);

    useEffect(() => {

        let foundReviews = [];

        getDocs(collection(db, "products", product.id, "reviews"))
        .then((snapshot) => {    
            if (snapshot.docs.length > 0) {                
                snapshot.forEach((doc) => {
                    let foundReview = doc.data();
                    foundReviews.push(foundReview);
                })            
            };
            
            let calculatedRatings = [];
            for (let index = 5; index > 0; index--) {
                let ratingObj = {};
                ratingObj.star = index;
                ratingObj.sum = foundReviews.filter((review) => review.rating === index).length;
                ratingObj.progress = ratingObj.sum > 0 ? ((ratingObj.sum / foundReviews.length) * 100).toString() + '%' : '0%';
                calculatedRatings.push(ratingObj);
            };

            setRatings(calculatedRatings);

        }).catch(e => console.log(e));
        
    },[product])
    
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