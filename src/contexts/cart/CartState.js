import { useState } from "react";
import CartContext from "./CartContext";


const CartState = ({ children }) => {

  const storage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

  const setStorage = (cartItems) => {
    localStorage.setItem("cartItems",JSON.stringify(cartItems.length > 0 ? cartItems : []));
  };

  const sumItems = (cartItems) => {
      
    setStorage(cartItems);

    let itemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    let total = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0);

    return { itemCount, total };
  };

  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  const [state, setState] = useState(initialState);

  const addToCart = (id, price) => {   
    setState(state => {      
      state.cartItems.push({id:id, quantity: 1, price: price})
      return {
        ...state,
        ...sumItems(state.cartItems)
      }
    });
  };

  const increase = (id) => {
    
    setState(state => {
      const cartItems = state.cartItems.map(item => {
        if (item.id === id) {
          return {...item,quantity: item.quantity + 1}
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: cartItems,
        ...sumItems(cartItems)
      }
    });
  }
  
  const decrease = (id) => {
    setState(state => {
      const cartItems = state.cartItems.map(item => {
        if (item.id === id) {
          return {...item,quantity: item.quantity - 1}
        } else {
          return item;
        }
      });

      return {
        ...state,
        cartItems: cartItems,
        ...sumItems(cartItems)
      }
    });
  }

  const removeFromCart = (id) => {
    setState(state => {    
      const cartItems = state.cartItems.filter(item => item.id !== id);
      return {
        ...state,
        cartItems: cartItems,
        ...sumItems(cartItems)
      }
    });
  };

  const clearCart = () => {
    setState(state => {
        return {
        ...state,
          cartItems: [],
          ...sumItems([])
        }
    })
  }
  // const handleCheckout = () => {dispatch({ type: "CHECKOUT" })}

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        // handleCheckout,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;