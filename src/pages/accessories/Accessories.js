import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Store from "../../components/store/Store";

function Accessories(props) {
    return (
        <>
            <Breadcrumb title="accessories" path="all categories/accessories" />
            <Store products={props.products} />
        </>
    )
}

export default Accessories;