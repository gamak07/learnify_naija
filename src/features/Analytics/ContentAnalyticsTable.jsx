import React from "react";
import ContentAnalyticsList from "./ContentAnalyticsList";

const contents = [
  {
    title: "Introduction to Data Science",
    type: "Video",
    views: 234,
    avgEngagement: 80,
    completionRate: 72,
  },
  {
    title: "Python Programming Basics",
    type: "Course",
    views: 1123,
    avgEngagement: 83,
    completionRate: 72,
  },
  {
    title: "Machine Learning Fundamentals",
    type: "Article",
    views: 100,
    avgEngagement: 85,
    completionRate: 75,
  },
  {
    title: "Data Visualization Techniques",
    type: "Quiz",
    views: 239,
    avgEngagement: 89,
    completionRate: 70,
  },
  {
    title: "Statistical Analysis Methods",
    type: "Exercise",
    views: 134,
    avgEngagement: 50,
    completionRate: 22,
  },
];
const ContentAnalyticsTable = () => {
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
            type
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            views
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            avg. engagement
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            completion rate
          </th>
          <th scope="col" className="px-6 py-3">
            {/* Actions */}
          </th>
        </tr>
      </thead>
      <ContentAnalyticsList contents={contents} />
    </table>
  );
};

export default ContentAnalyticsTable;
