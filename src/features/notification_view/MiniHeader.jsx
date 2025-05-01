import React from "react";

const MiniHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
        Sent
      </span>
    </div>
  );
};

export default MiniHeader;
