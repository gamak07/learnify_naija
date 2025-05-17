import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-5 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
            <FaBell className="text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Notification Settings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
