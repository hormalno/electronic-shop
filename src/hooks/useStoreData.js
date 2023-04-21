import { getDocs, collection, query, where, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useStoreData = (category,currentPage,perPage) => {

    const [currentPageData, setCurrentPageData] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(()=> {
        window.scrollTo({top:0,left:0})
        let q;
        if (category) {
            q = query(collection(db, "products"), where("category", "==", category), limit(12));
        } else {
            q = query(collection(db, "products"), limit(12));
        };

        getDocs(q)
        .then((querySnapshot) => {
            let foundProducts = [];
            querySnapshot.forEach((doc) => {
                foundProducts.push(doc.data());
            })

            let offset = (currentPage - 1) * perPage;
            setCurrentPageData(foundProducts.slice(offset, offset + perPage));
            setPageCount(Math.ceil(foundProducts.length / perPage));      
        }).catch(e => console.log(e));
    },[category,currentPage,perPage])

    return {
        currentPageData: currentPageData,
        pageCount: pageCount,
        productShowed: {
            start:((currentPage - 1) * perPage)+1,
            end:((currentPage - 1) * perPage)+currentPageData.length
        }
    };
};

export default useStoreData;