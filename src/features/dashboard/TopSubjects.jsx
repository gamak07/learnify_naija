import React from "react";
import TopSubjectsBarChart from "./TopSubjectsBarChart";

const TopSubjects = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-lg font-semibold mb-4">TopSubjects</h1>
      <TopSubjectsBarChart />
    </div>
  );
};

export default TopSubjects;
