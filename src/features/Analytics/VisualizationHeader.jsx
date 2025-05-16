import React from "react";
import Button from "../../components/Button";

const VisualizationHeader = ({ activeTab, handleActiveTab }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-medium text-gray-900">Data Visualization</h3>
      <div className="flex items-center space-x-2">
        <Button
          className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer ${
            activeTab === "daily"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          } text-gray-700 `}
          onClick={() => handleActiveTab("daily")}
        >
          Daily
        </Button>
        <Button
          className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer ${
            activeTab === "weekly"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          } text-gray-700 `}
          onClick={() => handleActiveTab("weekly")}
        >
          Weekly
        </Button>
        <Button
          className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer ${
            activeTab === "monthly"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          } text-gray-700 `}
          onClick={() => handleActiveTab("monthly")}
        >
          Monthly
        </Button>
        <Button
          className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer ${
            activeTab === "yearly"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          } text-gray-700 `}
          onClick={() => handleActiveTab("yearly")}
        >
          Yearly
        </Button>
      </div>
    </div>
  );
};

export default VisualizationHeader;
