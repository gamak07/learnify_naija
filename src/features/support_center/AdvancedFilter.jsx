import React, { useState } from "react";
import Button from "../../components/Button";

const AdvancedFilter = () => {
  const [status, setStatus] = useState({
    new: false,
    open: false,
    progress: false,
    pending: false,
    closed: false,
  });

  const [priority, setPriority] = useState("high");

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setStatus((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <div className="space-y-2">
            {["new", "open", "progress", "pending", "closed"].map((key) => (
              <div className="flex items-center" key={key}>
                <input
                  type="checkbox"
                  id={key}
                  checked={status[key]}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={key}
                  className="ml-2 text-sm text-gray-700 capitalize"
                >
                  {key.replace("_", " ")}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <div className="space-y-2">
            {["high", "medium", "low"].map((rad) => (
              <div className="flex items-center" key={rad}>
                <input
                  type="radio"
                  value={rad}
                  checked={priority === rad}
                  onChange={handlePriorityChange}
                />
                <label
                  htmlFor={rad}
                  className="ml-2 text-sm text-gray-700 capitalize"
                >
                  {rad}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="start-date"
                className="block text-xs text-gray-500"
              >
                From
              </label>
              <input
                type="date"
                id="start-date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:border-indigo-500 focus:border-2"
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-xs text-gray-500">
                From
              </label>
              <input
                type="date"
                id="end-date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:border-indigo-500 focus:border-2"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Assignee
          </label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm py-2 px-3 focus:outline-0 focus:border-indigo-500 focus:border-2">
            <option value="all">All Assignees</option>
            <option value="dave">Dave Ayorinde</option>
            <option value="ridwan">Ridwan Hassan</option>
            <option value="unassigned">Unassigned</option>
          </select>
          <div className="mt-4 flex justify-end space-x-2">
            <Button className="px-3 py-1.5 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Clear Filters
            </Button>
            <Button className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilter;
