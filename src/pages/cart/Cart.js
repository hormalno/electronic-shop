import { useContext, useEffect } from "react";
import CartContext from "../../contexts/cart/CartContext";
import ProductListItem from "../../components/productListItem/ProductListItem";

const Cart = () => {

    const {cartItems,removeFromCart,increase,decrease,handleCheckout,clearCart} = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="container">
            <h1>CART ITEMS</h1>
            {cartItems && cartItems.map(item => {
                return <ProductListItem key={item.id} viewType="cart" product={item} />
            })}
        </div>
     );
}
 
export default Cart;