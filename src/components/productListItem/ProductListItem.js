import { useContext } from 'react';
import './ProductListItem.scss'
import CartContext from '../../contexts/cart/CartContext';
import { Link } from 'react-router-dom';

const ProductListItem = ({itemType,product}) => {

    const {removeFromCart,increase,decrease} = useContext(CartContext);


    return (
        <tr className='product-item'>
            <td><img src={'/'+product.mainImg} alt={product.name} /></td>
            <td><h3><Link to={"/categories/"+product.category+"/"+product.id}>{product.name}</Link></h3>{product.category}</td>
            <td>$ {product.price}</td>
            <td>
                <button className={product.quantity > 0 ? 'btn-quantity' : 'btn-quantity limit'} onClick={product.quantity > 1 ? ()=>decrease(product) : ""}>-</button>
                <span className='quantity_number'>{product.quantity}</span>
                <button className={product.quantity < 20 ? 'btn-quantity' : 'btn-quantity limit'} onClick={product.quantity < 20 ? ()=>increase(product) : ""}>+</button>
            </td>
            <td>$ {product.price * product.quantity}</td>
            <td><button className='btn-close' onClick={()=>removeFromCart(product)}><span class="icon-cross"></span></button></td>
        </tr>
    )
};

export default ProductListItem;