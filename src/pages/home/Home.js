import ProductsSlider from '../../components/productsSlider/ProductsSlider';
import ShopNow from './shopNow/ShopNow';
import HotDeals from './hotDeals/HotDeals';
import Widget from '../../components/widget/Widget';

function Home() {
    return (
        <>
            <ShopNow />
            <ProductsSlider title="new products" mainFilter="new" withNavigation={true} />
            <HotDeals />
            <ProductsSlider title="products on sale" mainFilter="sale" withNavigation={true}/>
            <Widget mockData = {[1,2,3,4,5,6]} />
        </>
    )
}

export default Home;