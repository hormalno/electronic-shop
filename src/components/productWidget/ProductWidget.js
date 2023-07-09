import { useContext} from "react";
import CartContext from "../../contexts/cart/CartContext";
import CurrencyContext from "../../contexts/currency/CurrencyContext";
import useProduct from "../../hooks/useProduct";
import { priceView } from "../../utils/currency";
import "./ProductWidget.css"

const ProductWidget = ({item}) => {

    const { removeFromCart } = useContext(CartContext);
    const {currency} = useContext(CurrencyContext);
    const product = useProduct(item.id);

    return (
        <div className="product-widget">
            <div className="product-img">
                <img src={'/'+product.mainImg} alt={product.name} />
            </div>
            <div className="product-body">
                <h3 className="product-name"><a href={'/categories/'+product.category+'/'+product.id}>{product.name}</a></h3>
                <h4 className="product-price"><span className="qty">{item.quantity} x</span>{priceView(item.price,currency)}</h4>
            </div>
            <button className="delete" onClick={() => removeFromCart(product.id)}><i className="fa fa-close"></i></button>
        </div>
    );
}
 
export default ProductWidget;