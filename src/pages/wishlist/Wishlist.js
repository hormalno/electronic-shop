import { useContext, useEffect } from "react";
import WishlistContext from "../../contexts/wishlist/WishlistContext";
import ProductShortView from "../../components/productShortView/ProductShortView";

const Wishlist = () => {

    const {wishlistItems} = useContext(WishlistContext);
    
    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div className="section">
            <div className="container">
                <h1>MY WISHLIST</h1>
                <div className="row">                    
                        {wishlistItems.map(item => {
                            return (<div className="col-md-4 col-xs-6">
                                        <ProductShortView productId={item.id} />
                                    </div>)
                        })}
                </div>
            </div>
        </div>
     );
}

 
export default Wishlist;