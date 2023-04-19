import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase"

const useProduct = (productId) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        getDoc(doc(db, "products", productId))
        .then((docSnap) => {
            if (docSnap.exists()) {
                let foundProduct = docSnap.data();
                getDocs(collection(db, "products", productId, "reviews"))
                .then((reviewsSnap) => {
                    let foundReviews = [];
                    reviewsSnap.forEach((doc) => {
                        foundReviews.push(doc.data());
                    })
                    foundProduct.reviews = foundReviews;
                    setProduct(foundProduct);
                }).catch(e=>console.log(e));
            } else {
                console.log("No product found!");
            }
        }).catch(e=>console.log(e));
        
    },[productId]);

    return product;
};

export default useProduct;