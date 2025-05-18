import React from "react";
import Button from "../../components/Button";
import { FaTimes } from "react-icons/fa";

const FeedbackDetails = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000]">
      <div className="bg-white w-full max-w-2xl px-8 pt-5 pb-4 rounded-lg">
        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Feedback Details
          </h3>
          <Button
            className="text-gray-400 cursor-pointer hover:text-gray-500"
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </Button>
        </div>

        {/* user info */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center mb-2">
            <img
              src="/images/aisha.jpg"
              alt="pic"
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div>
              <h4 className="text-sm font-medium text-gray-900">John Smith</h4>
              <p className="text-xs text-gray-500">john.smith@example.com</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Published
              </span>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-sm text-gray-800">
              The dashboard is not loading correctly on mobile devices. I'm
              experiencing significant lag and some elements are not displaying
              properly.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Submitted on 2025-05-16
            </p>
          </div>
        </div>

        {/* status */}
        <div className="mt-4 flex items-center">
          <label className="block text-sm font-medium text-gray-700 mr-3">
            Change Status:
          </label>
          <select className="py-2 px-3 text-base border border-gray-300 outline-none focus:border-2 focus:border-indigo-500 rounded-lg">
            <option value="">Published</option>
            <option value="">Queue</option>
          </select>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex justify-end gap-4">
          <Button className="inline-flex justify-center rounded-md border border-gray-300 bg-white text-gray-700 px-3 py-2 text-base font-medium cursor-pointer hover:bg-gray-50">
            Cancel
          </Button>
          <Button className="whitespace-nowrap inline-flex justify-center rounded-md border  text-white bg-indigo-600 px-3 py-2 text-base font-medium cursor-pointer hover:bg-indigo-700">
            Send Response
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
