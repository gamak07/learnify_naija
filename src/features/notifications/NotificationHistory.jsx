import React from "react";
import HistoryHeader from "./HistoryHeader";
import History from "./History";

const NotificationHistory = () => {
  return (
    <div className="mx-6 mt-8 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Notification History
      </h2>
      <HistoryHeader />
      <History />
    </div>
  );
};

export default NotificationHistory;
