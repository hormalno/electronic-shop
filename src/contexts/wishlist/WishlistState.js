import { useReducer } from "react";
import WishlistContext from "./WishlistContext";
import WishlistReducer, {sumItems} from "./WishlistReducer";

const storage = localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [];

const WishlistState = ({children}) => {

    const initialState = {
        wishlistItems: storage,
        itemCount: sumItems(storage)
      };
    
      const [state, dispatch] = useReducer(WishlistReducer, initialState);
      const addToWishlist = (payload) => {dispatch({ type: "ADD_TO_WISHLIST", payload })}
      const removeFromWishlist = (payload) => {dispatch({ type: "REMOVE_FROM_WISHLIST", payload })}
      const clearWishlist = () => {dispatch({ type: "CLEAR" })}

    return (
        <WishlistContext.Provider 
          value={{
            wishlistItems: state.wishlistItems,
            addToWishlist,
            removeFromWishlist,
            clearWishlist,
            ...state
          }}>
            {children}
        </WishlistContext.Provider>
    )
};

export default WishlistState;