import { useState, useContext, useEffect } from "react";
import { getDocs, collection, query, where, limit, orderBy } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import ProductShortView from "../../productShortView/ProductShortView";
import StoreContext from "../../../contexts/store/StoreContext";
import "./Content.css";

const Content = () => {

    const category = useContext(StoreContext);
    const [products, setProducts] = useState([]);
    const [sorting, setSorting] = useState("name");
    const [perPage, setPerPage] = useState(9);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
	const [currentPageData, setCurrentPageData] = useState([]);
    const [productShowed, setProductShowed] = useState({start:0, end:0})
   

    useEffect(()=> {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'});
        let q;
        if (category) {
            q = query(collection(db, "products"), where("category", "==", category), orderBy(sorting), limit(12));
        } else {
            q = query(collection(db, "products"), orderBy(sorting), limit(24));
        };

        getDocs(q)
        .then((querySnapshot) => {
            let foundProducts = [];
            querySnapshot.forEach((doc) => {
                foundProducts.push(doc.data());
            })
            setProducts(foundProducts);
            setCurrentPage(1);
            setPageCount(Math.ceil(foundProducts.length / perPage))
        }).catch(e => console.log(e));
    },[category, perPage, sorting])

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'});
        let offset = (currentPage - 1) * perPage;
        setCurrentPageData(products.slice(offset, offset + perPage));
        setProductShowed({start: (offset+1), end:(offset+products.slice(offset, offset + perPage).length)})
    },[currentPage,perPage,products])

    const getPages = (pageCount) => {
        let pages = [];
        for (let index = 1; index <= pageCount; index++) {
            pages.push(<li className={currentPage === index ? 'active' : ''} key={index} onClick={e => handlePageClick(e,index)}>{index}</li>)
        }
        return pages;
    };
    
    const handlePageClick = (e, page) => {setCurrentPage(page);};
    
    return (
        <div id="store" className="col-md-9"> 
            <div className="store-filter clearfix">
                <div className="store-sort">
                    <label htmlFor="sortBy">Sort by:
                        <select className="input-select" id="sortBy" name="sortBy" onChange={e=>setSorting(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </label>
                    <label htmlFor="productToShow">Show:
                        <select className="input-select" id="productToShow" name="productToShow" onChange={e=>setPerPage(e.target.value)}>
                            <option value="6">6</option>
                            <option value="9">9</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="row">
                {currentPageData &&
                 currentPageData.map(product => 
                        <div key={product.id} className="col-md-4 col-xs-6">
                            <ProductShortView key={product.id} productId={product.id} />
                        </div>)}
            </div>
            <div className="store-filter clearfix">
                <span className="store-qty">Showing {productShowed.start}-{productShowed.end} products</span>
                <ul className="store-pagination">
                    {getPages(pageCount)}
                    <li><i className="fa fa-angle-right"></i></li>
                </ul>
            </div>
        </div>
    )
};

export default Content;