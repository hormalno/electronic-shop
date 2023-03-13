import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Store from "../../components/store/Store";

function Laptops(props) {
    return (
        <>
            <Breadcrumb title="laptops" path="all categories/laptops"/>
            <Store products={props.products} />
        </>
    )
}

export default Laptops;