import React, { useState } from "react";
import {
  FaChevronDown,
  FaDownload,
  FaFilter,
  FaSearch,
  FaSort,
} from "react-icons/fa";
import Button from "../../components/Button";
import Dropdowns from "./Dropdowns";

const FeedbackHeader = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);

  const handleToggleFilter = () => {
    setToggleFilter((prev) => !prev);
  };
  const handleToggleSort = () => {
    setToggleSort((prev) => !prev);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between">
        <div className="relative w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search feedback..."
            className="pl-10 pr-4 py-2 w-full md:w-80 border border-gray-300 rounded-lg text-sm outline-0 focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex flex-wrap items-center space-x-3">
          <div className="relative">
            <Button
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white cursor-pointer hover:bg-gray-50"
              onClick={handleToggleFilter}
            >
              <FaFilter className="mr-2" /> Filter{" "}
              <FaChevronDown className="ml-2 text-xs" />
            </Button>
            {toggleFilter && (
              <Dropdowns>
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Status
                  </h3>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        className="bg-indigo-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        className="bg-indigo-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Published
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        className="bg-indigo-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Queue</span>
                    </label>
                  </div>
                </div>
              </Dropdowns>
            )}
          </div>
          <div className="relative">
            <Button
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white cursor-pointer hover:bg-gray-50"
              onClick={handleToggleSort}
            >
              <FaSort className="mr-2" /> Sort{" "}
              <FaChevronDown className="ml-2 text-xs" />
            </Button>
            {toggleSort && (
              <Dropdowns>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-100">
                  Newest First
                </p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-100">
                  Oldest First
                </p>
              </Dropdowns>
            )}
          </div>
          <Button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white cursor-pointer hover:bg-gray-50">
            <FaDownload className="mr-2" /> Export
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHeader;
