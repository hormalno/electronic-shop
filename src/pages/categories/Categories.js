import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import StoreContext from "../../contexts/StoreContext";
import Store from "../../components/store/Store";

function Categories({category}) {
    
    let storeType = category === "all" ? "" : category;

    return (
        <StoreContext.Provider value={storeType}>
            <Breadcrumb />
            <Store />
        </StoreContext.Provider>
    )
}

export default Categories;