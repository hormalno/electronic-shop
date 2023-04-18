import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useSliderData = (mainFilter, mainCategory, category) => {

    const [products, setProducts] = useState([]);
    
    useEffect(()=> {
        const productsRef = collection(db, "products");
        let q;
        if (mainFilter === "new") {
            if (category) {
                q = query(productsRef, where("isNew", "==", true), where("category", "==", category), orderBy("name"), limit(6));
            } else {
                q = query(productsRef, where("isNew", "==", true), limit(6));
            }
        } else if (mainFilter === "rated") {
            if (category) {
                q = query(productsRef, where("rating", ">=", 4), where("category", "==", category), orderBy("rating", "desc"), limit(6));
            } else {
                q = query(productsRef, where("rating", ">=", 4), orderBy("rating", "desc"), limit(6));
            }
        } else if (mainFilter === "sale") {
            if (category) {
                q = query(productsRef, where("sale", ">=", 1), where("category", "==", category), orderBy("sale", "desc"), limit(6));
            } else {
                q = query(productsRef, where("sale", ">=", 1), orderBy("sale", "desc"), limit(6));
            }
        } else if (!mainFilter) {
            q = query(productsRef, where("category", "==", mainCategory), orderBy("name", "asc"), limit(6));
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

    },[mainFilter,mainCategory,category])

    return products;
};

export default useSliderData;