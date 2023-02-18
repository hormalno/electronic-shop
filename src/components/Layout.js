import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";

function Layout() {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;