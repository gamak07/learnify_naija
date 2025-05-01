import React from "react";
import PerformanceMetricsChart from "./PerformanceMetricsChart";

const metrics = [
  { name: "Sent", value: "12,543" },
  { name: "Delivered", value: "12,498" },
  { name: "Open Rate", value: "45%" },
  { name: "Click Rate", value: "18.5%" },
];
const PerformanceMetrics = () => {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Performace Metrics
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, i) => (
          <div className="bg-gray-50 rounded-lg p-4" key={i}>
            <div className="text-sm font-medium text-gray-500">
              {metric.name}
            </div>
            <div className="text-2xl font-semibold text-gray-900 mt-1">
              {metric.value}
            </div>
          </div>
        ))}
      </div>
      <PerformanceMetricsChart />
    </>
  );
};

export default PerformanceMetrics;
