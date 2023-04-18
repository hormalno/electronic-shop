import { useParams } from "react-router-dom";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import ProductView from "../../components/productView/ProductView";
import ProductState from "../../contexts/product/ProductState";

function ProductDetail() {

    const {productId,category} = useParams();

    return (
        <ProductState productId={productId}>
            <ProductView />
            <ProductsSlider title="related products" mainCategory={category} withNavigation={false} />
        </ProductState>
    )
};

export default ProductDetail;