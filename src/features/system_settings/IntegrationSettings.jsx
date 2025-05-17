import React from "react";
import {
  FaEye,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaPlug,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../components/Button";

const configuration = [
  { icon: <FaGoogle />, type: "Google", status: "Connected" },
  { icon: <FaFacebook />, type: "Facebook", status: "Connect" },
  { icon: <FaTwitter />, type: "Twitter", status: "Connect" },
  { icon: <FaGithub />, type: "Github", status: "Connected" },
];

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

      <div className="p-5 border-t border-gray-200">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            API Keys
          </label>
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Your API Keys</span>
              <Button className="text-blue-600 text-sm cursor-pointer whitespace-nowrap flex items-center">
                <FaPlus className="mr-1" /> Generate New Key
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium">Production Key</p>
                  <p className="text-xs text-gray-500">
                    Created on May 10, 2025
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded mr-2">
                    ••••••••8f3d
                  </span>
                  <Button className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <FaEye />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium">Development Key</p>
                  <p className="text-xs text-gray-500">
                    Created on May 15, 2025
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded mr-2">
                    ••••••••2a7c
                  </span>
                  <Button className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <FaEye />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OAuth Configuration
          </label>
          <div className="space-y-3">
            {configuration.map((auth, i) => (
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      auth.type === "Google"
                        ? "bg-red-100 text-red-600"
                        : auth.type === "Facebook"
                        ? "bg-blue-100 text-blue-600"
                        : auth.type === "Twitter"
                        ? "bg-blue-100 text-blue-400"
                        : auth.type === "Github"
                        ? "bg-gray-800 text-white"
                        : ""
                    }`}
                  >
                    {auth.icon}
                  </div>
                  <span className="text-sm font-medium">{auth.type}</span>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      auth.status === "Connected"
                        ? "bg-green-100 text-green-800"
                        : auth.status === "Connect"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    {auth.status}
                  </span>
                </div>
              </div>
            ))}
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

export default IntegrationSettings;
