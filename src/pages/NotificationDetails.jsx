import React, { useState } from "react";
import Header from "../features/NotificationDetails.jsx/Header";
import Info from "../features/NotificationDetails.jsx/Info";
import Nav from "../features/NotificationDetails.jsx/Nav";
import DeliveryStatus from "../features/NotificationDetails.jsx/DeliveryStatus";
import AudienceBreakdown from "../features/NotificationDetails.jsx/AudienceBreakdown";
import ChannelPerformance from "../features/NotificationDetails.jsx/ChannelPerformance";
import EngagementTrend from "../features/NotificationDetails.jsx/EngagementTrend";
import QuickActions from "../features/NotificationDetails.jsx/QuickActions";
import RelatedNotifications from "../features/NotificationDetails.jsx/RelatedNotifications";
import PerformanceSummary from "../features/NotificationDetails.jsx/PerformanceSummary";

export const NotificationDetails = () => {
  const [isActive, setIsActive] = useState("overview");
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-2/3">
            <Info />
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <Nav isActive={isActive} setIsActive={setIsActive} />
              </div>
              <div className="p-6">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <DeliveryStatus />
                    <AudienceBreakdown />
                  </div>
                  <ChannelPerformance />
                  <EngagementTrend />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <PerformanceSummary />
            <QuickActions />
            <RelatedNotifications />
          </div>
        </div>
      </div>
    </>
  );
};
