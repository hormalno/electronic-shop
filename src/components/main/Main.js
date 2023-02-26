import ShopNow from "./shopNow/ShopNow";
import Products from "./products/Products";
import HotDeals from "./hotDeals/HotDeals";
import Widget from "./widget/Widget";

function Main(props) {
    return (
        <>
            <ShopNow />
            <Products title="NEW PRODUCTS" />
            <HotDeals />
            <Products title="TOP SELLING" />
            <Widget />
        </>
    )
}

export default Main;