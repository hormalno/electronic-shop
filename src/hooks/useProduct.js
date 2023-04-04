import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const useProduct = (productID) => {

    const [product, setProduct] = useState({});

    useEffect(() => { 
        getDoc(doc(db, "products", "dafGZIUVI6GpT3sPOSpq"))
        .then((docSnap) => {
            if (docSnap.exists()) {
                setProduct(docSnap.data());
            } else {
                console.log("No such document!");
            }
        }).catch(e=>console.log(e))       
    },[productID]);

    return product;
};

export default useProduct;