import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./layout/Layout";
import Categories from "./pages/categories/Categories";
import Home from './pages/home/Home';
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Logout from "./pages/users/Logout";
import AuthContext from "./contexts/AuthContext"
import useAuth from "./hooks/useAuth";
import './App.css';
// import { createProducts } from "./services/ProductService";

// const CreateProducts = () => {
//   createProducts();
//   return (
//     <h3>Products created!</h3>
//   )
// }

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
      {/* <Route path="createProducts" element={<CreateProducts />} /> */}
      <Route path="*" element={<PageNotFound />} /> 
    </Route>
  )
);


function App() {

  const authInfo = useAuth();

  return (
    <AuthContext.Provider value={authInfo}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;