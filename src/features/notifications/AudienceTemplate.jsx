import React from "react";
import { FaChevronDown } from "react-icons/fa";

const AudienceTemplate = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Audience
        </label>
        <div className="relative">
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-0 focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            <option value="">All Users</option>
            <option value="">Premium Users</option>
            <option value="">Free Users</option>
            <option value="">New Users(Last 30 days)</option>
            <option value="">Inactive Users</option>
            <option value="">Custom Segment</option>
          </select>
          <span className="absolute text-gray-400 top-1/2 right-3 transform -translate-y-1/2">
            <FaChevronDown />
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Template
        </label>
        <div className="relative">
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-0 focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            <option value="">Default Template</option>
            <option value="">Announcement</option>
            <option value="">Product Update</option>
            <option value="">Promotion</option>
            <option value="">Reminder</option>
          </select>
          <span className="absolute text-gray-400 top-1/2 right-3 transform -translate-y-1/2">
            <FaChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudienceTemplate;
