import Products from '../../components/products/Products';
import ShopNow from './shopNow/ShopNow';
import HotDeals from './hotDeals/HotDeals';
import Widget from './widget/Widget';

function Home(props) {
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

export default Home;