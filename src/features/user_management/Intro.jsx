import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="mb-8 mt-6 mx-6">
      <h1 className="text-2xl text-gray-800 font-bold">User Management</h1>
      <p className="text-gray-600 mt-1">
        Manage all users, their roles and permissions in the system
      </p>
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <Button>
          <Link to="/" className="hover:text-blue-600">
            Dashboard
          </Link>
        </Button>
        <span className="text-xs">
          <FaChevronRight />
        </span>
        <p className="text-gray-700">user management</p>
      </div>
    </div>
  );
};

export default Intro;
