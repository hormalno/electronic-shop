const TopFilter = () => {

    return (
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
                    <select name="pageNumber" className="input-select">
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