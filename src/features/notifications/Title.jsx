import React from "react";

const Title = () => {
  return (
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter notification title"
          maxLength={100}
        />
        <span className="absolute right-3 top-1/2 text-xs transform -translate-y-1/2 text-gray-400">
          0/100
        </span>
      </div>
    </div>
  );
};

export default Title;
