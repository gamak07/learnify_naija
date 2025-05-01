import React from "react";
import Button from "../../components/Button";
import {
  FaBell,
  FaCalendarAlt,
  FaCommentAlt,
  FaEllipsisV,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

const Info = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Spring Sale Promotion
          </h2>
          <div className="flex items-center mt-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Delivered
            </span>
            <span className="text-gray-500 text-sm ml-3">
              Created on April 15, 2025
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="cursor-pointer text-gray-500 hover:text-gray-700">
            <FaEllipsisV />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Channels</h3>
          <div className="flex space-x-3">
            <span className="bg-blue-100 text-blue-800 p-2 rounded-full">
              <FaEnvelope />
            </span>
            <span className="bg-purple-100 text-purple-800 p-2 rounded-full">
              <FaBell />
            </span>
            <span className="bg-green-100 text-green-800 p-2 rounded-full">
              <FaCommentAlt />
            </span>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Audience</h3>
          <div className="flex items-center font-medium">
            <span className="mr-2">
              <FaUsers />
            </span>
            25,487 recipients
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Active Users, Premium Segment
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Schedule</h3>
          <div className="flex items-center">
            <span className="text-gray-500 mr-1">
              <FaCalendarAlt />
            </span>
            <p className="font-medium">Apr 15, 2025 at 10:00 AM</p>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Recipient's local time
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
