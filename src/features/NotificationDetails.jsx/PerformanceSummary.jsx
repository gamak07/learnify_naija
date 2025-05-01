import React from "react";

const PerformanceSummary = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
      <h3 className="text-lg font-semibold mb-4"></h3>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Overall Performance</span>
            <span className="text-sm font-medium text-green-600">
              Above Average
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "78%" }}
            ></div>
          </div>
        </div>

        <div className="pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Open Rate</div>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">42.3%</span>
                <span className="text-green-600 text-sm">+5.7%</span>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Click Rate</div>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">18.7%</span>
                <span className="text-green-600 text-sm">+3.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Conversion</div>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">5.2%</span>
                <span className="text-green-600 text-sm">+1.8%</span>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Revenue</div>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">$12,420</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSummary;
