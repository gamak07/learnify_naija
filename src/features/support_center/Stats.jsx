import React from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaTicketAlt,
} from "react-icons/fa";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import TicketResolutionChart  from "./TicketResolutionChart";

const stats = [
  { name: "Total Tickets", value: 38, icon: <FaTicketAlt />, chart: <BarChart /> },
  { name: "Open Tickets", value: 24, icon: <FaClipboardList />, chart: <DoughnutChart /> },
  { name: "Avg Response Time", value: "2.8h", icon: <FaClock />, chart: <LineChart /> },
  { name: "Resolution Rate", value: "87%", icon: <FaCheckCircle />, chart: <TicketResolutionChart /> },
];

const Stats = () => {
  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div className="bg-white rounded-lg shadow p-6" key={i}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </h3>
              </div>
              <div
                className={`p-2 ${
                  stat.name === "Resolution Rate"
                    ? "bg-green-100"
                    : "bg-indigo-100"
                } rounded-lg`}
              >
                <span
                  className={`${
                    stat.name === "Resolution Rate"
                      ? "text-green-600"
                      : "text-indigo-600"
                  }`}
                >
                  {stat.icon}
                </span>
              </div>
            </div>
            {stat.chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
