import React from "react";

const users = [
  {
    title: "Create Users",
    description: "Ability to create new user accounts",
  },
  {
    title: "Edit Users",
    description: "Ability to modify user information",
  },
  {
    title: "Delete Users",
    description: "Ability to remove users from the platform",
  },
  {
    title: "Suspend Users",
    description: "Ability to temporarily restrict user access",
  },
  {
    title: "Assign Roles",
    description: "Ability to assign roles to users",
  },
];

const UserPermissions = () => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium pb-2 mb-3 border-b border-gray-200">
        Users Management
      </h3>
      <div className="space-y-3">
        {users.map((user, i) => (
          <div className="flex items-start" key={i}>
            <input type="checkbox" className="h-4 w-4 " />
            <div className="ml-3 text-sm">
              <label className="font-medium cursor-pointer">
                {user.title}
              </label>
              <p className="text-gray-500 text-xs mt-1">
                {user.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPermissions;
