import React from "react";
import { FaDownload } from "react-icons/fa";
import DailyActivity from "./user_activity/DailyActivity";
import WeeklyActivity from "./user_activity/WeeklyActivity";
import MonthlyActivity from "./user_activity/MonthlyActivity";
import YearlyActivity from "./user_activity/YearlyActivity";

const UserActivityChart = ({activeTab}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium text-gray-900">
          User Activity Timeline
        </h4>
        <div className="text-gray-400 cursor-pointer hover:text-gray-500">
          <FaDownload />
        </div>
      </div>
      {activeTab === 'daily' && <DailyActivity />}
      {activeTab === 'weekly' && <WeeklyActivity />}
      {activeTab === 'monthly' && <MonthlyActivity />}
      {activeTab === 'yearly' && <YearlyActivity />}
    </div>
  );
};

export default UserActivityChart;
