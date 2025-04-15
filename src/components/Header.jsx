import React, { useState } from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { IoMenu, IoNotifications, IoSearch } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import AccountSettingsDropDown from "./AccountSettingsDropDown";

const Header = ({ collapseSidebar, handleCollapseSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between h-16 px-8 bg-white shadow-sm">
      <div className="flex items-center gap-4" onClick={handleCollapseSidebar}>
        <Button>{collapseSidebar ? <IoMenu /> : <FaTimes />}</Button>
        <div className="relative bg-gray-100">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 py-2 pr-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span className="absolute left-3 top-3 text-gray-500">
            <IoSearch />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Button className="text-2xl">
          <IoNotifications />
        </Button>
        <Button className="text-2xl">
          <AiFillMessage />
        </Button>
        <div
          className="relative z-40 cursor-pointer"
          onClick={handleOpenDropdown}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-10 w-10 text-white text-xl bg-indigo-500 rounded-full font-bold">
              GM
            </div>
            <p>Admin</p>
            <span className="text-xl" onClick={handleOpenDropdown}>
              {isOpen ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          {isOpen && (
            <AccountSettingsDropDown onClose={() => setIsOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
