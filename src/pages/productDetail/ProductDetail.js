import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import ProductView from "../../components/productView/ProductView";

function ProductDetail() {
    return (
        <>
            <Breadcrumb />
            <ProductView />
            <ProductsSlider title="on sale products" mainFilter="sale" />
        </>
    )
};

export default ProductDetail;