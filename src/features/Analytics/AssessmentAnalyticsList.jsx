import React from "react";
import Button from "../../components/Button";
import { DiVim } from "react-icons/di";

const AssessmentAnalyticsList = ({ assessments }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {assessments.map((assessment, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {assessment.title}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{assessment.attempts}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{assessment.avgScore}%</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{assessment.passRate}%</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                assessment.difficulty === "hard"
                  ? "bg-red-100 text-red-800"
                  : assessment.difficulty === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : assessment.difficulty === "easy"
                  ? "bg-green-100 text-green-800"
                  : ""
              }`}
            >
              {assessment.difficulty}
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

export default AssessmentAnalyticsList;
