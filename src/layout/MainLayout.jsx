import React from "react";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import FooterBar from "../pages/footerSideBar/FooterBar";
import style from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className="main_layout">
      <SideBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}

export default MainLayout;
