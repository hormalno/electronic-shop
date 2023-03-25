import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Store from "../../components/store/Store";

function Smartphones(props) {
    return (
        <>
            <Breadcrumb title="smartphones" path="all categories/smartphones"/>
            <Store category="smartphones" />
        </>
    )
}

export default Smartphones;