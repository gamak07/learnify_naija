import React, { useState } from "react";
import Intro from "./Intro";
import Button from "../../components/Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AdvancedFilter from "./AdvancedFilter";

const Filters = () => {
  const [isActive, setIsActive] = useState("all");
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);

  const handleActiveFilter = (act) => {
    setIsActive(act);
  };

  const handleAdvanceFilterToggle = () => {
    setShowAdvanceFilter((prev) => !prev);
  };

  return (
    <>
      <div className="bg-white border-y border-gray-200 px-8 py-6">
        <Intro />
        <div className="flex mt-6 space-x-2">
          <Button
            onClick={() => handleActiveFilter("all")}
            className={`px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 ${
              isActive === "all"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none"
                : "bg-white"
            }`}
          >
            All Tickets
          </Button>
          <Button
            onClick={() => handleActiveFilter("open")}
            className={`px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 ${
              isActive === "open"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none"
                : "bg-white"
            }`}
          >
            Open
          </Button>
          <Button
            onClick={() => handleActiveFilter("progress")}
            className={`px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 ${
              isActive === "progress"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none"
                : "bg-white"
            }`}
          >
            In Progress
          </Button>
          <Button
            onClick={() => handleActiveFilter("pending")}
            className={`px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 ${
              isActive === "pending"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none"
                : "bg-white"
            }`}
          >
            Pending
          </Button>
          <Button
            onClick={() => handleActiveFilter("closed")}
            className={`px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 ${
              isActive === "closed"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none"
                : "bg-white"
            }`}
          >
            Closed
          </Button>
          <Button
            onClick={() => {
              handleActiveFilter("advanced");
              handleAdvanceFilterToggle();
            }}
            className={`flex items-center px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 ${
              isActive === "advanced"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none"
                : "bg-white"
            }`}
          >
            Advanced Filters
            <span className="ml-1 text-xs">
              {showAdvanceFilter ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </Button>
        </div>
      </div>

      {showAdvanceFilter && <AdvancedFilter />}
    </>
  );
};

export default Filters;
