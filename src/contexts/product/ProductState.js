import ProductContext from "./ProductContext";
import useProduct from "../../hooks/useProduct";

const ProductState = ({productId,children}) => {

    const product = useProduct(productId);

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
      );
}
 
export default ProductState;