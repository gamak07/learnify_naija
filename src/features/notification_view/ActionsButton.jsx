import React from "react";
import Button from "../../components/Button";
import { FaCopy, FaEdit, FaTrashAlt } from "react-icons/fa";

const ActionsButton = () => {
  return (
    <div className="w-full bg-white rounded-md border-gray-200  flex items-center justify-between">
      <Button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium cursor-pointer hover:bg-gray-200 focus:outline-0 focus:ring-2 focus:ring-gray-500 whitespace-nowrap">
        Back to List
      </Button>
      <div className="flex gap-3">
        <Button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-100 flex items-center">
          <span className="mr-2">
            <FaTrashAlt />
          </span>
          <p>Delete</p>
        </Button>
        <Button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-200 flex items-center">
        <span className="mr-2">
            <FaCopy />
          </span>
          <p>Duplicate</p>
        </Button>
        <Button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-indigo-700 flex items-center">
        <span className="mr-2">
            <FaEdit />
          </span>
          <p>Edit</p>
        </Button>
      </div>
    </div>
  );
};

export default ActionsButton;
