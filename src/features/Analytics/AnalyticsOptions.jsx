import React, { useState } from "react";
import AnalyticsOptionHeader from "./AnalyticsOptionHeader";
import AnalyticsMiniHeader from "./AnalyticsMiniHeader";
import AnalyticsTable from "./AnalyticsTable";

const AnalyticsOptions = () => {
  const [activeTab, setActiveTab] = useState("user");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-8">
      <AnalyticsOptionHeader
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
      <AnalyticsMiniHeader />
      <AnalyticsTable activeTab={activeTab} />
      <div></div>
    </div>
  );
};

export default AnalyticsOptions;
