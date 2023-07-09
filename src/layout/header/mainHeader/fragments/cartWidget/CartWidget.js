import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../../../contexts/cart/CartContext';
import CurrencyContext from '../../../../../contexts/currency/CurrencyContext';
import ProductWidget from '../../../../../components/productWidget/ProductWidget';
import { priceView } from '../../../../../utils/currency';
import './CartWidget.css';

const CartWidget = () => {

    const {cartItems, itemCount, total} = useContext(CartContext)
    const {currency} = useContext(CurrencyContext);
    const [dropdownClass, setDropdownClass] = useState('dropdown');
    const cartToggle = () => {setDropdownClass(dropdownClass === 'dropdown' ? "dropdown open" : "dropdown")};

    return (
        <div className={dropdownClass}>
            <Link onClick={cartToggle}>
                <i className="fa fa-shopping-cart"></i>
                <span>Your Cart</span>
                {cartItems.length > 0 && (<div className="qty">{cartItems.length}</div>)}
            </Link>
            <div className='cart-dropdown'>
                <div className='cart-list'>
                    {cartItems && cartItems.map((item) => {
                        return <ProductWidget key={item.id} item={item} />
                    })}
                </div>
                <div className='cart-summary'>
                    <small>{itemCount > 0 ? itemCount : '0'} Item(s) selected</small>
                    <h5>SUBTOTAL: {total > 0 ? priceView(total,currency) : priceView('0',currency)}</h5>
                </div>
                <div className='cart-btns' onClick={cartToggle}>
                    <Link to={itemCount > 0 ? '/cart' : '#'}>View Cart</Link>
                    <Link to={total > 0 ? '/checkout' : '#'}>Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default CartWidget;