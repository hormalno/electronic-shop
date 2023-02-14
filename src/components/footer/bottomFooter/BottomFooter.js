import styled from "styled-components";

function BottomFooter() {
    return (
        <BottomFooterStyle>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <FooterPayment>
                            <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                            <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
                            <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                            <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                            <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                            <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
                        </FooterPayment>
                        <Copyright>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
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
