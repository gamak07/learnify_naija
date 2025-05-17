import React from "react";
import { FaDownload } from "react-icons/fa";
import DailyChart from "./learning_progress/DailyChart";
import WeeklyChart from "./learning_progress/WeeklyChart";
import MonthlyChart from "./learning_progress/MonthlyChart";
import YearlyChart from "./learning_progress/YearlyChart";

const LearningProgress = ({ activeTab }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200  p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium text-gray-900">Learning Progress</h4>
        <div className="text-gray-400 cursor-pointer hover:text-gray-500">
          <FaDownload />
        </div>
      </div>
      {activeTab === "daily" && <DailyChart />}
      {activeTab === "weekly" && <WeeklyChart />}
      {activeTab === "monthly" && <MonthlyChart />}
      {activeTab === "yearly" && <YearlyChart />}
    </div>
  );
};

export default LearningProgress;
