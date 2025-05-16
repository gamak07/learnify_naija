import React from "react";
import UserAnalyticsTable from "./UserAnalyticsTable";
import ContentAnalyticsTable from "./ContentAnalyticsTable";
import AssessmentAnalyticsTable from "./AssessmentAnalyticsTable";
import SystemAnalyticsTable from "./SystemAnalyticsTable";

const AnalyticsTable = ({ activeTab }) => {
  return (
    <div className="overflow-x-auto w-full">
      {activeTab === "user" && <UserAnalyticsTable />}
      {activeTab === "content" && <ContentAnalyticsTable />}
      {activeTab === "assessment" && <AssessmentAnalyticsTable />}
      {activeTab === "system" && <SystemAnalyticsTable />}
    </div>
  );
};

export default AnalyticsTable;
