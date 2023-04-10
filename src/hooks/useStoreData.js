import { getDocs, collection, query, where, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useStoreData = (queries) => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        let q;
        if (queries) {
            q = query(collection(db, "products"), where("category", "==", queries), limit(12));
        } else {
            q = query(collection(db, "products"), limit(12));
        };

        getDocs(q)
        .then((querySnapshot) => {
            let foundProduct = [];
            querySnapshot.forEach((doc) => {
                foundProduct.push(doc.data());
            })
            setProducts(foundProduct);
        }).catch(e => console.log(e));
    },[queries])

    return products;
};

export default useStoreData;