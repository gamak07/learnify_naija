import React from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";

const NotificationInfo = () => {
  return (
    <div className="w-2/3">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-500">Notification ID</p>
          <p className="text-sm font-mono text-gray-700">NOT-1234</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-500">Created At</p>
          <p className="text-sm text-gray-700">2025-04-17 09:00</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-500">Template</p>
          <p className="text-sm text-gray-700">Announcement</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2">
          New Feature Announcement
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
          We are excited to announce the launch of our new dashboard features!
          Starting today, you can access enhanced analytics, customizable
          widgets, and improved data visualization tools. Check out the new
          features by clicking the button below.
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Delivery Channels
        </h4>
        <div className="flex space-x-3">
          <div className="flex items-center space-x-1 bg-gray-50 px-3 py-2 rounded-lg">
            <span className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <FaEnvelope />
            </span>
            <p className="text-sm font-medium text-gray-700">Email</p>
          </div>
          <div className="flex items-center space-x-1 bg-gray-50 px-3 py-2 rounded-lg">
            <span className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <FaBell />
            </span>
            <p className="text-sm font-medium text-gray-700">In App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationInfo;
