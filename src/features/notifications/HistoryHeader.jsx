import React, { useState } from "react";
import {
  FaBell,
  FaChevronDown,
  FaEnvelope,
  FaMobileAlt,
  FaSearch,
  FaSms,
} from "react-icons/fa";
import Button from "../../components/Button";

const channelButtons = [
  { icon: <FaEnvelope />, type: "Email" },
  { icon: <FaMobileAlt />, type: "Push" },
  { icon: <FaSms />, type: "SMS" },
  { icon: <FaBell />, type: "In-app" },
];

const HistoryHeader = () => {
  const [isActiveChannel, setIsActiveChannel] = useState([]);
  const handleIsActiveChannel = (type) => {
    setIsActiveChannel((prev) =>
      prev.includes(type) ? prev.filter((fil) => fil !== type) : [...prev, type]
    );
  };
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <select
            name=""
            id=""
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none text-sm font-medium text-gray-700 focus:outline-0 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Status: All</option>
            <option value="">Status: Sent</option>
            <option value="">Status: Scheduled</option>
            <option value="">Status: Draft</option>
            <option value="">Status: Failed</option>
          </select>
          <span className="absolute transform -translate-y-1/2 top-1/2 right-3">
            <FaChevronDown />
          </span>
        </div>
        <div className="relative">
          <select
            name=""
            id=""
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none text-sm font-medium text-gray-700 focus:outline-0 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Last 7 days</option>
            <option value="">Last 30 days</option>
            <option value="">Last 90 days</option>
            <option value="">Custom range</option>
          </select>
          <span className="absolute transform -translate-y-1/2 top-1/2 right-3">
            <FaChevronDown />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {channelButtons.map((channel, index) => {
            const isActive = isActiveChannel.includes(channel.type);
            return (
              <Button
                key={index}
                className={`p-2 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 border border-indigo-200"
                    : "bg-gray-50 text-gray-600"
                }`}
                onClick={() => handleIsActiveChannel(channel.type)}
              >
                {channel.icon}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search notifications..."
          className="pl-10 pr-4 py-2 border-gray-300 border text-sm w-64 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-500"
        />
        <span className="absolute left-3 top-1/2 text-gray-300 transform -translate-y-1/2">
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default HistoryHeader;
