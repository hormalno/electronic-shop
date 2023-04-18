import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ProductContext from "../../../contexts/product/ProductContext";
import ProductReviews from "./productReviews/ProductReviews";
import {ProductTabStyle} from './ProductInformationStyle';

const ProductInformation = () => {
    
    const product = useContext(ProductContext);
    const [tabName, setTabName] = useState('description');
    const [tabContent, setTabContent] = useState('');
    const onClickHandler = (e) => {e.preventDefault();setTabName(e.target.name);};

    useEffect(() => {
        if (tabName === "description") {
            setTabContent(<div className='col-md-12'>
                            <p>{product?.description}</p>
                        </div>)
        } else if (tabName === "details") {
            setTabContent(<div className='col-md-12'>
                            <p>{product?.details}</p>
                        </div>)
        } else  {
            setTabContent(<ProductReviews />)
        }
    },[tabName,product])

    return ( 
        <div id="productTap" className="col-md-12">
            <ProductTabStyle>
                <ul className="tab-nav">
                    <li className={tabName === "description" ? "active" : ''}><Link to="#productTap" name="description" onClick={onClickHandler}>Description</Link></li>
                    <li className={tabName === "details" ? "active" : ''}><Link to="#productTap" name="details" onClick={onClickHandler}>Details</Link></li>
                    <li className={tabName === "reviews" ? "active" : ''}><Link to="#productTap" name="reviews" onClick={onClickHandler}>Reviews</Link></li>
                </ul>
                <div className="tab-content">
                    {tabContent}
                </div>
            </ProductTabStyle>
        </div>
    )
};

export default ProductInformation;