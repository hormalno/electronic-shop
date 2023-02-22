import ShopNow from "./shopNow/ShopNow";
import NewProducts from "./newProducts/NewProducts";
import HotDeals from "./hotDeals/HotDeals";
import TopSelling from "./topSelling/TopSelling";
import TopSellingWidget from "./topSellingWidget/TopSellingWidget";

function Main(props) {
    return (
        <>
            <ShopNow />
            <NewProducts />
            <HotDeals />
            <TopSelling />
            <TopSellingWidget />
        </>
    )
}

export default Main;