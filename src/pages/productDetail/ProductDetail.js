import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import ProductView from "../../components/productView/ProductView";

function ProductDetail(props) {
    return (
        <>
            <Breadcrumb title="category 1" path="home/blank" />
            <ProductView product={props.product} />
            <ProductsSlider title="RELATED PRODUCTS" products={props.relatedProducts} />
        </>
    )
};

export default ProductDetail;