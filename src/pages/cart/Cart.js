import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/cart/CartContext";
import ProductListItem from "../../components/productListItem/ProductListItem";
import './Cart.css';


const Cart = () => {

    const {cartItems,total,itemCount} = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h1>MY CART</h1>
                        <table className="table table-hover cart_items">
                            <thead>
                                <tr>
                                    <th className="w-150"></th>
                                    <th className="w-200">Name:</th>
                                    <th className="w-100">Price:</th>
                                    <th className="w-100">Quantity:</th>
                                    <th className="w-150">Total:</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems && cartItems.map(item => {   
                                    return <ProductListItem key={item.id} product={item} />
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <div className="section-title text-center">
                            <h1 className="title">Summary</h1>
                        </div>
                        <div className="order-summary">
                            <div className="order-col">
                                <div><strong>PRODUCTS</strong></div>
                                <div>{itemCount} item(s) selected</div>
                            </div>
                            <div className="order-col">
                                <div><strong>TOTAL</strong></div>
                                <div><strong className="order-total">$ {total}</strong></div>
                            </div>
                        </div>
                        <Link to={itemCount > 0 ? '/checkout' : ''} className="primary-btn">Proceed to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;