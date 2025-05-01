// components/PreviewCard.jsx
import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const PreviewCard = () => {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm w-full">
      <div className="flex items-center space-x-2 mb-2">
        <FaBell className="text-indigo-500" />
        <h4 className="text-md font-semibold text-gray-800">
          Notification Title
        </h4>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Your notification message will appear here. Add personalization with
        variables like{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">first name</code>.
      </p>
      <div className="flex space-x-2">
        <button className="">
          <Link
            to="/notification_details"
            className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded hover:bg-indigo-700 transition"
          >
            View Details
          </Link>
        </button>
        <button className="text-sm text-gray-700 hover:underline">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default PreviewCard;
