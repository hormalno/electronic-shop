import Product from './Product';
import './Products.css';
import Slider from 'react-slick';
import { useRef } from 'react';

function Products(props) {
	const mockData = [1,2,3,4,5,6];

	const settings = {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		infinite: true,
		speed: 300,
		dots: false,
		arrows: false,
		appendArrows: true,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}}]
	};

	let slider = useRef();
	const next = () => {
		slider.slickNext();
	};
	const previous = () => {
		slider.slickPrev();
	};

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">{props.title}</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								<div id="tab1" className="tab-pane active">
									<Slider ref={c => (slider = c)} className="products-slick" {...settings}>
										{mockData.map(data => (
											<Product key={data} />
											))};
									</Slider>
									<div className="products-slick-nav">
										<button className="slick-prev" onClick={previous}>Previous</button>
										<button className="slick-next" onClick={next}>Next</button>					
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Products;