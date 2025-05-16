import React from "react";
import Button from "../../components/Button";

const SystemAnalyticsList = ({ systems }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {systems.map((system, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {system.metric}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{system.value}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div
              className={`text-sm ${
                system.change > 0 ? "text-red-600" : "text-green-600"
              }`}
            >
              {system.change}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                system.status === "warning"
                  ? "bg-yellow-100 text-yellow-800"
                  : system.status === "good"
                  ? "bg-green-100 text-green-800"
                  : ""
              }`}
            >
              {system.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Button className="text-indigo-600 cursor-pointer whitespace-nowrap hover:text-indigo-900">
              View Details
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SystemAnalyticsList;
