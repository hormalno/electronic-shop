import { useContext, useEffect } from "react";
import CartContext from "../../contexts/cart/CartContext";
import ProductListItem from "../../components/productListItem/ProductListItem";
import './Cart.css';

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="container">
            <h1>MY CART</h1>
            <table className="table table-hover cartItems">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name:</th>
                        <th>Price:</th>
                        <th>Quantity:</th>
                        <th>Total:</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems && cartItems.map(item => {   
                        return <ProductListItem key={item.id} itemType="cart" product={item} />
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default Cart;