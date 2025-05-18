import React from "react";
import RolesList from "./RolesList";
import Pagination from '../../components/Pagination'

const roles = [
  {
    roleName: "Administrator",
    description: "Full access to all system features and settings",
    users: 5,
  },
  {
    roleName: "Teacher",
    description: "Access to create and manage courses, assignments, and student grades",
    users: 124,
  },
  {
    roleName: "Student",
    description: "Access to view courses, complete assignments, and track progress",
    users: 3542,
  },
  {
    roleName: "Parent",
    description: "Access to view child progress, communicate with teachers",
    users: 1876,
  },
  {
    roleName: "Content Manager",
    description: "Create and manage educational content across the platform",
    users: 12,
  },
  {
    roleName: "Support Staff",
    description: "Handle support tickets and assist users with platform issues",
    users: 10,
  },
];

const RolesTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Role Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Users
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <RolesList roles={roles} />
      </table>
      <Pagination />
    </div>
  );
};

export default RolesTable;
