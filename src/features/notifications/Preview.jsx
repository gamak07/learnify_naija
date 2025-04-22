// components/Preview.jsx
import React, { useState } from "react";
import { FaDesktop, FaMobileAlt, FaCircle, FaBell } from "react-icons/fa";
import PreviewCard from "./PreviewCard";

const Preview = () => {
  const [device, setDevice] = useState("desktop");

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg text-gray-800">Preview</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDevice("desktop")}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded ${
              device === "desktop"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            <FaDesktop /> Desktop
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded ${
              device === "mobile"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            <FaMobileAlt /> Mobile
          </button>
        </div>
      </div>

      {/* Fake browser header */}
      <div className="bg-gray-100 border rounded-t-md px-3 py-1 text-sm text-gray-500 flex items-center justify-between">
        <div className="flex space-x-1">
          <FaCircle className="text-red-400" />
          <FaCircle className="text-yellow-400" />
          <FaCircle className="text-green-400" />
        </div>
        <span>Preview</span>
      </div>

      {/* Preview card */}
      <div className="border-x border-b rounded-b-md p-4 bg-gray-50">
        <PreviewCard />
      </div>

      {/* Preview Tips */}
      <div className="mt-4 bg-indigo-50 text-indigo-900 p-4 rounded-lg text-sm space-y-2">
        <div className="flex items-start gap-2">
          <FaBell className="mt-0.5" />
          <span>Variables will be replaced with actual user data when sent</span>
        </div>
        <div className="flex items-start gap-2">
          <FaBell className="mt-0.5" />
          <span>Preview appearance may vary slightly on different devices</span>
        </div>
        <div className="flex items-start gap-2">
          <FaBell className="mt-0.5" />
          <span>Test notifications before sending to large audiences</span>
        </div>
      </div>
    </div>
  );
};

export default Preview;
