import React, { useState } from "react";
import {
  FaCube,
  FaEye,
  FaFileAlt,
  FaQuestionCircle,
  FaVideo,
} from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Button from "../../components/Button";
import DeleteContentModal from "./DeleteContentModal";

const ContentsList = ({
  contents,
  selectedContentIDs,
  setSelectedContentIDs,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [contentToDelete, setContentToDelete] = useState(null);

  const handleShowModal = (content) => {
    setShowModal((prev) => !prev);
    setContentToDelete(content);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNameToDelete(null);
  };

  const handleCheck = (contentID, checked) => {
    if (checked) {
      setSelectedContentIDs((prev) => [...prev, contentID]);
    } else {
      setSelectedContentIDs((prev) => prev.filter((id) => id !== contentID));
    }
  };

  return (
    <>
      {contents.map((content, i) => (
        <tr key={i} className="hover:bg-gray-50">
          {/* Checkbox for selection */}
          <td className="px-6 py-4 whitespace-nowrap">
            <input
              type="checkbox"
              checked={selectedContentIDs.includes(content.contentID)}
              onChange={(e) => handleCheck(content.contentID, e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded cursor-pointer border-gray-300"
            />
          </td>
          <td className="px-6 py-4 flex items-center gap-2 text-sm  text-gray-900 font-semibold whitespace-normal">
            <span
              className={`${
                content.type === "quizzes"
                  ? "text-purple-500"
                  : content.type === "documents"
                  ? "text-green-500"
                  : content.type === "videos"
                  ? "text-blue-500"
                  : content.type === "interactive"
                  ? "text-orange-500"
                  : ""
              }`}
            >
              {content.type === "videos" && <FaVideo />}
              {content.type === "documents" && <FaFileAlt />}
              {content.type === "quizzes" && <FaQuestionCircle />}
              {content.type === "interactive" && <FaCube />}
            </span>

            {content.title}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {content.type}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {content.subject}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {content.author}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <p
              className={`px-2 rounded-full text-xs font-semibold leading-5 inline-flex ${
                content.status === "Published"
                  ? "bg-green-100 text-green-800"
                  : content.status === "Draft"
                  ? "bg-gray-100 text-gray-800"
                  : content.status === "Under Review"
                  ? "bg-yellow-100 text-yellow-800"
                  : ""
              }`}
            >
              {content.status}
            </p>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {content.creationDate}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <div className="flex items-center">
              <Button className="text-indigo-600">
                <FaEye />
              </Button>
              <Button
                className="ml-2 text-red-600"
                onClick={() => handleShowModal(content.title)}
              >
                <IoTrashOutline />
              </Button>
            </div>
          </td>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm  z-50">
              <DeleteContentModal
                contentToDelete={contentToDelete}
                onClose={handleCloseModal}
              />
            </div>
          )}
        </tr>
      ))}
    </>
  );
};

export default ContentsList;
