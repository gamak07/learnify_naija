import React from "react";
import Intro from "../features/Analytics/Intro";
import Stats from "../features/Analytics/Stats";
import Visualization from "../features/Analytics/Visualization";

const Analytics = () => {
  return (
    <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Intro />
      <Stats />
      <Visualization />
      <div></div>
      <div></div>
    </div>
  );
};

export default Analytics;
