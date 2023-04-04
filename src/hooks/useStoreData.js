import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useStoreData = (queries) => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        let q;
        if (queries) {
            q = query(collection(db, "products"), where("category", "==", queries));
        } else {
            q = query(collection(db, "products"));
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