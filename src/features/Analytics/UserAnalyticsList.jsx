import React from "react";
import Button from "../../components/Button";

const UserAnalyticsList = ({ users }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                JS
              </div>
              <div className="ml-4 text-sm font-medium text-gray-900">
                {user.name}
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{user.email}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{user.lastActive}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{user.sessions}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{user.avgDuration}min</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Button className="text-indigo-600 cursor-pointer whitespace-nowrap hover:text-indigo-900">
              View Details
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserAnalyticsList;
