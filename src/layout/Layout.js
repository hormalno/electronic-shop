import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Newsletter from "./newsletter/Newsletter";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

function Layout() {

    const {pathname} = useLocation();
    
    return (
        <>
            <Header />
            <Navigation />
            {pathname === "/" ? "" : <Breadcrumb />}
            <Outlet />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Layout;