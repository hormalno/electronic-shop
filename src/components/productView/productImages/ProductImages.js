import { useState, useContext } from "react";
import ProductContext from "../../../contexts/product/ProductContext";
import Slider from "react-slick";
import './ProductImages.css';

const ProductImages = () => {

    const product = useContext(ProductContext);
    const [slider1,setSlider1] = useState();
	const [slider2,setSlider2] = useState();
    let images = product?.images;

	const sliderMainImg = {
		infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        fade: true,
	};

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

	
 
    return (
        <>
            <div className="col-md-5 col-md-push-2">            
                <Slider id="product-main-img" asNavFor={slider2} ref={s1 =>setSlider1(s1) } {...sliderMainImg}>
                    {images && images.map((img) =><img key={img} src={'/'+img} alt={img} />)}
                </Slider>
            </div>
            <div className="col-md-2  col-md-pull-5">
                <Slider id="product-imgs" asNavFor={slider1} ref={s2 => setSlider2(s2)} {...sliderImgs}>
                    {images && images.map((img) => 
                         (<div key={img} className="product-preview">
                            <img src={"/"+img} alt={img} />
                         </div>)
                    )}                   
                </Slider>
            </div>
        </>
    )
};

export default ProductImages;