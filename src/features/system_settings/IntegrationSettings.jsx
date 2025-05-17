import React from "react";
import { FaPlug } from "react-icons/fa";

const IntegrationSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-5 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
            <FaPlug className="text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Integration Settings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSettings;
