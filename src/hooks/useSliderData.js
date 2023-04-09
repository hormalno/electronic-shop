import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useSliderData = (mainFilter, category) => {

    const [products, setProducts] = useState([]);
    
    useEffect(()=> {
        const productsRef = collection(db, "products");
        let q;
        if (mainFilter === "new") {
            if (category) {
                q = query(productsRef, where("isNew", "==", true), where("category", "==", category));
            } else {
                q = query(productsRef, where("isNew", "==", true));
            }
        } else if (mainFilter === "rated") {
            if (category) {
                q = query(productsRef, where("rating", ">=", 4), where("category", "==", category));
            } else {
                q = query(productsRef, where("rating", ">=", 4));
            }
        } else if (mainFilter === "sale") {
            if (category) {
                q = query(productsRef, where("sale", ">=", 1), where("category", "==", category));
            } else {
                q = query(productsRef, where("sale", ">=", 1));
            }
        };

        getDocs(q)
        .then((querySnapshot) => {
            if (querySnapshot.docs.length > 0) {
                let foundProduct = [];
                querySnapshot.forEach((doc) => {
                    foundProduct.push(doc.data());
                })
                setProducts(foundProduct);
            };
        }).catch(e => console.log(e));

    },[mainFilter,category])

    return products;
};

export default useSliderData;