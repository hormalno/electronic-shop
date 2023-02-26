import ShopNow from "./shopNow/ShopNow";
import Products from "./products/Products";
import HotDeals from "./hotDeals/HotDeals";
import TopSelling from "./topSelling/TopSelling";
import TopSellingWidget from "./topSellingWidget/TopSellingWidget";

function Main(props) {
    return (
        <>
            <ShopNow />
            <Products />
            <HotDeals />
            <TopSelling />
            <TopSellingWidget />
        </>
    )
}

export default Main;