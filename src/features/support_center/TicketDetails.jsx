import React from "react";
import ReactDOM from "react-dom";
import Button from "../../components/Button";
import {
  FaCheck,
  FaPaperclip,
  FaSmile,
  FaTag,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";

const TicketDetails = ({ showParameters }) => {
  console.log(showParameters);
  const { id, title, requester, assigned, status, priority, created, updated } =
    showParameters;

  return ReactDOM.createPortal(
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl transform translate-x-0 transition-transform duration-300 ease-in-out z-100">
      <div className="h-full flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Ticket {id}</h2>
          <Button className="text-gray-500 cursor-pointer hover:text-gray-700">
            <FaTimes />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <span
                className={`py-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 ${
                  status === "Open"
                    ? "bg-blue-100 text-blue-800"
                    : status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : status === "New"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {status}
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span>Created on {created}</span>
              <span className="mx-2">•</span>
              <span>Last updated on {updated}</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Ticket Details
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Requester</p>
                <p className="font-medium">{requester}</p>
              </div>
              <div>
                <p className="text-gray-500">Assigned To</p>
                <p className="font-medium">{assigned}</p>
              </div>
              <div>
                <p className="text-gray-500">Priority</p>
                <p
                  className={`font-medium capitalize ${
                    priority === "high"
                      ? "text-red-600"
                      : priority === "low"
                      ? "text-blue-600"
                      : priority === "medium"
                      ? "text-yellow-600"
                      : ""
                  }`}
                >
                  {priority}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium">Technical Support</p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Conversation
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    src="/images/aisha.jpg"
                    alt="user"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-sm font-medium text-gray-900">
                        {requester}
                      </h5>
                      <span className="text-xs text-gray-500">{created}</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      I'm having an issue with logging into the mobile app.
                      After entering my credentials, the app keeps loading
                      indefinitely. I've tried reinstalling the app but the
                      problem persists.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 ml-6">
                <div className="flex items-start">
                  <img
                    src="/images/oluwaseun.jpg"
                    alt="user"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-sm font-medium text-gray-900">
                        {assigned}
                      </h5>
                      <span className="text-xs text-gray-500">{updated}</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      I'm having an issue with logging into the mobile app.
                      After entering my credentials, the app keeps loading
                      indefinitely. I've tried reinstalling the app but the
                      problem persists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Add Response
            </h4>
            <textarea
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-0 focus:ring-indigo-50 focus:border-indigo-500"
              rows="4"
              placeholder="Type your response here..."
            ></textarea>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <Button className="p-2 text-gray-500 cursor-pointer hover:text-indigo-600">
                  <FaPaperclip />
                </Button>
                <Button className="p-2 text-gray-500 cursor-pointer hover:text-indigo-600">
                  <FaSmile />
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium whitespace-nowrap hover:bg-gray-50">
                  Save as Draft
                </Button>
                <Button className="px-3 py-1.5 bg-indigo-600 border text-white rounded-md text-sm font-medium whitespace-nowrap hover:bg-indigo-700">
                  Send Response
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <Button className="flex items-center px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium whitespace-nowrap hover:bg-gray-50">
                <span className="mr-1">
                  <FaUserPlus />
                </span>
                <span>Assign</span>
              </Button>
              <Button className="flex items-center px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium whitespace-nowrap hover:bg-gray-50">
                <span className="mr-1">
                  <FaTag />
                </span>
                <span>Tag</span>
              </Button>
            </div>
            <div>
              <Button className="flex items-center px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium whitespace-nowrap  hover:bg-gray-400">
                <span className="mr-1"><FaCheck /></span>
                <span>Resolve Ticket</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("ticket-details")
  );
};

export default TicketDetails;
