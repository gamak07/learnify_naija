import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const handleCollapseSidebar = () => {
    setCollapseSidebar((prev) => !prev);
  };
  return (
    <div className="flex w-full">
      <Sidebar collapseSidebar={collapseSidebar} />
      <div className="flex-1">
        <Header
          collapseSidebar={collapseSidebar}
          handleCollapseSidebar={handleCollapseSidebar}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
