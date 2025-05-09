import React from "react";
import {
  FaChalkboardTeacher,
  FaUserCheck,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const Overview = () => {
  const stats = [
    {
      name: "Total Students",
      figure: 12413,
      icon: <FaUserGraduate />,
      bgColor: "bg-indigo-500",
    },
    {
      name: "Total Teachers",
      figure: 1243,
      icon: <FaChalkboardTeacher />,
      bgColor: "bg-green-500",
    },
    {
      name: "Total Parents",
      figure: 8372,
      icon: <FaUsers />,
      bgColor: "bg-yellow-500",
    },
    {
      name: "Active Users",
      figure: 5986,
      icon: <FaUserCheck />,
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="px-8 pt-10">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-sm opacity-70">
          Welcome back! Here's what's happening with Learnify Naija today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-4 mt-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className=" bg-white rounded-lg shadow-sm p-6 flex items-center gap-2.5"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${stat.bgColor}`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-sm opacity-70 font-semibold">{stat.name}</p>
              <p className="font-bold text-2xl">{stat.figure}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
