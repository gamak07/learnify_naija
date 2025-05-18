import React, { useState } from "react";
import Button from "../../components/Button";
import { FaEllipsisV, FaReply, FaTrashAlt } from "react-icons/fa";
import FeedbackDetails from "./FeedbackDetails";

const FeedbacksList = ({ feedbacks }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {feedbacks.map((feed, i) => (
        <tr className="hover:bg-gray-50" key={i}>
          <td className="px-6 py-4">
            <input type="checkbox" className="w-4 h-4" />
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900">{feed.feedback}</div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <img
                src="/images/aisha.jpg"
                alt="pic"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">
                  {feed.user}
                </div>
                <div className="text-xs text-gray-500">{feed.email}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900 whitespace-nowrap">
              {feed.date}
            </div>
          </td>
          <td className="px-6 py-4">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs capitalize ${
                feed.status === "published"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {feed.status}
            </span>
          </td>
          <td className="flex items-center gap-2 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Button
              className="text-indigo-600 cursor-pointer hover:text-indigo-900"
              onClick={handleShowModal}
            >
              <FaReply />
            </Button>
            <Button className="text-red-600 cursor-pointer hover:text-red-900">
              <FaTrashAlt />
            </Button>
          </td>
        </tr>
      ))}
      {showModal && <FeedbackDetails setShowModal={setShowModal} />}
    </tbody>
  );
};

export default FeedbacksList;
