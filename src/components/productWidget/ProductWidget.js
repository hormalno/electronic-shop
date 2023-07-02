import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/cart/CartContext";
import "./ProductWidget.css"


const ProductWidget = ({product}) => {

    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="product-widget">
            <div className="product-img">
                <img src={'/'+product.mainImg} alt={product.name} />
            </div>
            <div className="product-body">
                <h3 className="product-name"><a href={'/categories/'+product.category+'/'+product.id}>{product.name}</a></h3>
                <h4 className="product-price"><span className="qty">{product.quantity}x</span>${product.price}</h4>
            </div>
            <button className="delete" onClick={() => removeFromCart(product)}><i className="fa fa-close"></i></button>
        </div>
    );
}
 
export default ProductWidget;