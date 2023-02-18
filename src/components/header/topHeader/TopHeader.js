import './TopHeader.css';
import { Link } from "react-router-dom";

function TopHeader() {
    return (
        <div id="top-header">
            <div className="container">
                <ul className="header-links pull-left">
                    <li><Link to="/"><i className="fa fa-phone"></i> +021-95-51-84</Link></li>
                    <li><Link to="/about"><i className="fa fa-envelope-o"></i> email@email.com</Link></li>
                    <li><a href="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
                </ul>
                <ul className="header-links pull-right">
                    <li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
                    <li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
                </ul>
            </div>
        </div>
    )
};

export default TopHeader;