import React from "react";
import { FaChevronRight, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Support Center</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and respond to customer support tickets
        </p>
        <div className="flex mt-2 items-center space-x-1 text-sm text-gray-500">
          <p
            className="hover:text-indigo-600 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Dashboard
          </p>
          <span className="text-xs mx-1">
            <FaChevronRight />
          </span>
          <p className="text-gray-700">Support Center</p>
        </div>
      </div>
      <div className="">
        <Button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-400">
          <span className="mr-2">
            <FaFilter />
          </span>
          <p>Bulk Actions</p>
        </Button>
      </div>
    </div>
  );
};

export default Intro;
