import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Navigation = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
};

export default Navigation;
