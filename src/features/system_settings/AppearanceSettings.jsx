import React, { useState } from "react";
import { FaMoon, FaPaintBrush, FaSun } from "react-icons/fa";
import Button from "../../components/Button";

const AppearanceSettings = () => {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("medium");

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  const handleFontChange = (font) => {
    setFont(font);
  };

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

      <div className="p-5 border-t border-gray-200">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Theme
          </label>
          <div className="flex space-x-4">
            <div
              className={`flex items-center justify-center w-1/2 p-3 border rounded-md cursor-pointer ${
                theme === "light"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleThemeChange("light")}
            >
              <FaSun className="text-yellow-500 mr-2" /> Light
            </div>
            <div
              className={`flex items-center justify-center w-1/2 p-3 border rounded-md cursor-pointer ${
                theme === "dark"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleThemeChange("dark")}
            >
              <FaMoon className="text-gray-700 mr-2" /> Dark
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Primary Color
          </label>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-md mr-3 border border-gray-300 bg-blue-500"></div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md text-sm outline-0 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Font Family
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md outline-0 bg-white text-sm focus:ring-2 focus:ring-blue-500">
            <option value="">Inter</option>
            <option value="">Roboto</option>
            <option value="">Open Sans</option>
            <option value="">Lato</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Font Size
          </label>
          <div className="flex space-x-4">
            <div
              className={`flex items-center justify-center flex-1 p-2 border rounded-md cursor-pointer ${
                font === "small"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleFontChange("small")}
            >
              Small
            </div>
            <div
              className={`flex items-center justify-center flex-1 p-2 border rounded-md cursor-pointer ${
                font === "medium"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleFontChange("medium")}
            >
              Medium
            </div>
            <div
              className={`flex items-center justify-center flex-1 p-2 border rounded-md cursor-pointer ${
                font === "large"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleFontChange("large")}
            >
              Large
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

export default AppearanceSettings;
