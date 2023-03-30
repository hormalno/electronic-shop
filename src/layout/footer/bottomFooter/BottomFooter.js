import { Link } from "react-router-dom";
import styled from "styled-components";

function BottomFooter() {
    return (
        <BottomFooterStyle>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <FooterPayment>
                            <li><Link to="#"><i className="fa fa-cc-visa"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-credit-card"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-paypal"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-mastercard"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-discover"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-amex"></i></Link></li>
                        </FooterPayment>
                        <Copyright>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                        </Copyright>
                    </div>
                </div>
            </div>
        </BottomFooterStyle>
    )
}

export default BottomFooter;

const BottomFooterStyle = styled.div `
    background: #1E1F29;
`
const Copyright = styled.span `
    margin-top: 30px;
    display: block;
    font-size: 12px;
`
const FooterPayment = styled.ul `
li {
    display: inline-block;
    margin-right: 5px;
    a {
        color: #15161D;
        font-size: 36px;
        display: block;
    }
}
`
