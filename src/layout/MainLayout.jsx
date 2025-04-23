import React from "react";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import FooterBar from "../pages/footerSideBar/FooterBar";

function MainLayout() {
  return (
    <div className="main-layout">
      <SideBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}

export default MainLayout;
