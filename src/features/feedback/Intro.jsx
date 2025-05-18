import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Intro = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="text-sm flex items-center space-x-2">
          <span className="text-gray-500 hover:text-indigo-500">Dashboard</span>
          <FaChevronRight className="text-gray-400 text-xs mx-2" />
          <span className="text-gray-400">Feedback Management</span>
        </div>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Feedback Management
        </h1>
        <p className="text-gray-600 mt-1">
          View and manage customer feedback and support requests
        </p>
      </div>
    </div>
  );
};

export default Intro;
