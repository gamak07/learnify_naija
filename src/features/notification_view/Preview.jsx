import React from "react";
import { FaBell } from "react-icons/fa";
import Button from "../../components/Button";

const Preview = () => {
  return (
    <div className="w-1/3 bg-gray-50 rounded-lg p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Preview</h4>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <FaBell />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-medium text-gray-900">New Feature Announcement</h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-3">
              We are excited to announce the launch of our new dashboard
              features! Starting today, you can access enhanced analytics,
              customizable widgets, and improved data visualization tools. Check
              out the new features by clicking the button below.
            </p>
            <div className="mt-2 items-center flex space-x-2">
              <Button className='px-3 py-1 bg-indigo-600 text-white text-xs rounded cursor-pointer whitespace-nowrap hover:bg-indigo-700'>View Details</Button>
              <Button className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded cursor-pointer whitespace-nowrap hover:bg-gray-200'>Dismiss</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
