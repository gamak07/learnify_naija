import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Button from "../../components/Button";
import { FaTimes } from "react-icons/fa";
import useClickHandler from "../../hooks/useClick";

const TicketRespond = ({ type, user, onClose }) => {
  const modalRef = useRef(null);

  useClickHandler(modalRef, onClose);
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm  z-50">
      <div
        className="w-[600px] bg-white rounded-lg shadow-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ref={modalRef}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Respond to ticket</h3>
          <Button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </Button>
        </div>
        <div className="p-4 bg-gray-50">
          <h4 className="font-medium mb-2">Cannot access quiz results</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">
                Category: <span>{type}</span>
              </p>
              <p className="text-gray-600">
                User: <span>{user}</span>
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <label htmlFor="" className="text-gray-600 mr-2">
                  Status:{" "}
                </label>
                <select
                  name=""
                  id=""
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="new">New</option>
                  <option value="progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
              <div className="flex items-center">
                <label htmlFor="" className="text-gray-600 mr-2">
                  Priority:{" "}
                </label>
                <select
                  name=""
                  id=""
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="new">High</option>
                  <option value="progress">Medium</option>
                  <option value="resolved">Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <textarea
            className="w-full h-32 p-3 border rounded-lg resize-none bg-white"
            placeholder="Type your response ..."
          ></textarea>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <Button
            className="px-4 py-2 rounded-lg text-gray-700 border hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button className="px-4 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
            Send Response
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("ticket-root")
  );
};

export default TicketRespond;
