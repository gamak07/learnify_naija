import React from "react";
import Button from "../../components/Button";

const AnalyticsOptionHeader = ({ activeTab, handleActiveTab }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        <Button
          className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium cursor-pointer text-sm rounded-md ${
            activeTab === "user"
              ? "border-indigo-500 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => handleActiveTab("user")}
        >
          User Analytics
        </Button>
        <Button
          className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium cursor-pointer text-sm rounded-md ${
            activeTab === "content"
              ? "border-indigo-500 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => handleActiveTab("content")}
        >
          Content Analytics
        </Button>
        <Button
          className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium cursor-pointer text-sm rounded-md ${
            activeTab === "assessment"
              ? "border-indigo-500 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => handleActiveTab("assessment")}
        >
          Assessment Analytics
        </Button>
        <Button
          className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium cursor-pointer text-sm rounded-md ${
            activeTab === "system"
              ? "border-indigo-500 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => handleActiveTab("system")}
        >
          System Analytics
        </Button>
      </nav>
    </div>
  );
};

export default AnalyticsOptionHeader;
