import WidgetItem from "../widgetItem/WidgetItem";
import { useRef } from 'react';
import Slider from 'react-slick';
import {ProductsSlickNavStyle} from "../../../../components/products/ProductsSlickNavStyle";
import {WidgetSectionTitle,WidgetSectionNav} from "./WidgetSectionStyle";

function WidgetSection(props) {

    let slider = useRef();

    const sliderSettings = {
        infinite: true,
        autoplay: true,
        speed: 300,
        dots: false,
        arrows: false,
        appendArrows: true
    };

    return (
        <div className="col-md-4 col-xs-6">
            <WidgetSectionTitle>
                <h4 class="title">Top selling</h4>
                <WidgetSectionNav>
                    <ProductsSlickNavStyle>
                        <button className="slick-prev" onClick={() => {slider.slickPrev()}}>Previous</button>
						<button className="slick-next" onClick={() => {slider.slickNext()}}>Next</button>		
                    </ProductsSlickNavStyle>
                </WidgetSectionNav>
            </WidgetSectionTitle>
            <Slider ref={s => (slider = s)} className="products-widget-slick" {...sliderSettings}>
                <div>
                    {props.mockData.slice(0,3).map(() => <WidgetItem img="./img/product01.png" />)}
                </div>
                <div>
                    {props.mockData.slice(3,6).map(() => <WidgetItem img="./img/product02.png" />)}
                </div>
            </Slider>
        </div>
    )
}

export default WidgetSection;