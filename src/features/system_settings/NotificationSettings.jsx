import React, { useState } from "react";
import { FaBell, FaPlus } from "react-icons/fa";
import Button from "../../components/Button";

const NotificationSettings = () => {
  const [toggleEmailNot, setToggleEmailNot] = useState(true);
  const [togglePushNot, setTogglePushNot] = useState(true);

  const handleEmailToggle = () => {
    setToggleEmailNot((prev) => !prev);
  };

  const handlePushToggle = () => {
    setTogglePushNot((prev) => !prev);
  };

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

      <div className="p-5 border-t border-gray-200">
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Email Notifications
            </label>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                toggleEmailNot ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={handleEmailToggle}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform bg-white ${
                  toggleEmailNot ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Send email notifications to users
          </p>
        </div>

        <div className="mb-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Push Notifications
            </label>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                togglePushNot ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={handlePushToggle}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform bg-white ${
                  togglePushNot ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Send push notifications to users' devices
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password Requirements
          </label>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
              <span className="text-sm">Welcome Email</span>
              <Button className="text-blue-600 text-sm cursor-pointer whitespace-nowrap">
                Edit Template
              </Button>
            </div>
            <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
              <span className="text-sm">Welcome Email</span>
              <Button className="text-blue-600 text-sm cursor-pointer whitespace-nowrap">
                Password Reset
              </Button>
            </div>
            <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
              <span className="text-sm">Welcome Email</span>
              <Button className="text-blue-600 text-sm cursor-pointer whitespace-nowrap">
                Account Verification
              </Button>
            </div>
            <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
              <span className="text-sm">Notification Digest</span>
              <Button className="text-blue-600 text-sm cursor-pointer whitespace-nowrap">
                Edit Template
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Verification
          </label>
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Custom Rules</span>
              <Button className="flex items-center text-blue-600 text-sm cursor-pointer whitespace-nowrap">
                <FaPlus className="mr-1" /> Add Rule
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              No custom notification rules defined
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <Button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm cursor-pointer whitespace-nowrap">
            Reset to Defaults
          </Button>
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer whitespace-nowrap">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
