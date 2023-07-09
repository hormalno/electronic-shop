import { useEffect } from "react";
import StoreContext from "../../contexts/store/StoreContext";
import Store from "../../components/store/Store";

function Categories({category}) {
    
    let storeType = category === "all" ? "" : category;

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })

    return (
        <StoreContext.Provider value={storeType}>
            <Store />
        </StoreContext.Provider>
    )
}

export default Categories;