import React from "react";
import FeedbacksList from "./FeedbacksList";

const feedbacks = [
  {
    feedback:
      "The dashboard is not loading correctly on mobile devices. I'm experiencing significant lag and some elements are not displaying properly.",
    user: "John Smith",
    email: "john.smith@example.com",
    date: "2025-05-16",
    status: "published",
  },
  {
    feedback:
      "I love the new analytics feature! It's made tracking our team's performance so much easier. Would it be possible to add custom date ranges?",
    user: "Rhaegar Adolf",
    email: "rhaegar.adolf@example.com",
    date: "2025-05-19",
    status: "queue",
  },
  {
    feedback:
      "The export function isn't working properly. When I try to export my data to CSV, some columns are missing or incorrectly formatted.",
    user: "Adeyemi Afolabi",
    email: "adeyemi.afolabi@example.com",
    date: "2025-05-17",
    status: "queue",
  },
  {
    feedback:
      "I would like to suggest adding a dark mode option. It would be much easier on the eyes when working late.",
    user: "Mick Smith",
    email: "mick.smith@example.com",
    date: "2025-05-10",
    status: "published",
  },
  {
    feedback:
      "I'm having trouble connecting my Google Analytics account. The integration keeps failing with an error code 403.",
    user: "Sam Morsey",
    email: "sam.morsey@example.com",
    date: "2025-05-11",
    status: "published",
  },
  {
    feedback:
      "The notification system is too intrusive. I'm getting too many pop-ups that interrupt my workflow.",
    user: "Lillian Acheampong",
    email: "lillian.achaempong@example.com",
    date: "2025-05-21",
    status: "published",
  },
];

const FeedbacksTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <input type="checkbox" className="h-4 w-4" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                feedback
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                user
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                actions
              </th>
            </tr>
          </thead>
          <FeedbacksList feedbacks={feedbacks} />
        </table>
      </div>
    </div>
  );
};

export default FeedbacksTable;
