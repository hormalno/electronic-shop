import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Store from "../../components/store/Store";

function Categories(props) {
    return (
        <>
            <Breadcrumb title="categories" path="all categories"/>
            <Store category="all" />
        </>
    )
}

export default Categories;