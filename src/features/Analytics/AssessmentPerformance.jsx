import React from "react";
import { FaDownload } from "react-icons/fa";
import DailyPerformance from "./assessment_performance/DailyPerformance";
import WeeklyPerformance from "./assessment_performance/WeeklyPerformance";
import MonthlyPerformance from "./assessment_performance/MonthlyPerformance";
import YearlyPerformance from "./assessment_performance/YearlyPerformance";

const AssessmentPerformance = ({ activeTab }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium text-gray-900">
          Assessment Performance
        </h4>
        <div className="text-gray-400 cursor-pointer hover:text-gray-500">
          <FaDownload />
        </div>
      </div>
      {activeTab === "daily" && <DailyPerformance />}
      {activeTab === "weekly" && <WeeklyPerformance />}
      {activeTab === "monthly" && <MonthlyPerformance />}
      {activeTab === "yearly" && <YearlyPerformance />}
    </div>
  );
};

export default AssessmentPerformance;
