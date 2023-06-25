import { useContext, useEffect } from "react";
import WishlistContext from "../../contexts/wishlist/WishlistContext";

const Wishlist = () => {

    const {wishlistItems,itemCount,removeFromWishlist,clearWishlist} = useContext(WishlistContext);
    
    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="container">
            <h1>WISHLIST ITEMS</h1>
            {wishlistItems.map(item => {
                return <p>{item.name}</p>
            })}
        </div>
     );
}
 
export default Wishlist;