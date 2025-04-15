import React from "react";
import { FaBook, FaSync } from "react-icons/fa";
import { FaClipboardCheck, FaTicketSimple, FaUserPlus } from "react-icons/fa6";

const activities = [
  {
    icon: <FaBook />,
    activityName: "New lesson uploaded",
    activityType: "Advanced Mathematics",
    time: "10 minutes ago",
    bgColor: "bg-blue-500",
  },
  {
    icon: <FaClipboardCheck />,
    activityName: "Quiz completed",
    activityType: "Basic Science Quiz",
    time: "25 minutes ago",
    bgColor: "bg-green-500",
  },
  {
    icon: <FaUserPlus />,
    activityName: "New teacher registered",
    activityType: "Mrs. Okafor (Chemistry)",
    time: "1 hours ago",
    bgColor: "bg-purple-500",
  },
  {
    icon: <FaTicketSimple />,
    activityName: "Support ticket resolved",
    activityType: "Login Issue #2453",
    time: "2 hours ago",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <FaSync />,
    activityName: "System update completed",
    activityType: "Version 2.4.1",
    time: "3 hours ago",
    bgColor: "bg-red-500",
  },
];
const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-lg font-semibold mb-4">Recent Activity</h1>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex gap-3">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${activity.bgColor}`}
            >
              {activity.icon}
            </div>
            <div>
              <p className="font-medium">{activity.activityName}</p>
              <p className="text-xs opacity-70">{activity.activityType}</p>
              <p className="text-xs opacity-50">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
