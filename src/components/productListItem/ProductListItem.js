import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/cart/CartContext';
import CurrencyContext from '../../contexts/currency/CurrencyContext';
import useProduct from "../../hooks/useProduct";
import { priceView } from '../../utils/currency';
import './ProductListItem.scss';

const ProductListItem = ({item}) => {

    const {removeFromCart,increase,decrease} = useContext(CartContext);
    const {currency} = useContext(CurrencyContext);
    const product = useProduct(item.id);

    const handleDecrease = () => {
        item.quantity <= 1 ? removeFromCart(item.id) : decrease(item.id);
    };

    const handleIncrease = () => {
        if (item.quantity < 20) {
            increase(item.id)
        };
    };

    return (
        <tr className='product-item'>
            <td><img src={'/'+product.mainImg} alt={product.name} /></td>
            <td><h3><Link to={"/categories/"+product.category+"/"+product.id}>{product.name}</Link></h3>{product.category}</td>
            <td>{priceView(item.price,currency)}</td>
            <td>
                <button className={item.quantity >= 1 ? 'btn-quantity' : 'btn-quantity limit'} onClick={handleDecrease}>-</button>
                <span className='quantity_number'>{item.quantity}</span>
                <button className={item.quantity < 20 ? 'btn-quantity' : 'btn-quantity limit'} onClick={handleIncrease}>+</button>
            </td>
            <td>{priceView(item.price * item.quantity,currency)}</td>
            <td><button className='btn-close' onClick={()=>removeFromCart(item.id)}><span className="icon-cross"></span></button></td>
        </tr>
    )
};

export default ProductListItem;