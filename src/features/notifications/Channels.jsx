import React, { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaMobileAlt,
  FaSms,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const channels = [
  {
    icon: <FaEnvelope />,
    channelType: "Email",
  },
  {
    icon: <FaMobileAlt />,
    channelType: "Push",
  },
  {
    icon: <FaSms />,
    channelType: "SMS",
  },
  {
    icon: <FaBell />,
    channelType: "In-app",
  },
];

const Channels = () => {
  const [isActiveChannel, setIsActiveChannel] = useState([]);
  const handleIsActiveChannel = (type) => {
    setIsActiveChannel((prev) =>
      prev.includes(type) ? prev.filter((fil) => fil !== type) : [...prev, type]
    );
  };
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Channels
      </label>
      <div className="flex flex-wrap gap-4">
        {channels.map((channel, i) => {
          const isActive = isActiveChannel.includes(channel.channelType);
          return (
            <div
              key={i}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border bg-indigo-50 border-indigo-200"
              onClick={() => handleIsActiveChannel(channel.channelType)}
            >
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center bg-gray-300 ${
                  isActive ? "bg-indigo-600" : ""
                }`}
              >
                {isActive && <FaCheck className="text-white text-xs" />}
              </div>
              <span className="text-gray-600">{channel.icon}</span>
              <p className="text-sm text-gray-700 font-medium">
                {channel.channelType}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Channels;
