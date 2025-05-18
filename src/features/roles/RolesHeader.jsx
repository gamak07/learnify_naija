import React, { useState } from "react";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import Button from "../../components/Button";
import CreateRole from "./CreateRole";

const RolesHeader = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleCreateModal = () => {
    setShowCreateModal((prev) => !prev);
    console.log('working');
    
  };
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search roles..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border-none bg-gray-100 outline-0 text-sm focus:ring-2 focus:ring-indigo-500"
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
      </div>
      <Button
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors whitespace-nowrap cursor-pointer"
        onClick={handleCreateModal}
      >
        <FaShieldAlt className="mr-2" /> Create Role
      </Button>
      {showCreateModal && <CreateRole setShowCreateModal={setShowCreateModal} />}
    </div>
  );
};

export default RolesHeader;
