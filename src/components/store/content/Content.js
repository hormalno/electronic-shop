import { useState, useContext } from "react";
import useStoreData from "../../../hooks/useStoreData";
import ReactPaginate from "react-paginate";
import ProductShortView from "../../productShortView/ProductShortView";
import StoreContext from "../../../contexts/StoreContext";
import "./Content.css";

const Content = () => {
    const category = useContext(StoreContext);
    const storeData = useStoreData(category);

    const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(9);	

    const offset = currentPage * perPage;
    let currentPageData = storeData.slice(offset, offset + perPage);
    const pageCount = Math.ceil(storeData.length / perPage);    
    const handlePageClick = ({ selected: selectedPage }) => {setCurrentPage(selectedPage);};
	
    return (
        <>       
            <div className="row">
                {currentPageData
                    .map(product => 
                        <div key={product.id} className="col-md-4 col-xs-6">
                            <ProductShortView key={product.id} product={product} />
                        </div>)}
            </div>
            <div className="store-filter clearfix">
                <span className="store-qty">Showing {offset+1}-{offset+perPage} products</span>
                <ul className="store-pagination">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel='>'
                        previousLabel='<'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1} 
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        activeClassName = "active"
                    />
                </ul>
            </div>
        </>
    )
};

export default Content;