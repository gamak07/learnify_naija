import React from "react";
import {
    FaArrowDown,
  FaArrowUp,
  FaChartBar,
  FaClock,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Active Users",
    icon: <FaUsers />,
    value: "24593",
    action: 12.5,
  },
  {
    id: 2,
    title: "Avg. Session Duration",
    icon: <FaClock />,
    value: "38min",
    action: 8.2,
  },
  {
    id: 3,
    title: "Course Completion",
    icon: <FaGraduationCap />,
    value: "76.4%",
    action: 4.1,
  },
  {
    id: 4,
    title: "Engagement Score",
    icon: <FaChartBar />,
    value: "8.7/10",
    action: 1.2,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, i) => (
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6 ">
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 ${
                  stat.id === 1
                    ? "bg-indigo-100"
                    : stat.id === 2
                    ? "bg-blue-100"
                    : stat.id === 3
                    ? "bg-green-100"
                    : stat.id === 4
                    ? "bg-purple-100"
                    : ""
                } rounded-md p-3`}
              >
                <span
                  className={`${
                    stat.id === 1
                      ? "text-indigo-600"
                      : stat.id === 2
                      ? "text-blue-600"
                      : stat.id === 3
                      ? "text-green-600"
                      : stat.id === 4
                      ? "text-purple-600"
                      : ""
                  } text-indigo-600 text-xl`}
                >
                  {stat.icon}
                </span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.title}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.id === 4 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {stat.id === 4 ? <FaArrowDown /> : <FaArrowUp />}
                      <span className="ml-2">{stat.action}%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
