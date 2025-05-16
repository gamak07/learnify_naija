import React from "react";
import AssessmentAnalyticsList from "./AssessmentAnalyticsList";

const assessments = [
  {
    title: "Python Basics Quiz",
    attempts: 231,
    avgScore: 80,
    passScore: 72,
    difficulty: 'medium',
  },
  {
    title: "Python Basics Quiz",
    attempts: 201,
    avgScore: 86,
    passScore: 75,
    difficulty: 'hard',
  },
  {
    title: "Python Basics Quiz",
    attempts: 116,
    avgScore: 72,
    passScore: 76,
    difficulty: 'medium',
  },
  {
    title: "Python Basics Quiz",
    attempts: 189,
    avgScore: 80,
    passScore: 79,
    difficulty: 'hard',
  },
  {
    title: "Python Basics Quiz",
    attempts: 331,
    avgScore: 95,
    passScore: 98,
    difficulty: 'easy',
  },
];

const AssessmentAnalyticsTable = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            title
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            attempts
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            avg. score
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            pass score
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            difficulty
          </th>
          <th scope="col" className="px-6 py-3">
            {/* Actions */}
          </th>
        </tr>
      </thead>
      <AssessmentAnalyticsList assessments={assessments} />
    </table>
  );
};

export default AssessmentAnalyticsTable;
