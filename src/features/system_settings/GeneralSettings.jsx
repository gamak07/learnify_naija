import React from "react";
import { FaImage, FaSlidersH } from "react-icons/fa";
import Button from "../../components/Button";

const GeneralSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="bg-white">
        <div className="flex items-center p-5">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <FaSlidersH className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            General Settings
          </h3>
        </div>

        <div className="p-5 border-t border-gray-200">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Site Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md outline-0 focus:ring-blue-500 focus:ring-2 text-sm"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo
            </label>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-md mr-4 flex items-center justify-center">
                <FaImage className="text-gray-400 text-2xl" />
              </div>
              <Button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm cursor-pointer whitespace-nowrap">
                Upload New Logo
              </Button>
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timezone
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md outline-0 bg-white text-sm focus:ring-2 focus:ring-blue-500">
              <option value="">UTC (Coordinated Universal Time)</option>
              <option value="">WAT (West Africa Time)</option>
              <option value="">CAT (Central Africa Time)</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md outline-0 bg-white text-sm focus:ring-2 focus:ring-blue-500">
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Spanish</option>
            </select>
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
    </div>
  );
};

export default GeneralSettings;
