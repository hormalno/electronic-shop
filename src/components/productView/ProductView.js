import { useState } from 'react';
import Slider from 'react-slick';
import './ProductView.css'

function ProductView(props) {

	// Product Main img Slick
	const sliderMainImg = {
		infinite: true,
		speed: 300,
		dots: false,
		arrows: true,
		fade: true,
		// asNavFor: '#product-imgs',
	};
	
		// Product imgs Slick
	const sliderImgs = {
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
		responsive: [{
			breakpoint: 991,
			settings: {
				vertical: false,
				arrows: false,
				dots: true,
			}
		  },
		]
	};

	const [slider1,setSlider1] = useState();
	const [slider2,setSlider2] = useState();

	const oldPrice = props.product.oldPrice ? <del className="product-old-price">${props.product.oldPrice.toFixed(2)}</del> : '';


    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-md-push-2">
						<Slider id="product-main-img" asNavFor={slider2} ref={s1 =>setSlider1(s1) } {...sliderMainImg}>
							{props.product.imgs.map((img) => 
								<div className="product-preview">
									<img src={img} alt="" />
								</div>
							)}
						</Slider>
					</div>
					<div className="col-md-2  col-md-pull-5">
						<Slider id="product-imgs" asNavFor = {slider1} ref = {s2 => setSlider2(s2)} {...sliderImgs}>
							{props.product.imgs.map((img) => 
								<div className="product-preview">
									<img src={img} alt="" />
								</div>
							)}
						</Slider>
					</div>
					<div className="col-md-5">
						<div className="product-details">
							<h2 className="product-name">{props.product.name}</h2>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a className="review-link" href="#">10 Review(s) | Add your review</a>
							</div>
							<div>
								<h3 className="product-price">${props.product.price.toFixed(2)} {oldPrice}</h3>
								<span className="product-available">In Stock</span>
							</div>
							<p>{props.product.shortDescription}</p>
							<div className="product-options">
								<label>
									Size
									<select className="input-select">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Color
									<select className="input-select">
										<option value="0">Red</option>
									</select>
								</label>
							</div>
							<div className="add-to-cart">
								<div className="qty-label">
									Qty
									<div className="input-number">
										<input type="number"/>
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
							</div>
							<ul className="product-btns">
								<li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
								<li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
							</ul>
							<ul className="product-links">
								<li>Category:</li>
								<li><a href="#">Headphones</a></li>
								<li><a href="#">Accessories</a></li>
							</ul>
							<ul className="product-links">
								<li>Share:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-12">
						<div id="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab2">Details</a></li>
								<li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
							</ul>
							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<div className="row">
										<div className="col-md-12">
											<p>{props.product.description}</p>
										</div>
									</div>
								</div>
								<div id="tab2" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-12">
											<p>{props.product.details}</p>
										</div>
									</div>
								</div>
								<div id="tab3" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-o"></i>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-progress">
															{/* <div style={width: 80%;}></div> */}
														</div>
														<span className="sum">3</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															{/* <div style="width: 60%;"></div> */}
														</div>
														<span className="sum">2</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-md-6">
											<div id="reviews">
												<ul className="reviews">
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul className="reviews-pagination">
													<li className="active">1</li>
													<li><a href="#">2</a></li>
													<li><a href="#">3</a></li>
													<li></li>
													<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Your Name"/>
													<input className="input" type="email" placeholder="Your Email"/>
													<textarea className="input" placeholder="Your Review"></textarea>
													<div className="input-rating">
														<span>Your Rating: </span>
														<div className="stars">
															<input id="star5" name="rating" value="5" type="radio"/><label for="star5"></label>
															<input id="star4" name="rating" value="4" type="radio"/><label for="star4"></label>
															<input id="star3" name="rating" value="3" type="radio"/><label for="star3"></label>
															<input id="star2" name="rating" value="2" type="radio"/><label for="star2"></label>
															<input id="star1" name="rating" value="1" type="radio"/><label for="star1"></label>
														</div>
													</div>
													<button className="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
};

export default ProductView;