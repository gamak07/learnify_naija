import React from "react";
import { FaClock, FaEye, FaMousePointer } from "react-icons/fa";
import { Link } from "react-router-dom";

const RelatedNotifications = () => {
  const related = [
    {
      name: "Winter Sale Promotion",
      date: new Date(
        Date.now() - 20 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      seen: 38.5,
      clicked: 15.2,
    },
    {
      name: "New Product Launch",
      date: new Date(
        Date.now() - 25 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      seen: 45.8,
      clicked: 22.8,
    },
    {
      name: "Summer Collection Preview",
      date: new Date(
        Date.now() + 29 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    },
  ];
  const curDate = new Date().toLocaleDateString();
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
      <h3 className="text-lg font-semibold mb-4">Related Notifications</h3>
      <div className="space-y-4">
        {related.map((related, i) => (
          <div className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium">{related.name}</h4>
              <span
                className={`${
                  related.date >= curDate
                    ? "bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full"
                    : "bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full"
                }`}
              >
                {related.date >= curDate ? "Sheduled" : "Past"}
              </span>
            </div>
            <div className="text-sm text-gray-500">{related.date}</div>
            <div className="flex items-center mt-2">
              {related.date <= curDate ? (
                <>
                  <div className="text-xs text-gray-500 mr-3 flex items-center">
                    <span className="mr-1">
                      <FaEye />
                    </span>
                    <p>{related.seen}%</p>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="mr-1">
                      <FaMousePointer />
                    </span>
                    <p>{related.clicked}%</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="mr-1">
                      <FaClock />
                    </span>
                    <p className="">Pending</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link
          to="/notifications"
          className="text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-800"
        >
          View All Notifications
        </Link>
      </div>
    </div>
  );
};

export default RelatedNotifications;
