import React, { useState } from "react";
import Button from "../../components/Button";
import { FaArrowDown, FaArrowUp, FaMinus, FaTrashAlt } from "react-icons/fa";
import TicketDetails from "./TicketDetails";

const TicketsList = ({ tickets }) => {
  const [showDetails, setShowDetails] = useState(null);
  const [showParameters, setShowParameters] = useState({
    id: null,
    title: null,
    requester: null,
    assigned: null,
    status: null,
    priority: null,
    created: null,
    updated: null,
  });

  const handleDetailsToggle = (
    ticketId,
    title,
    requester,
    assigned,
    status,
    priority,
    created,
    updated
  ) => {
    setShowDetails((prev) => (prev === ticketId ? null : ticketId));
    setShowParameters({
      id: ticketId,
      title,
      requester,
      assigned,
      status,
      priority,
      created,
      updated,
    });
  };
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tickets.map((ticket) => (
        <tr
          className="cursor-pointer hover:bg-gray-50"
          key={ticket.ticketID}
          onClick={() =>
            handleDetailsToggle(
              ticket.ticketID,
              ticket.title,
              ticket.requester,
              ticket.assignedTo,
              ticket.status,
              ticket.priority,
              ticket.created,
              ticket.updated
            )
          }
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <input type="checkbox" className="h-4 w-4 text-indigo-600" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {ticket.ticketID}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {ticket.title}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {ticket.requester}
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap text-sm ${
              ticket.assignedTo === "Unassigned"
                ? "text-gray-400 italic"
                : "text-gray-500"
            }`}
          >
            {ticket.assignedTo}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                ticket.status === "Open"
                  ? "bg-blue-100 text-blue-800"
                  : ticket.status === "In Progress"
                  ? "bg-yellow-100 text-yellow-800"
                  : ticket.status === "New"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {ticket.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div
              className={`flex items-center text-sm capitalize ${
                ticket.priority === "high"
                  ? "text-red-600"
                  : ticket.priority === "low"
                  ? "text-blue-600"
                  : ticket.priority === "medium"
                  ? "text-yellow-600"
                  : ""
              }`}
            >
              <span className="mr-1 text-xs">
                {ticket.priority === "high" ? (
                  <FaArrowUp />
                ) : ticket.priority === "low" ? (
                  <FaArrowDown />
                ) : ticket.priority === "medium" ? (
                  <FaMinus />
                ) : (
                  ""
                )}
              </span>
              {ticket.priority}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {ticket.created}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {ticket.updated}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Button className="text-red-600 cursor-pointer hover:text-red-900">
              <FaTrashAlt />
            </Button>
          </td>
        </tr>
      ))}
      {showDetails && <TicketDetails showParameters={showParameters} />}
    </tbody>
  );
};

export default TicketsList;
