import React from "react";
import { BiBookContent } from "react-icons/bi";
import { BsPersonFillLock } from "react-icons/bs";
import { FaChartLine, FaHeadset, FaUsers } from "react-icons/fa6";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapseSidebar }) => {
  const sidebarMenu = [
    { icon: <RiDashboard3Line />, name: "Dashboard", link: "/" },
    {
      icon: <FaUsers />,
      name: "User Management",
      link: "/user_management",
    },
    {
      icon: <BiBookContent />,
      name: "Content Management",
      link: "/content_management",
    },
    {
      icon: <IoNotifications />,
      name: "Notifications",
      link: "/notifications",
    },
    {
      icon: <FaHeadset />,
      name: "Support Center",
      link: "/support_center",
    },
    { icon: <RiDashboard3Line />, name: "Analytics", link: "/analytics" },
    {
      icon: <IoMdSettings />,
      name: "System Settings",
      link: "/system_settings",
    },
    {
      icon: <BsPersonFillLock />,
      name: "Roles & Permissions",
      link: "/roles_permissions",
    },
    { icon: <MdFeedback />, name: "Feedback", link: "/feedback" },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out h-screen bg-indigo-700 ${
        collapseSidebar ? "w-20" : "w-64"
      }`}
    >
      <div className="text-white font-bold text-xl bg-indigo-800 h-16 flex items-center justify-center">
        {collapseSidebar ? "LN" : "Learnify Naija"}
      </div>
      <div className="flex items-center gap-4 px-4 bg-indigo-700 h-16 border-b-1 border-indigo-600">
        {collapseSidebar ? (
          <div className="flex items-center justify-center h-10 w-10 text-white text-xl bg-indigo-500 rounded-full font-bold">
            GM
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center h-10 w-10 text-white text-xl bg-indigo-500 rounded-full font-bold">
              GM
            </div>
            <div className="text-white">
              <h3 className="font-medium">Ganiyu Mubarak</h3>
              <p className="opacity-70 text-xs">Admin</p>
            </div>
          </>
        )}
      </div>

      <nav className="bg-indigo-700 px-2 py-4">
        <ul className="flex flex-col gap-1">
          {sidebarMenu.map((menu, i) => (
            <li key={i}>
              <NavLink
                to={menu.link}
                className={({ isActive }) =>
                  `text-white text-[16px] font-bold flex items-center gap-1.5 py-2.5 px-2 rounded-lg hover:bg-indigo-600 ${
                    isActive ? "bg-indigo-600" : ""
                  }`
                }
              >
                {collapseSidebar ? (
                  <span className={collapseSidebar ? 'text-2xl' : ''}>{menu.icon}</span>
                ) : (
                  <>
                    <span>{menu.icon}</span>
                    {menu.name}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
