import React from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-700">Show</p>
        <select className="border border-gray-300 rounded-md text-sm cursor-pointer focus:outline-0 focus:ring-blue-500 focus:ring-2 px-3 py-2">
          <option value="">10</option>
          <option value="">25</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
        <p className="text-sm text-gray-700">Entries</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-700">Showing 11 to 12 of 12 entries</p>
        <div className="flex items-center">
          <Button className='px-2 py-2 border border-gray-300 text-gray-500 bg-white rounded-l-md hover:bg-gray-50'>
            <FaChevronLeft />
          </Button>
          <p className="px-4 py-1 border-y border-gray-300 text-gray-500 bg-white hover:bg-gray-50">1</p>
          <Button className='px-2 py-2 border border-gray-300 text-gray-500 bg-white rounded-r-md hover:bg-gray-50'>
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
