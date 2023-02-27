import Products from "../utilities/products/Products";
import HotDeals from "./hotDeals/HotDeals";
import ShopNow from "./shopNow/ShopNow";
import Widget from "./widget/Widget";

function Home(props) {
    return (
        <>
            <ShopNow/>
            <Products title="NEW PRODUCTS" />
            <HotDeals />
            <Products title="TOP SELLING" />
            <Widget />
        </>
    )
}

export default Home;