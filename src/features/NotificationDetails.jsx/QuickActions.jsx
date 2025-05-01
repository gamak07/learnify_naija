import React from "react";
import { FaCopy, FaDownload, FaPaperPlane, FaShareAlt } from "react-icons/fa";

const actions = [
  {
    actionType: "Resend Notification",
    icon: <FaPaperPlane />,
  },
  {
    actionType: "Duplicate & Edit",
    icon: <FaCopy />,
  },
  {
    actionType: "Export Report",
    icon: <FaDownload />,
  },
  {
    actionType: "Share Results",
    icon: <FaShareAlt />,
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action, i) => (
          <div
            className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer whitespace-nowrap hover:bg-gray-50"
            key={i}
          >
            <span className="mr-2">{action.icon}</span>
            <p>{action.actionType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
