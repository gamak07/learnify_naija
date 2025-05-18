import React from "react";

const systems = [
  {
    title: "View Settings",
    description: "Access to view system settings",
  },
  {
    title: "Edit Settings",
    description: "Access to modify system settings",
  },
  {
    title: "Backup System",
    description: "Ability to create system backups",
  },
  {
    title: "Restore System",
    description: "Ability to restore system from backups",
  },
];

const SystemPermissions = () => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium pb-2 mb-3 border-b border-gray-200">
        System Settings
      </h3>
      <div className="space-y-3">
        {systems.map((system, i) => (
          <div className="flex items-start" key={i}>
            <input type="checkbox" className="h-4 w-4 " />
            <div className="ml-3 text-sm">
              <label className="font-medium cursor-pointer">
                {system.title}
              </label>
              <p className="text-gray-500 text-xs mt-1">
                {system.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemPermissions;
