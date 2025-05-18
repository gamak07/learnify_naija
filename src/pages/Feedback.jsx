import React from "react";
import Intro from "../features/feedback/Intro";
import FeedbackHeader from "../features/feedback/FeedbackHeader";
import FeedbacksTable from "../features/feedback/FeedbacksTable";

const Feedback = () => {
  return (
    <div className="p-6">
      <Intro />
      <FeedbackHeader />
      <FeedbacksTable />
    </div>
  );
};

export default Feedback;
