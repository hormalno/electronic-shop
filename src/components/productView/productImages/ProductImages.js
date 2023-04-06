import { useState } from "react";
import Slider from "react-slick";
import {ProductMainImg,ProductImgs} from "./ProductImagesStyle";
import { useContext } from "react";
import ProductContext from "../../../contexts/ProductContext";
import './ProductImages.css';

const ProductImages = () => {

    const product = useContext(ProductContext);

	const sliderMainImg = {
		infinite: true,
		arrows: true,
		speed: 300,
		dots: false,
		fade: true
	};

	const sliderImgs = {
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0,
		vertical: true
	};

	const [slider1,setSlider1] = useState();
	const [slider2,setSlider2] = useState();
 
    return (
        <>
            <ProductMainImg className="col-md-5 col-md-push-2">
                <Slider id="product-main-img" asNavFor={slider2} ref={s1 =>setSlider1(s1) } {...sliderMainImg}>
                    {product?.images?.map((img) =><img key={img} src={img} alt="" />)}
                </Slider>
            </ProductMainImg>
            <ProductImgs className="col-md-2  col-md-pull-5">
                <Slider id="product-imgs" asNavFor={slider1} ref={s2 => setSlider2(s2)} {...sliderImgs}>
                    {product?.images?.map((img) => 
                        <div key={img} className="product-preview">
                            <img src={img} alt="" />
                        </div>
                    )}                   
                </Slider>
            </ProductImgs>
        </>
    )
};

export default ProductImages;