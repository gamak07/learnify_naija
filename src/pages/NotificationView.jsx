import React from "react";
import Intro from "../features/notification_view/Intro";
import MiniHeader from "../features/notification_view/MiniHeader";
import NotificationInfo from "../features/notification_view/NotificationInfo";
import Preview from "../features/notification_view/Preview";
import AudienceSheduling from "../features/notification_view/AudienceSheduling";
import PerformanceMetrics from "../features/notification_view/PerformanceMetrics";
import ActionsButton from "../features/notification_view/ActionsButton";

const NotificationView = () => {
  return (
    <div className="p-6">
      <Intro />
      <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
        <MiniHeader />

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <NotificationInfo />
          <Preview />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
        <AudienceSheduling />
      </div>
      <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
        <PerformanceMetrics />
      </div>
      <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
        <ActionsButton />
      </div>
    </div>
  );
};

export default NotificationView;
