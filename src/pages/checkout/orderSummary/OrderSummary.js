import { useContext } from "react";
import CartContext from "../../../contexts/cart/CartContext";
import CurrencyContext from "../../../contexts/currency/CurrencyContext";
import { priceView } from "../../../utils/currency";
import "./OrderSummary.css";

const OrderSummary = () => {

    const {cartItems,total} = useContext(CartContext);
    const {currency} = useContext(CurrencyContext);

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
                            <div>{product.quantity} x {product.name}</div>
                            <div>{priceView(product.price,currency)}</div>
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
                <div><strong className="order-total">{priceView(total,currency)}</strong></div>
            </div>
        </div>
    );
}
 
export default OrderSummary;