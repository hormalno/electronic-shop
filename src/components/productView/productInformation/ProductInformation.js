import { Link, NavLink, useParams } from "react-router-dom";
import {ProductTabStyle} from './ProductInformationStyle';
import TabContent from "./tabContent/TabContent";
import { useState } from "react";

const ProductInformation = () => {
    
    const [tabId, setTabId] = useState('tab1');

    const onClickHandler = (e) => {
        e.preventDefault();
        setTabId(e.target.name);
    };

    return ( 
        <div id="productTap" className="col-md-12">
            <ProductTabStyle>
                <ul className="tab-nav">
                    <li className={tabId === "tab1" ? "active" : ''}><Link to="#productTap" name="tab1" onClick={onClickHandler}>Description</Link></li>
                    <li className={tabId === "tab2" ? "active" : ''}><Link to="#productTap" name="tab2" onClick={onClickHandler}>Details</Link></li>
                    <li className={tabId === "tab3" ? "active" : ''}><Link to="#productTap" name="tab3" onClick={onClickHandler}>Reviews</Link></li>
                </ul>
                <div className="tab-content">
                    <TabContent tabId={tabId} />
                </div>
            </ProductTabStyle>
        </div>
    )
};

export default ProductInformation;