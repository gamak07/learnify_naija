import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import Button from "../../components/Button";

const UserSettings = () => {
  const [toggleRegistration, setToggleRegistration] = useState(true);

  const handleToggleRegistration = () => {
    setToggleRegistration((prev) => !prev);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-5 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <FaUsers className="text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">User Settings</h3>
        </div>
      </div>

      <div className="p-5 border-t border-gray-200">
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Allow User Registration
            </label>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                toggleRegistration ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={handleToggleRegistration}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform bg-white ${
                  toggleRegistration ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Allow new users to create accounts on your platform
          </p>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default User Role
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md outline-0 text-sm bg-white focus:ring-2 focus:ring-blue-500">
            <option value="">User</option>
            <option value="">Admin</option>
            <option value="">Editor</option>
            <option value="">Moderator</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password Requirements
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <label className="ml-2 text-gray-700 text-sm">
                Minimum 8 characters
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <label className="ml-2 text-gray-700 text-sm">
                Require uppercase letters
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <label className="ml-2 text-gray-700 text-sm">
                Require numbers
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 " />
              <label className="ml-2 text-gray-700 text-sm">
                Require special characters
              </label>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Verification
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 " />
              <label className="ml-2 text-gray-700 text-sm">
                Email verification required
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 " />
              <label className="ml-2 text-gray-700 text-sm">
                Admin approval required
              </label>
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

export default UserSettings;
