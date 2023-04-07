import ProductShortView from '../productShortView/ProductShortView';
import Slider from 'react-slick';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSliderData from '../../hooks/useSliderData';
import { SectionTitleClass, SectionNavClass, SectionTabNavClass, ProductsTabsClass } from './ProductsSliderStyle';
import {ProductsSliderNavStyle} from "./ProductsSliderNavStyle";

function ProductsSlider({title, mainFilter}) {
	const sliderSettings = {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		infinite: true,
		speed: 300,
		dragable: true,
		dots: false,
		arrows: false,
		appendArrows: true
	};

	const [slider, setSlider] = useState();	
	const [category, setCategory] = useState('');
	const sliderProducts = useSliderData(mainFilter,category);

	const onClickHandler = (e) => {
		e.preventDefault();
        setCategory(e.target.name);
	};

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<SectionTitleClass>
							<h3 className="title">{title}</h3>
							<SectionNavClass>
								<SectionTabNavClass>
									<li className={category === 'laptop' ? 'active' : ''}><Link to="#navTap" name="laptop" onClick={onClickHandler}>Laptops</Link></li>
									<li className={category === 'smartphone' ? 'active' : ''}><Link to="#navTap" name="smartphone" onClick={onClickHandler}>Smartphones</Link></li>
									<li className={category === 'camera' ? 'active' : ''}><Link to="#navTap" name="camera" onClick={onClickHandler}>Cameras</Link></li>
									<li className={category === 'accessory' ? 'active' : ''}><Link to="#navTap" name="accessory" onClick={onClickHandler}>Accessories</Link></li>
								</SectionTabNavClass>
							</SectionNavClass>
						</SectionTitleClass>
					</div>
					<div className="col-md-12">
						<div className="row">
							<ProductsTabsClass>
								<div id="tab1" className="tab-pane active">
									<Slider ref={s => setSlider(s)} className="products-slick" {...sliderSettings}>
										{sliderProducts && sliderProducts.map((product)=> {return <ProductShortView key={product.id} product={product} />})}
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