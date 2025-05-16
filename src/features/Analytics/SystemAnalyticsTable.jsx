import React from "react";
import SystemAnalyticsList from "./SystemAnalyticsList";

const systems = [
  { metric: "Page Load Time", value: '1.2s', change: -0.3, status: "good" },
  { metric: "API Response Time", value: '0.8s', change: -0.1, status: "good" },
  { metric: "Error Rate", value: '0.5%', change: +0.1, status: "warning" },
  { metric: "Uptime", value: '99.985', change: +0.01, status: "good" },
  { metric: "Database Query Time", value: '0.3s', change: -0.05, status: "good" },
];

const SystemAnalyticsTable = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            metric
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            value
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            change
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            status
          </th>
          <th scope="col" className="px-6 py-3">
            {/* Actions */}
          </th>
        </tr>
      </thead>
      <SystemAnalyticsList systems={systems} />
    </table>
  );
};

export default SystemAnalyticsTable;
