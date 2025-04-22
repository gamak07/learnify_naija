import React from "react";
import Button from "../../components/Button";
import { FaClock, FaPaperPlane, FaSave } from "react-icons/fa";

const ActionButtons = ({ scheduleOption }) => {
  return (
    <div className="flex items-center justify-between pt-2">
      <Button className="flex items-center gap-2 px-4 py-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 cursor-pointer">
        <span>
          <FaSave />
        </span>{" "}
        Save as Draft
      </Button>
      <Button className="flex items-center gap-2 px-4 py-4 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 cursor-pointer">
        {scheduleOption === "later" ? (
          <>
            <span>
              <FaClock />
            </span>{" "}
            <p>Schedule</p>
          </>
        ) : (
          <>
            <span>
              <FaPaperPlane />
            </span>{" "}
            <p>Send Now</p>
          </>
        )}
      </Button>
    </div>
  );
};

export default ActionButtons;
