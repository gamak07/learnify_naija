import React from "react";
import UserAnalyticsList from "./UserAnalyticsList";

const users = [
  {
    name: "Moshood Ariyo",
    email: "moshari34@gmail.com",
    lastActive: "2025-05-10",
    sessions: 14,
    avgDuration: 23,
  },
  {
    name: "Mark Demilade",
    email: "moshari34@gmail.com",
    lastActive: "2025-05-11",
    sessions: 21,
    avgDuration: 20,
  },
  {
    name: "Johnson Ogbuewi",
    email: "moshari34@gmail.com",
    lastActive: "2025-05-12",
    sessions: 10,
    avgDuration: 9,
  },
  {
    name: "Ridwan Adam",
    email: "moshari34@gmail.com",
    lastActive: "2025-05-13",
    sessions: 6,
    avgDuration: 14,
  },
  {
    name: "Balikis Arogundade",
    email: "moshari34@gmail.com",
    lastActive: "2025-05-14",
    sessions: 33,
    avgDuration: 43,
  },
];

const UserAnalyticsTable = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Last Active
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Sessions
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Avg. Duration
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <UserAnalyticsList users={users} />
    </table>
  );
};

export default UserAnalyticsTable;
