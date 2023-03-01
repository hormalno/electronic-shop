import styled from 'styled-components';

function Logo() {
    return (
        <div className="col-md-3">
            <HeaderLogo>
                <a href="#" className="logo">
                    <img src="./img/logo.png" alt="" />
                </a>
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