import "./TopFilter.css"

const TopFilter = () => {

    return (
        <div className="store-filter clearfix">
            <div className="store-sort">
                <label htmlFor="sorting">Sort By:
                    <select id="sorting" name="pageSorting" className="input-select">
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </label>
                <label htmlFor="pageNumber">Show:
                    <select id="pageNumber" name="pageNumber" className="input-select">
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
    )
};

export default TopFilter;