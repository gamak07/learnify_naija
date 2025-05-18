import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Intro = () => {
  return (
    <div>
      <div className="flex items-center mb-6 text-sm">
        <span className="text-gray-500 hover:text-indigo-600">Dashboard</span>
        <FaChevronRight className="mx-2 text-xs text-gray-400" />
        <span className="text-gray-500">Roles & Permission</span>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Roles & Permissions</h1>
        <p className="text-sm opacity-70">
          Manage user roles and their associated permissions across the
          platform.
        </p>
      </div>
    </div>
  );
};

export default Intro;
