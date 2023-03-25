import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductShortView from "../../productShortView/ProductShortView";
import {getAllProductsByCategory} from "../../../services/ProductService";
import "./Content.css"

const Content = ({category}) => {

    const [currentPage, setCurrentPage] = useState(1);
	const [storeData, setStoreData] = useState([]);
	const [perPage, setPerPage] = useState(9);

	useEffect(() => {
		let products = getAllProductsByCategory(category);
		setStoreData(products);
	},[]);

    const offset = currentPage * perPage;
    let currentPageData = storeData
    .slice(offset, offset + perPage)
    .map(product => <div className="col-md-4 col-xs-6">
                <ProductShortView key={product.id} product={product} />
    </div>);
    const pageCount = Math.ceil(storeData.length / perPage);    
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };
	const handleChange = event => {
        setPerPage(+event.target.value);
        setCurrentPage(1)
    };

    return (
        <div id="store" className="col-md-9">
            <div className="store-filter clearfix">
                <div className="store-sort">
                    <label>
                        Sort By:
                        <select name="pageSorting" className="input-select">
                            <option value="popular">Popular</option>
                            <option value="position">Position</option>
                        </select>
                    </label>
                    <label>
                        Show:
                        <select name="pageNumber" onChange={handleChange} value={perPage} className="input-select">
                            <option value={9}>9</option>
                            <option value={18}>18</option>
                        </select>
                    </label>
                </div>
                <ul className="store-grid">
                    <li className="active"><i className="fa fa-th"></i></li>
                    <li><a href="#"><i className="fa fa-th-list"></i></a></li>
                </ul>
            </div>
            <div className="row">
                {currentPageData}
            </div>
            <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
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
        </div>
    )
};

export default Content;