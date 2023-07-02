import { useContext, useEffect } from "react";
import WishlistContext from "../../contexts/wishlist/WishlistContext";
import ProductListItem from "../../components/productListItem/ProductListItem";

const Wishlist = () => {

    const {wishlistItems,itemCount,removeFromWishlist,clearWishlist} = useContext(WishlistContext);
    
    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="container">
            <h1>WISHLIST ITEMS</h1>
            {wishlistItems.map(item => {
                return <ProductListItem key={item.id} viewType="wishlist" product={item} />
            })}
        </div>
     );
}
 
export default Wishlist;