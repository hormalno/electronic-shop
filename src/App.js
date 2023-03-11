import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Layout from "./layout/Layout";
import Accessories from "./pages/accessories/Accessories";
import Cameras from "./pages/cameras/Cameras";
import Categories from "./pages/categories/Categories";
import Home from './pages/home/Home';
import Laptops from "./pages/laptops/Laptops";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Smartphones from "./pages/smartphones/Smartphones";
import {getProduct} from './services/ProductService'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="hotdeals" element={<Main title="HOT DEALS" />} />*/}
      <Route path="categories" element={<Categories />} />
      <Route path="laptops" element={<Laptops />} />
      <Route path="smartphones" element={<Smartphones />} />
      <Route path="cameras" element={<Cameras />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="categories/1" element={<ProductDetail  product={getProduct()} />} />
      <Route path="*" element={<PageNotFound />} /> 
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;