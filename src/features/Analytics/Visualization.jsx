import React, { useState } from "react";
import VisualizationHeader from "./VisualizationHeader";
import UserActivityChart from "./UserActivityChart";
import ContentEngagementChart from "./ContentEngagementChart";
import LearningProgress from "./LearningProgress";
import AssessmentPerformance from "./AssessmentPerformance";

const Visualization = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-8">
      <VisualizationHeader
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserActivityChart />
        <ContentEngagementChart />
        <LearningProgress />
        <AssessmentPerformance />
      </div>
    </div>
  );
};

export default Visualization;
