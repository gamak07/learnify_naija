import React from "react";
import { FaDownload } from "react-icons/fa";
import DailyEngagement from "./content_engagement/DailyEngagement";
import WeeklyEngagement from "./content_engagement/WeeklyEngagement";
import MonthlyEngagement from "./content_engagement/MonthlyEngagement";
import YearlyEngagement from "./content_engagement/YearlyEngagement";

const ContentEngagementChart = ({ activeTab }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium text-gray-900">
          Content Engagement
        </h4>
        <div className="text-gray-400 cursor-pointer hover:text-gray-500">
          <FaDownload />
        </div>
      </div>
      {activeTab === "daily" && <DailyEngagement />}
      {activeTab === "weekly" && <WeeklyEngagement />}
      {activeTab === "monthly" && <MonthlyEngagement />}
      {activeTab === "yearly" && <YearlyEngagement />}
    </div>
  );
};

export default ContentEngagementChart;
