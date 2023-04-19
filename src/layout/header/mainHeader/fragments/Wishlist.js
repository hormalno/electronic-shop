import { useContext } from "react";
import { Link } from "react-router-dom";
import WishlistContext from "../../../../contexts/wishlist/WishlistContext";

function Wishlist() {

    const {itemCount} = useContext(WishlistContext);

    return (
        <div>
            <Link to={itemCount > 0 ? "/wishlist" : "#"}>
                <i className="fa fa-heart-o"></i>
                <span>Your Wishlist</span>
                {itemCount > 0 ? (<div className="qty">{itemCount}</div>) : ''}
            </Link>
        </div>
    )
}

export default Wishlist;