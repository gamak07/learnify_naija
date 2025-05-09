import React from "react";
import Pagination from "../../components/Pagination";
import { FaSort } from "react-icons/fa";
import TicketsList from "./TicketsList";

const tickets = [
  {
    ticketID: "#1001",
    title: "Login issue on mobile app",
    requester: "John Smith",
    assignedTo: "Dayo Ayorinde",
    status: "Open",
    priority: "high",
    created: "2025-05-01",
    updated: "2025-05-04",
  },
  {
    ticketID: "#1002",
    title: "Password reset not working",
    requester: "Curry Amanda",
    assignedTo: "Ridwan Hassan",
    status: "In Progress",
    priority: "high",
    created: "2025-05-20",
    updated: "2025-05-24",
  },
  {
    ticketID: "#1003",
    title: "Feature request: Dark mode",
    requester: "Ayobami Damola",
    assignedTo: "Unassigned",
    status: "New",
    priority: "medium",
    created: "2025-05-11",
    updated: "2025-05-12",
  },
  {
    ticketID: "#1004",
    title: "Feature request: Dark mode",
    requester: "Nick Pope",
    assignedTo: "Dayo Ayorinde",
    status: "Open",
    priority: "low",
    created: "2025-05-12",
    updated: "2025-05-21",
  },
  {
    ticketID: "#1005",
    title: "Account verification failed",
    requester: "Kukoyi Temiloluwa",
    assignedTo: "Ridwan Hassan",
    status: "Closed",
    priority: "medium",
    created: "2025-05-10",
    updated: "2025-05-11",
  },
  {
    ticketID: "#1006",
    title: "Billing information incorrect",
    requester: "Alabi Christiana",
    assignedTo: "Ridwan Hassan",
    status: "Open",
    priority: "high",
    created: "2025-05-01",
    updated: "2025-05-06",
  },
  {
    ticketID: "#1007",
    title: "Cannot upload profile picture",
    requester: "Arinola Mujeebah",
    assignedTo: "Unassigned",
    status: "New",
    priority: "low",
    created: "2025-05-11",
    updated: "2025-05-18",
  },
  {
    ticketID: "#1008",
    title: "API integration documentation",
    requester: "Sam Harry",
    assignedTo: "Ridwan Hassan",
    status: "In Progress",
    priority: "medium",
    created: "2025-05-11",
    updated: "2025-05-14",
  },
  {
    ticketID: "#1009",
    title: "Export data functionality broken",
    requester: "Adeyemi Rofus",
    assignedTo: "Ridwan Hassan",
    status: "Open",
    priority: "high",
    created: "2025-05-20",
    updated: "2025-05-31",
  },
  {
    ticketID: "#1010",
    title: "Email notifications not received",
    requester: "Sadiq Usman",
    assignedTo: "Dayo Ayorinde",
    status: "Closed",
    priority: "medium",
    created: "2025-05-01",
    updated: "2025-05-08",
  },
];
const Tickets = () => {
  return (
    <div className="px-8 pb-8">
      <div className="bg-white rounded-lg shadow">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">All Tickets</h2>
          <div className="flex items-center text-sm text-gray-500">
            <span>Showing 1-10 of 38 tickets</span>
          </div>
        </div>
        <div className="overflow-x-auto min-w-full">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10"
                >
                  <input type="checkbox" className="h-4 w-4 text-indigo-600" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>Ticket id</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>title</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>requester</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>assigned to</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>status</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>priority</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>created</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <p>updated</p>
                    <span className="ml-1 text-gray-400">
                      <FaSort />
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <TicketsList tickets={tickets} />
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Tickets;
