import { Link } from "react-router-dom";

function Wishlist() {
    return (
        <div>
            <Link to="#">
                <i className="fa fa-heart-o"></i>
                <span>Your Wishlist</span>
                <div className="qty">2</div>
            </Link>
        </div>
    )
}

export default Wishlist;