import { useContext, useEffect } from "react";
import CartContext from "../../contexts/cart/CartContext";
import ProductWidget from "../../components/productWidget/ProductWidget";

const Cart = () => {

    const {cartItems,removeFromCart,increase,decrease,handleCheckout,clearCart} = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="container">
            <h1>CART ITEMS</h1>
            {cartItems && cartItems.map(item => {
                return <ProductWidget viewType="cartFull" product={item} />
            })}
        </div>
     );
}
 
export default Cart;