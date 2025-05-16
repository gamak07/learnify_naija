import React from "react";
import Button from "../../components/Button";

const ContentAnalyticsList = ({ contents }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {contents.map((content, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {content.title}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              {content.type}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{content.views}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {content.avgEngagement}%
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {content.completionRate}%
            </div>
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

export default ContentAnalyticsList;
