import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/main/home/Home';
import './App.css';
import PageNotFound from "./components/main/pagenotfound/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="hotdeals" element={<Main title="HOT DEALS" />} />
      <Route path="categories" element={<Main title="CATEGORIES" />} />
      <Route path="laptops" element={<Main title="LAPTOPS" />} />
      <Route path="smartphones" element={<Main title="SMARTPHONES" />} />
      <Route path="cameras" element={<Main title="CAMERAS" />} />
      <Route path="accessories" element={<Main title="ACCESSORIES" />} />*/}
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