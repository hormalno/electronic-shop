import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from './pages/home/Home';
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Logout from "./pages/users/Logout";
import Checkout from "./pages/checkout/Checkout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import AuthContextProvider from "./contexts/AuthContextProvider"
import CartState from "./contexts/cart/CartState";
import './App.css';


// import { createProducts } from "./services/ProductService";

// const CreateProducts = () => {
//   createProducts();
//   return (
//     <h3>Products created!</h3>
//   )
// }
// to do refactoring the contexts
// to do cart
// to do wishlist
// to do MyRadioInput

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories category="all" />} />
      <Route path="categories/laptops" element={<Categories category="laptop" />} />
      <Route path="categories/smartphones" element={<Categories category="smartphone" />} />
      <Route path="categories/cameras" element={<Categories category="camera" />} />
      <Route path="categories/accessories" element={<Categories category="accessory" />} />
      <Route path="categories/:productId" element={<ProductDetail />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="checkout" element={<Checkout />} />
      {/* <Route path="createProducts" element={<CreateProducts />} /> */}
      <Route path="*" element={<PageNotFound />} /> 
    </Route>
  )
);

function App() {

  return (
    <CartState>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </CartState>
  );
}

export default App;