import React, { useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import FooterBar from "../pages/footerSideBar/FooterBar";
import style from "./MainLayout.module.scss";

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={`main_layout ${showSidebar ? "sidebar" : ""}`}>
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className={`main ${showSidebar ? "sidebar" : ""}`}>
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}

export default MainLayout;
