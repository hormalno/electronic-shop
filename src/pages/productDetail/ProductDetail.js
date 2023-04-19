import { useParams } from "react-router-dom";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import ProductView from "../../components/productView/ProductView";
import ProductState from "../../contexts/product/ProductState";
import { useEffect } from "react";

function ProductDetail() {

    const {productId,category} = useParams();
    
    useEffect(() => {        
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })

    return (
        <ProductState productId={productId}>
            <ProductView />
            <ProductsSlider title="related products" mainCategory={category} withNavigation={false} />
        </ProductState>
    )
};

export default ProductDetail;