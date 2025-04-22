// History.jsx
import React, { useState } from "react";
import HistoryList from "./HistoryList";
import Pagination from "../../components/Pagination";

const notifications = [
  {
    id: "NOT-1234",
    title: "New Feature Announcement",
    channels: ["Email", "In-app"],
    audience: "All Users",
    scheduled: "2025-04-17 09:00",
    status: "Sent",
    metrics: { opened: 12543, delivered: 12498 },
  },
  {
    id: "NOT-1235",
    title: "Weekend Promotion",
    channels: ["Email", "Push", "SMS"],
    audience: "Premium Users",
    scheduled: "2025-04-18 08:00",
    status: "Scheduled",
    metrics: null,
  },
  {
    id: "NOT-1236",
    title: "System Maintenance",
    channels: ["Email", "In-app"],
    audience: "All Users",
    scheduled: "2025-04-16 14:30",
    status: "Sent",
    metrics: { opened: 12543, delivered: 12498 },
  },
  {
    id: "NOT-1237",
    title: "Security Update Required",
    channels: ["Email", "Push", "In-app"],
    audience: "Mobile Users",
    scheduled: "2025-04-15 10:15",
    status: "Sent",
    metrics: { opened: 8721, delivered: 8702 },
  },
  {
    id: "NOT-1238",
    title: "Feedback Request",
    channels: ["Email"],
    audience: "New Users",
    scheduled: null,
    status: "Draft",
    metrics: null,
  },
  {
    id: "NOT-1239",
    title: "Account Verification Reminder",
    channels: ["Email", "SMS"],
    audience: "Unverified Users",
    scheduled: "2025-04-14 09:00",
    status: "Failed",
    metrics: { opened: 1254, delivered: 943 },
  },
];

const History = () => {
  const [showMenu, setShowMenu] = useState(null);
  
  return (
    <>
      <div className=" overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "ID",
                "Title",
                "Channels",
                "Audience",
                "Scheduled",
                "Status",
                "Metrics",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-xs text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {notifications.map((n) => (
              <HistoryList key={n.id} {...n} showMenu={showMenu} setShowMenu={setShowMenu} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default History;
