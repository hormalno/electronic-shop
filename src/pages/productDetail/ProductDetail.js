import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import ProductView from "../../components/productView/ProductView";

function ProductDetail() {
    return (
        <>
            <Breadcrumb title="category 1" path="home/blank" />
            <ProductView />
            <ProductsSlider title="RELATED PRODUCTS" mockData = {[1,2,3,4,5,6]} />
        </>
    )
};

export default ProductDetail;