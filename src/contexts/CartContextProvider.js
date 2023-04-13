import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState();

    const addItem = (product) => {
        // setCartItems((prev) => ({..prev,product}))
    };

    const removeItem = (product) => {
        // setCartItems(cartItems.filter(cartItem => cartItem.id !== product.id))
    };

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addItem,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;