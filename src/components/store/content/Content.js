import { useState, useContext } from "react";
import useStoreData from "../../../hooks/useStoreData";
import ReactPaginate from "react-paginate";
import ProductShortView from "../../productShortView/ProductShortView";
import StoreContext from "../../../contexts/StoreContext";
import "./Content.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Content = () => {
    const category = useContext(StoreContext);
    const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(9);
    const {currentPageData,pageCount,productShowed} = useStoreData(category, currentPage, perPage);

    let pages = [];
    for (let index = 1; index <= pageCount; index++) {
        pages.push(<li key={index} onClick={e => handlePageClick(e,index)}>{index}</li>)        
    }

    const handlePageClick = (e, page) => {
        setCurrentPage(page);
    };
	
    return (
        <>       
            <div className="row">
                {currentPageData &&
                 currentPageData.map(product => 
                        <div key={product.id} className="col-md-4 col-xs-6">
                            <ProductShortView key={product.id} product={product} />
                        </div>)}
            </div>
            <div className="store-filter clearfix">
                <span className="store-qty">Showing {productShowed.start}-{productShowed.end} products</span>
                <ul className="store-pagination">
                    {pages}
                    <li><i className="fa fa-angle-right"></i></li>
                </ul>
            </div>
        </>
    )
};

export default Content;