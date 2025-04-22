import React from "react";
import Button from "../../components/Button";
import { FaBold, FaCode, FaItalic, FaLink, FaListUl } from "react-icons/fa6";

const MessageBody = () => {
  return (
    <div>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Message Body
      </label>
      <div className="border border-gray-300 rounded-lg">
        <div className="bg-gray-50 px-3 py-2 border-b border-gray-300 flex items-center space-x-2">
          <Button className="p-1 text-gray-600 rounded hover:bg-gray-200 cursor-pointer">
            <FaBold />
          </Button>
          <Button className="p-1 text-gray-600 rounded hover:bg-gray-200 cursor-pointer">
            <FaItalic />
          </Button>
          <Button className="p-1 text-gray-600 rounded hover:bg-gray-200 cursor-pointer">
            <FaLink />
          </Button>
          <Button className="p-1 text-gray-600 rounded hover:bg-gray-200 cursor-pointer">
            <FaListUl />
          </Button>
          <div className="h-4 w-0.25 bg-gray-300 mx-1"></div>
          <Button className="px-2 py-1 flex items-center gap-1 text-xs text-gray-600 rounded hover:bg-gray-200 cursor-pointer">
            <span>
              <FaCode />
            </span>{" "}
            Variables
          </Button>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Write your notification message here use {{firstName}} for personification"
          rows="5"
          className="w-full px-4 py-2 text-sm border-none focus:outline-0"
        ></textarea>
      </div>
    </div>
  );
};

export default MessageBody;
