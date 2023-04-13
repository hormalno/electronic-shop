import { Link } from 'react-router-dom';
import ProductWidget from './productWidget/ProductWidget';
import { useState } from 'react';
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../../../../contexts/CartContextProvider';

const Cart = () => {

    const {cartItems,removeItem} = useContext(CartContext);
    const [dropdownClass, setDropdownClass] = useState('dropdown')

    // 'className="dropdown-toggle"'
    const cartToggler = () => {setDropdownClass(dropdownClass === 'dropdown' ? "dropdown open" : "dropdown")};

    console.log(cartItems)

    return (
        <div className={dropdownClass}>
            <Link onClick={cartToggler}>
                <i className="fa fa-shopping-cart"></i>
                <span>Your Cart</span>
                <div className="qty">3</div>
            </Link>
            <div className='cart-dropdown'>
                <div className='cart-list'>
                    <ProductWidget />
                    <ProductWidget />
                </div>
                <div className='cart-summary'>
                    <small>3 Item(s) selected</small>
                    <h5>SUBTOTAL: $2940.00</h5>
                </div>
                <div className='cart-btns' onClick={cartToggler}>
                    <Link to="/cart">View Cart</Link>
                    <Link to="/checkout">Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;