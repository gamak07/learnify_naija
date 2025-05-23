import React, { useState } from "react";
import Button from "../../components/Button";
import ContentApproval from "./ContentApproval";

const pendingContents = [
  {
    title: "Introduction to Calculus",
    type: "Video Lesson",
    author: "Mr. Adebayo",
    time: "2 hours ago",
  },
  {
    title: "Chemical Bonding",
    type: "Quiz",
    author: "Mrs. Nwosu",
    time: "5 hours ago",
  },
  {
    title: "Nigerian Literature",
    type: "Document",
    author: "Mr. Okafor",
    time: "1 day ago",
  },
];

const PendingContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

  const handleShowModal = (act) => {
    setAction(act);
    setShowModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAction(null);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Pending Content</h2>
        <Button className="text-indigo-600 text-sm font-medium hover:underline">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {pendingContents.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-xs opacity-70">
                {item.type} by {item.author}
              </p>
              <p className="text-xs opacity-50">{item.time}</p>
            </div>

            <div className="flex gap-2">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-4 rounded-lg text-xs cursor-pointer"
                onClick={() => handleShowModal("approve")}
              >
                Approve
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-4 rounded-lg text-xs cursor-pointer"
                onClick={() => handleShowModal("reject")}
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm  z-50">
          <ContentApproval action={action} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default PendingContent;
