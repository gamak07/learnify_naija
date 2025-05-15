import React from "react";

const Intro = () => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Analytics Overview</h2>
      <div className="flex items-center space-x-2">
        <span className="whitespace-nowrap text-sm text-gray-500">
          Date Range:
        </span>
        <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:border-indigo-500 focus:border-2 rounded-md cursor-pointer sm:text-sm">
          <option value="">Last 7 days</option>
          <option value="">Last 30 days</option>
          <option value="">Last 3 months</option>
          <option value="">Last 12 months</option>
          <option value="">Custom range</option>
        </select>
      </div>
    </div>
  );
};

export default Intro;
