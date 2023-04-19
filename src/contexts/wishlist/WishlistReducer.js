
// Export function to calculate the total price of the cart and the total quantity of the cart
const Storage = (wishlistItems) => {
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(wishlistItems.length > 0 ? wishlistItems : [])
    );
};

export const sumItems = (wishlistItems) => {
    Storage(wishlistItems);
    let itemCount = wishlistItems.reduce(
      (total) => total + 1,
      0
    );
    return itemCount;
};

const WishlistReducer = (state, action) => {
    switch (action.type) {
        // If the action type is ADD_TO_CART, we want to add the item to the wishlistItems array
        case 'ADD_TO_WISHLIST':
          if (!state.wishlistItems.find((item) => item.id === action.payload.id)) {
            state.wishlistItems.push({
              ...action.payload,
            });
          }
    
          return {
            ...state,
            itemCount: sumItems(state.wishlistItems),
            wishlistItems: [...state.wishlistItems],
          };
    
        // If the action type is REMOVE_ITEM, we want to remove the item from the wishlistItems array
        case 'REMOVE_FROM_WISHLIST':
          return {
            ...state,
            itemCount: sumItems(
              state.wishlistItems.filter((item) => item.id !== action.payload.id)
            ),
            wishlistItems: [
              ...state.wishlistItems.filter((item) => item.id !== action.payload.id),
            ],
          };
        //If the action type is CLEAR, we want to clear the wishlistItems array
        case 'CLEAR':
          return {
            wishlistItems: [],
            itemCount: sumItems([]),
          };
    
        //Return the state if the action type is not found
        default:
          return state;
      }
}
 
export default WishlistReducer;