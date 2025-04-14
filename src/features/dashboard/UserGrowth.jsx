import React, { useState } from "react";
import Button from "../../components/Button";
import UserGrowthSixMonthLineChart from "./UserGrowthSixMonthLineChart";
import UserGrowthLastYearLineChart from "./UserGrowthLastYearLineChart";
import UserGrowthAllTimePieChart from "./UserGrowthAllTimePieChart";

const UserGrowth = () => {
  const [isActive, setIsActive] = useState("last_6");
  const handleActiveTab = (act) => {
    setIsActive(act);
  };
  return (
    <div className="mx-8 mt-8 p-6 shadow-sm bg-white rounded-lg">
      <div className="flex items-cente justify-between">
        <h1 className="text-lg font-semibold">User Growth</h1>
        <div className="flex items-center space-x-2">
          <Button
            className={`px-3 py-1 text-xs text-gray-700 cursor-pointer rounded-lg bg-gray-200 ${
              isActive === "last_6" ? "bg-indigo-100 text-indigo-700" : ""
            }`}
            onClick={() => handleActiveTab("last_6")}
          >
            Last 6 Months
          </Button>
          <Button
            className={`px-3 py-1 text-xs text-gray-700 cursor-pointer rounded-lg bg-gray-200 ${
              isActive === "last_year" ? "bg-indigo-100 text-indigo-700" : ""
            }`}
            onClick={() => handleActiveTab("last_year")}
          >
            Last Year
          </Button>
          <Button
            className={`px-3 py-1 text-xs text-gray-700 cursor-pointer rounded-lg bg-gray-200 ${
              isActive === "all_time" ? "bg-indigo-100 text-indigo-700" : ""
            }`}
            onClick={() => handleActiveTab("all_time")}
          >
            All Time
          </Button>
        </div>
      </div>

      <div className="">
        {isActive === "last_6" && <UserGrowthSixMonthLineChart />}
        {isActive === "last_year" && <UserGrowthLastYearLineChart />}
        {isActive === "all_time" && <UserGrowthAllTimePieChart />}
      </div>
    </div>
  );
};

export default UserGrowth;
