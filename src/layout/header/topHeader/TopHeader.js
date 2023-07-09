import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../../contexts/auth/AuthContext';
import CurrencyContext from '../../../contexts/currency/CurrencyContext';
import './TopHeader.css';

function TopHeader() {

    const {isAuthenticated, username} = useContext(AuthContext);
    const [account, setAccount] = useState('');
    const {currency,setCurrency} = useContext(CurrencyContext);

    useEffect(() => {
        if (isAuthenticated) {
            setAccount(<>
                            <li><Link to="/profile"><i className="fa fa-user-o"></i>Welcome, {username}</Link></li>
                            <li><Link to="/logout"> Logout</Link></li>
                        </>)
        } else {
            setAccount(<>
                            <li><Link to="/login"><i className="fa fa-user-o"></i>Log In</Link></li>
                            <li><Link to="/register"> Register</Link></li>
                        </>)
        }
    }, [isAuthenticated,username])

    console.log(currency)

    return (
        <div id="top-header">
            <div className="container">
                <ul className="header-links pull-left">
                    <li><Link to="#"><i className="fa fa-phone"></i> +021-95-51-84</Link></li>
                    <li><Link to="#"><i className="fa fa-envelope-o"></i> email@email.com</Link></li>
                    <li><Link to="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</Link></li>
                </ul>
                <ul className="header-links pull-right">
                    <li><Link to="#" onClick={()=>setCurrency('USD')}><i className="fa fa-dollar"></i> USD</Link></li>
                    <li><Link to="#" onClick={()=>setCurrency('EUR')}><i className="fa fa-euro"></i> EUR</Link></li>
                    {account}                   
                </ul>
            </div>
        </div>
    )
};

export default TopHeader;