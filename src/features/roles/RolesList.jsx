import React, { useState } from "react";
import Button from "../../components/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Permissions from "./Permissions";

const RolesList = ({ roles }) => {
  const [showPermissions, setShowPermissions] = useState(null);
  const handlePermissions = (role) => {
    setShowPermissions(role);
  };
  return (
    <>
      <tbody className="bg-white divide-gray-200">
        {roles.map((role, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <Button
                className="font-medium text-indigo-600 cursor-pointer whitespace-nowrap hover:text-indigo-900"
                onClick={() => handlePermissions(role)}
              >
                {role.roleName}
              </Button>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm max-w-lg truncate">
                {role.description}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">{role.users}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <div className="flex space-x-2">
                <Button className="p-2 text-blue-600 rounded-full cursor-pointer whitespace-nowrap hover:bg-blue-100">
                  <FaEdit />
                </Button>
                <Button className="p-2 text-red-600 rounded-full cursor-pointer whitespace-nowrap hover:bg-red-100">
                  <FaTrashAlt />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {showPermissions && (
        <Permissions
          setShowPermissions={() => setShowPermissions(null)}
          showPermissions={showPermissions}
        />
      )}
    </>
  );
};

export default RolesList;
