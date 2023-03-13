import ProductsSlider from '../../components/productsSlider/ProductsSlider';
import ShopNow from './shopNow/ShopNow';
import HotDeals from './hotDeals/HotDeals';
import Widget from './widget/Widget';

function Home(props) {
    return (
        <>
            <ShopNow />
            <ProductsSlider title="NEW PRODUCTS" products={props.newProducts} />
            <HotDeals />
            <ProductsSlider title="TOP SELLING" products={props.topSellingProducts} />
            <Widget mockData = {[1,2,3,4,5,6]} />
        </>
    )
}

export default Home;