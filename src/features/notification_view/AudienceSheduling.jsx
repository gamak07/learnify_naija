import React from "react";

const AudienceSheduling = () => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Audience & Scheduling
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Target Audience
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Audience Type</p>
              <p className="text-sm text-gray-800 font-medium">All Users</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Recipients</p>
              <p className="text-sm text-gray-800 font-medium">12, 543</p>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-600">Applied Filters</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <p className="text-xs py-1 px-2 rounded-full bg-gray-200 text-gray-700">
                  Active in last 30 days
                </p>
                <p className="text-xs py-1 px-2 rounded-full bg-gray-200 text-gray-700">
                  All subscription types
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Scheduling Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Schedule Type</p>
              <p className="text-sm text-gray-800 font-medium">One-time</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Sent At</p>
              <p className="text-sm text-gray-800 font-medium">
                2025-04-17 09:00 AM
              </p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Timezone</p>
              <p className="text-sm text-gray-800 font-medium">
                UTC-05:00 (Eastern Time)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudienceSheduling;
