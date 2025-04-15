import React, { useState } from "react";
import Button from "../../components/Button";
import TicketRespond from "./TicketRespond";

const tickets = [
  {
    title: "Cannot access quiz results",
    type: "Bug",
    user: "Student: Chioma Eze",
    priority: "High",
    status: "New",
  },
  {
    title: "Video playback issues",
    type: "Technical",
    user: "Teacher: Mr. Bello",
    priority: "Medium",
    status: "In Progress",
  },
  {
    title: "Account verification problem",
    type: "Account",
    user: "Parent: Mrs. Adeyemi",
    priority: "Low",
    status: "Pending",
  },
];

const badgeColors = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-green-100 text-green-800",
  New: "bg-blue-100 text-blue-600",
  "In Progress": "bg-purple-100 text-purple-800",
  Pending: "bg-gray-100 text-gray-800",
};

const SupportTickets = () => {
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);

  const handleOpenModal = (type, user) => {
    setOpenModal((prev) => !prev);
    setType(type);
    setUser(user);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Support Tickets</h2>
        <button className="text-indigo-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{ticket.title}</h3>
              <p className="text-xs opacity-70">
                {ticket.type} • {ticket.user}
              </p>
              <div className="flex gap-2 mt-1 text-xs font-medium">
                <span
                  className={`px-2 py-0.5 rounded-full ${
                    badgeColors[ticket.priority]
                  }`}
                >
                  {ticket.priority}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full ${
                    badgeColors[ticket.status]
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
            </div>

            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm"
              onClick={() => handleOpenModal(ticket.type, ticket.user)}
            >
              Respond
            </Button>
          </div>
        ))}
      </div>
      {openModal && (
        <TicketRespond
          type={type}
          user={user}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default SupportTickets;
