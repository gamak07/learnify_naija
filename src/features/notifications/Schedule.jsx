import React, { useState } from "react";
import ActionButtons from "./ActionButtons";

const Schedule = () => {
  const [scheduleOption, setScheduleOption] = useState("now");

  return (
    <>
      <div>
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Schedule
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="schedule"
              id="sendNow"
              value="now"
              onChange={() => setScheduleOption("now")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              checked={scheduleOption === "now"}
            />
            <label htmlFor="" className="ml-2 text-gray-700 text-sm">
              Send immediately
            </label>
          </div>
          <div className="flex items-center">
            <input
              name="schedule"
              type="radio"
              id="sendLater"
              value="later"
              onChange={() => setScheduleOption("later")}
              checked={scheduleOption === "later"}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="" className="ml-2 text-gray-700 text-sm">
              Schedule for later
            </label>
          </div>
        </div>

        {scheduleOption === "later" && (
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <input
                type="date"
                name=""
                id=""
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div>
              <input
                type="time"
                name=""
                id=""
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
          </div>
        )}
      </div>

      <ActionButtons scheduleOption={scheduleOption} />
    </>
  );
};

export default Schedule;
