import { useState } from "react";
import WishlistContext from "./WishlistContext";


const WishlistState = ({children}) => {

    const storage = localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [];

    const setStorage = (wishlistItems) => {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems.length > 0 ? wishlistItems : []));
    };

    const sumItems = (wishlistItems) => {
      setStorage(wishlistItems);      
      return wishlistItems.length;
    };

    const initialState = {
      wishlistItems: storage,
      itemCount: sumItems(storage)
    };
    
    const [state, setState] = useState(initialState);

    const addToWishlist = (id) => {
      setState(state => {
        state.wishlistItems.push({id:id})
        return {
          ...state,
          itemCount: sumItems(state.wishlistItems)
        }
      })        
    }

    const removeFromWishlist = (id) => {
      setState(state => {
        const wishlistItems = state.wishlistItems.filter(item=> item.id !== id);
        return {
          wishlistItems: wishlistItems,
          itemCount:sumItems(wishlistItems)
        }
      })
    }

    const clearWishlist = () => {
      setState({
        wishlistItems: [],
        itemCount: sumItems([])
      })
    }

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