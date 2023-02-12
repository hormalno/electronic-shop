import styled from "styled-components";

function SearchBar() {
    return (
        <div className="col-md-6">
            <HeaderSearch>
                <form>
                    <select className="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                    </select>
                    <input className="input" placeholder="Search here" />
                    <button className="search-btn">Search</button>
                </form>
            </HeaderSearch>
        </div>
    )
}

const HeaderSearch = styled.div `
    padding: 15px 0px;
    form {
        position: relative;
        .input-select {
            margin-right: -4px;
            border-radius: 40px 0px 0px 40px;
        }
        .input {
            width: calc(100% - 260px);
            margin-right: -4px;
        }
        .search-btn {
            height: 40px;
            width: 100px;
            background: #D10024;
            color: #FFF;
            font-weight: 700;
            border: none;
            border-radius: 0px 40px 40px 0px;
        }
    }
`


export default SearchBar;