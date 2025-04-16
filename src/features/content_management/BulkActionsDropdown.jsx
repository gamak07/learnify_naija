import React, { useRef } from "react";
import { FaFileExport, FaToggleOn, FaTrashAlt } from "react-icons/fa";
import useClickHandler from "../../hooks/useClick";

const BulkActionsDropdown = ({onClose}) => {

    const modalRef = useRef(null)
    useClickHandler(modalRef, onClose)

  return (
    <div className="absolute mt-1 left-0 bg-white ring-1 ring-gray-300 z-50 rounded-md shadow-lg w-56" ref={modalRef}>
      <div className="py-1">
        <div className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
          <span className="text-red-500"><FaTrashAlt /></span> Delete Selected
        </div>
       
        <div className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
          <span className="text-blue-500"><FaFileExport /></span> Export Selected
        </div>
      </div>
    </div>
  );
};

export default BulkActionsDropdown;
