import React from "react";
import { FaPaintBrush } from "react-icons/fa";

const AppearanceSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-5 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
            <FaPaintBrush className="text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Appearance Settings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;
