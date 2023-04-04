import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useReviews = (productId) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "products", productId, "reviews"))
        .then((snapshot) => {
            let foundReviews = [];
            snapshot.forEach((doc) => {
                foundReviews.push(doc.data());
            })
            setReviews(foundReviews);
        }).catch(e => console.log(e));
    },[productId])

    return reviews;
};

export default useReviews;