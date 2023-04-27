import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from './pages/home/Home';
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Logout from "./pages/users/Logout";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/cart/Cart";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import AuthState from "./contexts/auth/AuthState"
import CartState from "./contexts/cart/CartState";
import WishlistState from "./contexts/wishlist/WishlistState";
import './App.css';

import ProductService from "./services/ProductService";


// to do wishlist and cart pages
// to do error boundary
// to do store add filtering
// to do optional widget 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories category="all" />} />
      <Route path="categories/laptops" element={<Categories category="laptops" />} />
      <Route path="categories/smartphones" element={<Categories category="smartphones" />} />
      <Route path="categories/cameras" element={<Categories category="cameras" />} />
      <Route path="categories/accessories" element={<Categories category="accessories" />} />
      <Route path="categories/:category/:productId" element={<ProductDetail />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="cart" element={<Cart />} />
      <Route path="createProducts" element={<ProductService />} />
      <Route path="*" element={<PageNotFound />} /> 
    </Route>
  )
);

function App() {
  return (
    <AuthState>
      <CartState>
        <WishlistState>
          <RouterProvider router={router} />
        </WishlistState>
      </CartState>
    </AuthState>
  );
}

export default App;