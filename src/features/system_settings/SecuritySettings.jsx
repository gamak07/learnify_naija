import React, { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import Button from "../../components/Button";

const SecuritySettings = () => {
  const [toggleAuthentication, setToggleAuthentication] = useState(false);
  const handleToggleAuthentication = () => {
    setToggleAuthentication((prev) => !prev);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-5 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
            <FaShieldAlt className="text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Security Settings
          </h3>
        </div>
      </div>

      <div className="p-5 border-t border-gray-200">
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Password Policy
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <label className="ml-2 text-gray-700 text-sm">
                Force password change every 90 days
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <label className="ml-2 text-gray-700 text-sm">
                Prevent password reuse (last 5 passwords)
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <label className="ml-2 text-gray-700 text-sm">
                Lock account after 5 failed attempts
              </label>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-200 rounded-md text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Users will be logged out after this period of inactivity
          </p>
        </div>

        <div className="mb-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Two-Factor Authentication
            </label>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                toggleAuthentication ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={handleToggleAuthentication}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform bg-white ${
                  toggleAuthentication ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Require two-factor authentication for all users
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            IP Access Control
          </label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                IP Whitelist (one per line)
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-o focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 192.168.1"
              ></textarea>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                IP Blacklist (one per line)
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-o focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 192.168.2"
              ></textarea>
            </div>
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

export default SecuritySettings;
