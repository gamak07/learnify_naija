import React from "react";

const analytics = [
  {
    title: "View Analytics",
    description: "Access to view platform analytics",
  },
  {
    title: "Export Reports",
    description: "Ability to export analytics reports",
  },
  {
    title: "Detailed Analytics",
    description: "Access to detailed user and content analytics",
  },
];

const AnalyticsPermission = () => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium pb-2 mb-3 border-b border-gray-200">
        Analytics
      </h3>
      <div className="space-y-3">
        {analytics.map((analytic, i) => (
          <div className="flex items-start" key={i}>
            <input type="checkbox" className="h-4 w-4 " />
            <div className="ml-3 text-sm">
              <label className="font-medium cursor-pointer">
                {analytic.title}
              </label>
              <p className="text-gray-500 text-xs mt-1">
                {analytic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPermission;
