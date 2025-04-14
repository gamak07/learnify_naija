import React from "react";
import Overview from "../features/dashboard/Overview";
import TopSubjects from "../features/dashboard/TopSubjects";
import TopStudents from "../features/dashboard/TopStudents";
import RecentActivity from "../features/dashboard/RecentActivity";
import UserGrowth from "../features/dashboard/UserGrowth";
import PendingContent from "../features/dashboard/PendingContent";
import SupportTickets from "../features/dashboard/SupportTickets";

const Dashboard = () => {
  return (
    <>
      <Overview />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 mt-6">
        <TopSubjects />
        <TopStudents />
        <RecentActivity />
      </div>
      <UserGrowth />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6 px-8">
        <PendingContent />
        <SupportTickets />
      </div>
    </>
  );
};

export default Dashboard;
