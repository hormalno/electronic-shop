import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Store from "../../components/store/Store";

function Cameras(props) {
    return (
        <>
            <Breadcrumb title="cameras" path="all categories/cameras"/>
            <Store products={props.products} />
        </>
    )
}

export default Cameras;