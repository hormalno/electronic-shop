import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Layout from "./layout/Layout";
import Categories from "./pages/categories/Categories";
import Home from './pages/home/Home';
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      {/* <Route path="hotdeals" element={<Main title="HOT DEALS" />} />*/}
      <Route path="categories" element={<Categories category="categories" />} />
      <Route path="categories/laptops" element={<Categories category="laptops" />} />
      <Route path="categories/smartphones" element={<Categories category="smartphones" />} />
      <Route path="categories/cameras" element={<Categories category="cameras" />} />
      <Route path="categories/accessories" element={<Categories category="accessories" />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
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