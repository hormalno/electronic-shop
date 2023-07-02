import { useContext } from 'react';
import './ProductListItem.scss'
import CartContext from '../../contexts/cart/CartContext';

const ProductListItem = ({itemType,product}) => {

    const {removeFromCart,increase,decrease} = useContext(CartContext);


    return (
        <tr className='productItem'>
            <td><img src={'/'+product.mainImg} alt={product.name} /></td>
            <td><h3>{product.name}</h3>{product.category}</td>
            <td>$ {product.price}</td>
            <td>
                <button className='btn-plus' onClick={product.quantity > 1 ? ()=>decrease(product) : ""}>-</button>
                {product.quantity} 
                <button className='btn-plus' onClick={()=>increase(product)}>+</button>
            </td>
            <td>$ {product.price * product.quantity}</td>
            <td><button className='btn-close' onClick={()=>removeFromCart(product)}><span class="icon-cross"></span></button></td>
        </tr>
    )
};

export default ProductListItem;