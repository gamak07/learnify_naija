import React from "react";
import Button from "../../components/Button";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Button
          className="flex items-center text-gray-500 hover:text-indigo-600 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span className="mr-1">
            <FaChevronLeft />
          </span>
          <p>Back to Notifications</p>
        </Button>
        <span className="text-gray-400">/</span>
        <span className="text-gray-700">Notification Details</span>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Notification Details
        </h1>
        <p className="text-gray-600">
          View and analyze notification performance
        </p>
      </div>
    </div>
  );
};

export default Intro;
