import styled from "styled-components";

function TopFooter() {
    return (
        <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">About Us</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
							<FoooterLinks>
								<li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
								<li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
								<li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
							</FoooterLinks>
						</FooterClass>
					</div>

					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">Categories</h3>
							<FoooterLinks>
								<li><a href="#">Hot deals</a></li>
								<li><a href="#">Laptops</a></li>
								<li><a href="#">Smartphones</a></li>
								<li><a href="#">Cameras</a></li>
								<li><a href="#">Accessories</a></li>
							</FoooterLinks>
						</FooterClass>
					</div>

					<div className="clearfix visible-xs"></div>

					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">Information</h3>
							<FoooterLinks>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Orders and Returns</a></li>
								<li><a href="#">Terms & Conditions</a></li>
							</FoooterLinks>
						</FooterClass>
					</div>

					<div className="col-md-3 col-xs-6">
						<FooterClass>
							<h3 className="footer-title">Service</h3>
							<FoooterLinks>
								<li><a href="#">My Account</a></li>
								<li><a href="#">View Cart</a></li>
								<li><a href="#">Wishlist</a></li>
								<li><a href="#">Track My Order</a></li>
								<li><a href="#">Help</a></li>
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