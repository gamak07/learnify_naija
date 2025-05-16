import React, { useState } from "react";
import { FaFileCsv, FaFilePdf, FaFilter, FaSearch } from "react-icons/fa";
import Button from "../../components/Button";
import AnalyticsFilter from "./AnalyticsFilter";

const AnalyticsMiniHeader = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between mt-4 mb-4">
      <div className="w-64 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search..."
        />
      </div>
      <div className="flex space-x-2">
        <div className="relative">
          <Button
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white cursor-pointer outline-0 focus:bg-gray-50"
            onClick={handleToggleFilter}
          >
            <FaFilter className="mr-2" /> Filter
          </Button>
          {showFilter && <AnalyticsFilter />}
        </div>
        <Button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white outline-0 cursor-pointer hover:bg-gray-50">
          <FaFileCsv className="mr-2" /> Export CSV
        </Button>
        <Button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white outline-0 cursor-pointer hover:bg-gray-50">
          <FaFilePdf className="mr-2" /> Export PDF
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsMiniHeader;
