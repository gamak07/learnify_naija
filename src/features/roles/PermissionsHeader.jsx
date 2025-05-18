import React from "react";
import Button from "../../components/Button";
import { FaTimes } from "react-icons/fa";

const PermissionsHeader = ({ setShowPermissions }) => {
  return (
    <div className="px-4 border-b border-gray-200 pb-4 mb-4 sm:px-6">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-medium">Administrator Permissions</h2>
        <div
          className="ml-3 h-7 flex items-center"
          onClick={setShowPermissions}
        >
          <Button className="rounded-md text-gray-400 cursor-pointer hover:text-gray-500">
            <FaTimes className="text-xl" />
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Configure permissions for this role. Changes will affect all users with
        this role.
      </p>
    </div>
  );
};

export default PermissionsHeader;
