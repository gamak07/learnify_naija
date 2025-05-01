import React from "react";
import { FaArrowLeft, FaCopy, FaEdit, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="flex items-center text-gray-700 cursor-pointer hover:text-blue-600 mr-6"
            onClick={() => navigate(-1)}
          >
            <Button className="mr-2">
              <FaArrowLeft />
            </Button>
            <span className="font-medium">Back to Notifications</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Notification Detail
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <Button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-sm flex items-center cursor-pointer whitespace-nowrap hover:bg-gray-50">
            <span>
              <FaCopy />
            </span>
            Duplicate
          </Button>
          <Button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-sm flex items-center cursor-pointer whitespace-nowrap hover:bg-gray-50">
            <span>
              <FaEdit />
            </span>
            Edit
          </Button>
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-sm flex items-center cursor-pointer whitespace-nowrap hover:bg-blue-700">
            <span>
              <FaPaperPlane />
            </span>
            Resend
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
