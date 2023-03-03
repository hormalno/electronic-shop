import Products from '../../components/products/Products';
import ShopNow from './shopNow/ShopNow';
import HotDeals from './hotDeals/HotDeals';
import Widget from './widget/Widget';

function Home(props) {
    return (
        <>
            <ShopNow />
            <Products title="NEW PRODUCTS" mockData = {[1,2,3,4,5,6]} />
            <HotDeals />
            <Products title="TOP SELLING" mockData = {[1,2,3,4,5,6]} />
            <Widget mockData = {[1,2,3,4,5,6]} />
        </>
    )
}

export default Home;