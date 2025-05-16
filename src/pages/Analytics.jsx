import React from "react";
import Intro from "../features/Analytics/Intro";
import Stats from "../features/Analytics/Stats";
import Visualization from "../features/Analytics/Visualization";
import AnalyticsOptions from "../features/Analytics/AnalyticsOptions";
import Pagination from '../components/Pagination'

const Analytics = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <Intro />
      <Stats />
      <Visualization />
      <AnalyticsOptions />
      <Pagination />
    </div>
  );
};

export default Analytics;
