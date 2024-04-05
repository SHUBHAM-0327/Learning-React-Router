import React from "react";
import Header from "./Components/Headers/Header";
import Footer from "./Components/Footers/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />

        </>
    )
}

export default Layout;