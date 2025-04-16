import React, { useState } from "react";
import Button from "../../components/Button";
import { FaChevronDown, FaPlus, FaSearch } from "react-icons/fa";
import BulkActionsDropdown from "./BulkActionsDropdown";

const Actions = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <div className="bg-white mx-6 mb-8 p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white px-4 py-2 rounded-md">
          <span>
            <FaPlus />
          </span>{" "}
          Add new user
        </Button>
        <div className="relative" onClick={handleShowDropdown}>
          <Button className="flex items-center px-4 py-2 rounded-md gap-1 border-1 cursor-pointer border-gray-200 text-gray-700">
            Bulk Actions{" "}
            <span>
              <FaChevronDown />
            </span>
          </Button>
          {showDropdown && (
            <BulkActionsDropdown onClose={() => setShowDropdown(false)} />
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <select
          name=""
          id=""
          className="bg-white rounded-lg border-gray-300 border text-gray-700 py-2 px-4  focus:outline-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Type</option>
          <option value="">Student</option>
          <option value="">Parent</option>
          <option value="">Teacher</option>
        </select>
        <select
          name=""
          id=""
          className="bg-white rounded-lg border-gray-300 border text-gray-700 py-2 px-4  focus:outline-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Status</option>
          <option value="">Active</option>
          <option value="">Inactive</option>
        </select>
        <select
          name=""
          id=""
          className="bg-white rounded-lg border-gray-300 border text-gray-700 py-2 px-4  focus:outline-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Time</option>
          <option value="">Last 30 Days</option>
          <option value="">This Month</option>
          <option value="">Last Month</option>
        </select>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users ..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-0 focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute text-gray-400 left-3 top-2.5">
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Actions;
