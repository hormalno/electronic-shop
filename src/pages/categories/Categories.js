import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import StoreContext from "../../contexts/StoreContext";
import Store from "../../components/store/Store";

function Categories(props) {

    return (
        <StoreContext.Provider value={props.category}>
            <Breadcrumb />
            <Store />
        </StoreContext.Provider>
    )
}

export default Categories;