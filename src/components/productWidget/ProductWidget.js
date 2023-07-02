import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/cart/CartContext";
import "./ProductWidget.css"


const ProductWidget = ({viewType,product}) => {

    const { removeFromCart } = useContext(CartContext);
    const [productWidgetView, setProductWidgetView] = useState('');

    useEffect(() => {
        if (viewType === "cartThumb") {
            setProductWidgetView(
                (<>
                    <div className="product-img">
                        <img src={'/'+product.mainImg} alt={product.name} />
                    </div>
                    <div className="product-body">
                        <h3 className="product-name"><a href={'/categories/'+product.category+'/'+product.id}>{product.name}</a></h3>
                        <h4 className="product-price"><span className="qty">{product.quantity}x</span>${product.price}</h4>
                    </div>
                    <button className="delete" onClick={() => removeFromCart(product)}><i className="fa fa-close"></i></button>
                </>)
            )
        } else if (viewType === "cartFull") {
            setProductWidgetView(
                (<>
                    <div className="product-img">
                        <img src={'/'+product.mainImg} alt={product.name} />
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <h4>{product.quantity}</h4>                
                    </div>
                    <button className="delete" onClick={() => removeFromCart(product)}><i className="fa fa-close"></i></button>
                </>)
            );
        } else {
            setProductWidgetView('');
        }
    },[viewType,product,removeFromCart])

    return (
        <div className="product-widget">
            {productWidgetView}
        </div>
    );
}
 
export default ProductWidget;