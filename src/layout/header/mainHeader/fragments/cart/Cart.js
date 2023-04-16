import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../../../contexts/cart/CartContext';
import ProductWidget from './productWidget/ProductWidget';
import './Cart.css';

const Cart = () => {

    const {cartItems, itemCount, total} = useContext(CartContext)
    const [dropdownClass, setDropdownClass] = useState('dropdown');
    const cartToggle = () => {setDropdownClass(dropdownClass === 'dropdown' &&  cartItems.length > 0 ? "dropdown open" : "dropdown")};

    return (
        <div className={dropdownClass}>
            <Link onClick={cartToggle}>
                <i className="fa fa-shopping-cart"></i>
                <span>Your Cart</span>
                {cartItems.length > 0 && (<div className="qty">{cartItems.length}</div>)}
            </Link>
            <div className='cart-dropdown'>
                <div className='cart-list'>
                    {cartItems.length > 0 && cartItems.map((product) => {
                        return <ProductWidget key={product.id} product={product} />
                    })}
                </div>
                <div className='cart-summary'>
                    <small>{itemCount > 0 ? itemCount : '0'} Item(s) selected</small>
                    <h5>SUBTOTAL: ${total > 0 ? total : '0.00'}</h5>
                </div>
                <div className='cart-btns' onClick={cartToggle}>
                    <Link to="/cart">View Cart</Link>
                    <Link to="/checkout">Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;