import { useEffect,useState } from "react";
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
import {getProduct,getAllProducts} from './services/ProductService'
import {firestore} from './utils/firebase';
import { collection, getDocs } from "firebase/firestore"; 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home newProducts={getAllProducts()} topSellingProducts={getAllProducts()} />} />
      {/* <Route path="hotdeals" element={<Main title="HOT DEALS" />} />*/}
      <Route path="categories" element={<Categories products={getAllProducts()} />} />
      <Route path="laptops" element={<Laptops products={getAllProducts()} />} />
      <Route path="smartphones" element={<Smartphones products={getAllProducts()} />} />
      <Route path="cameras" element={<Cameras products={getAllProducts()} />} />
      <Route path="accessories" element={<Accessories products={getAllProducts()} />} />
      <Route path="categories/1" element={<ProductDetail  product={getProduct()} relatedProducts={getAllProducts()} />} />
      <Route path="*" element={<PageNotFound />} /> 
    </Route>
  )
);

function App() {

  useEffect ( () => {
    const querySnapshot = getDocs(collection(firestore, "products"))
    .then(res => res.forEach((doc) => {
      console.log(doc.id,doc.data());
    }));
  },[])
  
  

  return (
    <RouterProvider router={router} />
  );
}

export default App;