// CreateRole.jsx
import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import Button from "../../components/Button";

const CreateRole = ({ setShowCreateModal }) => {
  const target = document.getElementById("create-role");
  if (!target) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000]">
      <div className="bg-white w-1/3 rounded-lg">
        <div>
          <div className="flex items-start justify-between w-full px-6 pt-6">
            <h3 className="text-lg leading-6 font-medium">Create New Role</h3>
            <Button
              className="text-gray-400 cursor-pointer hover:text-gray-500"
              onClick={() => setShowCreateModal(false)}
            >
              <FaTimes />
            </Button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Role Name</label>
              <input
                type="text"
                className="mt-1 block w-full border-none rounded-md px-4 py-3 bg-gray-100 outline-0 focus:ring focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter role name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                rows="3"
                className="mt-1 block w-full border-none rounded-md px-4 py-3 bg-gray-100 outline-0 focus:ring focus:ring-indigo-500 sm:text-sm"
                placeholder="Describe the purpose of the role"
              ></textarea>
            </div>

            <div>
              <p className="block text-sm font-medium mb-2">Base Permissions</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded-md focus:ring-2"
                  />
                  <label className="ml-2 block text-sm">View Dashboard</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded-md focus:ring-2"
                  />
                  <label className="ml-2 block text-sm">Edit Own Profile</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded-md focus:ring-2"
                  />
                  <label className="ml-2 block text-sm">View Content</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-6 py-3 flex bg-gray-50 mt-3">
            <Button className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white text-gray-700 px-3 py-2 text-base font-medium cursor-pointer hover:bg-gray-50">
              Cancel
            </Button>
            <Button className="w-full inline-flex justify-center rounded-md border  text-white bg-indigo-600 px-3 py-2 text-base font-medium cursor-pointer hover:bg-indigo-700">
              Create Role
            </Button>
          </div>
        </div>
      </div>
    </div>,
    target
  );
};

export default CreateRole;
