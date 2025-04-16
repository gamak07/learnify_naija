import React, { useRef } from "react";
import Button from "../../components/Button";
import { FaExclamationTriangle } from "react-icons/fa";
import useClickHandler from "../../hooks/useClick";

const DeleteUserModal = ({ onClose, nameToDelete }) => {
  const modalRef = useRef(null);
  useClickHandler(modalRef, onClose);
  return (
    <div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white rounded-lg shadow-xl"
      ref={modalRef}
    >
      <div className="flex gap-4 p-6">
        <span className="h-10 w-10 text-red-600 bg-red-100 rounded-full flex items-center justify-center">
          <FaExclamationTriangle />
        </span>
        <div>
          <h1 className="text-lg leading-6 font-medium text-gray-900">
            Delete User
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Are you sure you want to delete user "{nameToDelete}"? This action
            cannot be undone.
          </p>
        </div>
      </div>
      <div className="flex items-center bg-gray-50 justify-end gap-4 p-6 rounded-b-lg">
        <Button
          onClick={onClose}
          className="bg-white rounded-lg px-6 py-3 border border-gray-300 hover:bg-gray-50 font-semibold"
        >
          Cancel
        </Button>
        <Button className="bg-red-600 text-white  rounded-lg px-6 py-3 font-semibold hover:bg-red-800">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteUserModal;
