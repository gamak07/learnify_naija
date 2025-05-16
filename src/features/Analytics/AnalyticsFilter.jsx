import React from "react";
import Button from "../../components/Button";

const AnalyticsFilter = () => {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">
          Filter Options
        </h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Activity Date Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="date"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Count
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="min"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="number"
              placeholder="max"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Duration (minutes)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="min"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="number"
              placeholder="max"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-3 flex justify-end space-x-2 bg-gray-50 rounded-b-md">
        <Button className="px-4 py-2 text-sm font-medium rounded-md cursor-pointer text-gray-700 hover:bg-gray-100">
          Cancel
        </Button>
        <Button className="px-4 py-2 text-sm font-medium rounded-md cursor-pointer text-white bg-indigo-600 whitespace-nowrap hover:bg-indigo-700">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsFilter;
