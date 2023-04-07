import {
    ProductWidget,
    ProductWidgetImg,
    ProductWidgetBody,
    ProductWidgetCategory,
    ProducgWidgetName,
    ProductWidgetPrice
} from './WidgetItemStyle';

function WidgetItem(props) {
    return (
        <ProductWidget>
            <ProductWidgetImg>
                <img src={props.img} alt=""/>
            </ProductWidgetImg>
            <ProductWidgetBody>
                <ProductWidgetCategory>Category</ProductWidgetCategory>
                <ProducgWidgetName><a href="#">product name goes here</a></ProducgWidgetName>
                <ProductWidgetPrice>$980.00 <del className="product-old-price">$990.00</del></ProductWidgetPrice>
            </ProductWidgetBody>
        </ProductWidget>
    )
}

export default WidgetItem;