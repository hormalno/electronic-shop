import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Logo() {
    return (
        <div className="col-md-3">
            <HeaderLogo>
                <Link to="/" className="logo">
                    <img src="./img/logo.png" alt="" />
                </Link>
            </HeaderLogo>
        </div>
    )
};

const HeaderLogo = styled.div `
    float: left
    .logo img {
        display: block;
    }
`


export default Logo;