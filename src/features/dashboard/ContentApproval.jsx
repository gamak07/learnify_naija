import React, { useRef } from "react";
import Button from "../../components/Button";
import useClickHandler from "../../hooks/useClick";

const ContentApproval = ({ action, onClose }) => {
  const actionType = action === "approve" ? "Approval" : "Rejection";
  const modalRef = useRef(null);

  useClickHandler(modalRef, onClose);
  return (
    <div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white rounded-lg shadow-xl p-6"
      ref={modalRef}
    >
      <h1 className="text-lg font-semibold mb-4">Confirm {actionType}</h1>
      <p className="mb-6">Are you sure you want to approve this content?</p>
      <div className="flex justify-end space-x-3">
        <Button
          className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Confirm Approval
        </Button>
      </div>
    </div>
  );
};

export default ContentApproval;
