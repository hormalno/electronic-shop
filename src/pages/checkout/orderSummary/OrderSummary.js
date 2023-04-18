import { useContext } from "react";
import CartContext from "../../../contexts/cart/CartContext";
import "./OrderSummary.css";

const OrderSummary = () => {

    const {cartItems,total} = useContext(CartContext)

    return (
        <div className="order-summary">
            <div className="order-col">
                <div><strong>PRODUCT</strong></div>
                <div><strong>TOTAL</strong></div>
            </div>
            <div className="order-products">
                {cartItems && cartItems.map(product =>
                    (
                        <div key={product.id} className="order-col">
                            <div>{product.quantity}x {product.name}</div>
                            <div>${product.price.toFixed(2)}</div>
                        </div>
                    ))
                }
            </div>
            <div className="order-col">
                <div>Shiping</div>
                <div><strong>FREE</strong></div>
            </div>
            <div className="order-col">
                <div><strong>TOTAL</strong></div>
                <div><strong className="order-total">${total}</strong></div>
            </div>
        </div>
    );
}
 
export default OrderSummary;