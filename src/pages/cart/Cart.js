import { useContext, useEffect } from "react";
import CartContext from "../../contexts/cart/CartContext";

const Cart = () => {

    const {cartItems,removeFromCart,increase,decrease,handleCheckout,clearCart} = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="container">
            <h1>CART ITEMS</h1>
            {cartItems.map(item => {
                return <p>{item.name}</p>
            })}
        </div>
     );
}
 
export default Cart;