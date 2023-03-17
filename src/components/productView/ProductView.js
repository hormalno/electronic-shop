import { useState } from 'react';
import Slider from 'react-slick';
import ProductOverview from './ProductOverview';
import ProductInformation from './ProductInformation';
import './ProductView.css'

function ProductView(props) {

	// Product Main img Slick
	const sliderMainImg = {
		infinite: true,
		speed: 300,
		dots: false,
		fade: true
	};
	
	// Product imgs Slick
	const sliderImgs = {
		slidesToShow: 3,
		slidesToScroll: 1,
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
					<ProductOverview product={props.product} />
					<ProductInformation product={props.product} />
				</div>
			</div>
		</div>
    )
};

export default ProductView;