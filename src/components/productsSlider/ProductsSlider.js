import ProductShortView from '../productShortView/ProductShortView';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import {SectionTitleClass,
		SectionNavClass,
		SectionTabNavClass,
		ProductsTabsClass} from './ProductsSliderStyle';
import {ProductsSliderNavStyle} from "./ProductsSliderNavStyle";

function ProductsSlider(props) {
	const sliderSettings = {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		infinite: true,
		speed: 300,
		dragable: true,
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

	let [slider, setSlider] = useState();

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<SectionTitleClass>
							<h3 className="title">{props.title}</h3>
							<SectionNavClass>
								<SectionTabNavClass>
									<li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								</SectionTabNavClass>
							</SectionNavClass>
						</SectionTitleClass>
					</div>
					<div className="col-md-12">
						<div className="row">
							<ProductsTabsClass>
								<div id="tab1" className="tab-pane active">
									<Slider ref={s => setSlider(s)} className="products-slick" {...sliderSettings}>
										{props.products.map((product)=> {return <ProductShortView product={product} />})}
									</Slider>
									<ProductsSliderNavStyle>
										<button className="slick-prev" onClick={() => {slider.slickPrev();}}>Previous</button>
										<button className="slick-next" onClick={() => {slider.slickNext();}}>Next</button>					
									</ProductsSliderNavStyle>
								</div>
							</ProductsTabsClass>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ProductsSlider;