import React, { useRef } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaBell, FaCog, FaKey, FaSignOutAlt, FaUser } from "react-icons/fa";
import useClickHandler from "../hooks/useClick";

const AccountSettingsDropDown = ({ onClose }) => {
  const modalRef = useRef(null);

  useClickHandler(modalRef, onClose);
  return (
    <ul className="py-1 absolute right-0 top-10 mt-2 min-w-48 rounded-md bg-white shadow-lg ring-1 ring-gray-200 z-50" ref={modalRef}>
      <li className="flex items-center gap-1.5 cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span>
          <FaUser />
        </span>
        View Profile
      </li>
      <li className="flex items-center gap-1.5 cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span>
          <FaCog />
        </span>
        Account Settings
      </li>
      <li className="flex items-center gap-1.5 cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span>
          <FaKey />
        </span>
        Change Password
      </li>
      <li className="flex items-center gap-1.5 cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span>
          <FaBell />
        </span>
        Notification Preferences
      </li>
      <li className="flex items-center gap-1.5 cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span>
          <AiFillQuestionCircle />
        </span>
        Help & Support
      </li>
      <li className="flex items-center gap-1.5 cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span>
          <FaSignOutAlt />
        </span>
        Logout
      </li>
    </ul>
  );
};

export default AccountSettingsDropDown;
