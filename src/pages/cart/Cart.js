import { useEffect } from "react";

const Cart = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left:0,behaviour:'smooth'})
    })
    
    return ( 
        <div>
            CART ITEMS
        </div>
     );
}
 
export default Cart;