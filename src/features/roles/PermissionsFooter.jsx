import React from "react";
import Button from "../../components/Button";

const PermissionsFooter = () => {
  return (
    <div className="px-4 pt-4 border-t border-gray-200 sm:px-6">
      <div className="flex justify-end space-x-3">
        <Button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:opacity-80">
          Cancel
        </Button>
        <Button className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default PermissionsFooter;
