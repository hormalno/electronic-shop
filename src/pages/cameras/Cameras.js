import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Store from "../../components/store/Store";

function Cameras(props) {
    return (
        <>
            <Breadcrumb title="cameras" path="all categories/cameras"/>
            <Store category="cameras" />
        </>
    )
}

export default Cameras;