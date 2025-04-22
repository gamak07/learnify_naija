// components/NotificationAnalytics.jsx
import React from "react";
import NotificationChart from "./NotificationChart";

const mockData = [
  { date: "Apr 11", sent: 5400, delivered: 5300, failed: 100 },
  { date: "Apr 12", sent: 5200, delivered: 5100, failed: 100 },
  { date: "Apr 13", sent: 6900, delivered: 6700, failed: 200 },
  { date: "Apr 14", sent: 6200, delivered: 6000, failed: 150 },
  { date: "Apr 15", sent: 5800, delivered: 5700, failed: 100 },
  { date: "Apr 16", sent: 6000, delivered: 5900, failed: 100 },
  { date: "Apr 17", sent: 5600, delivered: 5500, failed: 100 },
];

const stats = [
  { title: "Total Sent", value: "35,721", change: "+12.3%", isPositive: true },
  { title: "Delivery Rate", value: "98.2%", change: "+0.5%", isPositive: true },
  { title: "Open Rate", value: "42.7%", change: "-1.2%", isPositive: false },
  { title: "Click Rate", value: "18.3%", change: "+2.7%", isPositive: true },
];

const NotificationAnalytics = () => {
  return (
    <div className="bg-white mx-6 my-8 p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Notification Analytics
      </h2>

      <NotificationChart data={mockData} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
            <div className="mt-1 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <p
                className={`text-sm flex font-medium ml-2 ${
                  stat.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationAnalytics;
