import { Link } from "react-router-dom";
import styled from "styled-components";

function TopFooter() {
    return (
        <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">About Us</h3>
							<p>Lorem ipsum dolor sit amet.</p>
							<FoooterLinks>
								<li><Link to="/#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</Link></li>
								<li><Link to="#"><i className="fa fa-phone"></i>+021-95-51-84</Link></li>
								<li><Link to="#"><i className="fa fa-envelope-o"></i>email@email.com</Link></li>
							</FoooterLinks>
						</FooterClass>
					</div>
					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">Categories</h3>
							<FoooterLinks>
								<li><Link to="/categories/laptops">Laptops</Link></li>
								<li><Link to="/categories/smartphones">Smartphones</Link></li>
								<li><Link to="/categories/cameras">Cameras</Link></li>
								<li><Link to="/categories/accessories">Accessories</Link></li>
							</FoooterLinks>
						</FooterClass>
					</div>
					<div className="clearfix visible-xs"></div>
					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">Information</h3>
							<FoooterLinks>
								<li><Link to="about" target="_blank" rel="noopener noreferrer">About Us</Link></li>
								<li><Link to="contact" target="_blank" rel="noopener noreferrer">Contact Us</Link></li>
								<li><Link to="orders" target="_blank" rel="noopener noreferrer">Orders and Returns</Link></li>
								<li><Link to="terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link></li>
							</FoooterLinks>
						</FooterClass>
					</div>
					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">Service</h3>
							<FoooterLinks>
								<li><Link to="/profile">My Account</Link></li>
								<li><Link to="/cart">View Cart</Link></li>
								<li><Link to="/wishlist">Wishlist</Link></li>
								<li><Link to="/profile/orders">View My Orders</Link></li>
							</FoooterLinks>
						</FooterClass>
					</div>
				</div>
			</div>
		</div>
    )
}

export default TopFooter;

const FooterClass = styled.div `
	margin: 30px 0px;
	.footer-title {
		color: #FFF;
		text-transform: uppercase;
		font-size: 18px;
		margin: 0px 0px 30px;
	}
` 

const FoooterLinks = styled.ul `
	li+li {
		margin-top: 15px;
	}
	li a {
		color: #B9BABC;
		:hover {
			color: #D10024;
		}
	}
	li i {
		margin-right: 15px;
		color: #D10024;
		width: 14px;
		text-align: center;
	}
`