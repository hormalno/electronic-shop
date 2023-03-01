import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Newsletter from "./newsletter/Newsletter";

function Layout() {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Layout;