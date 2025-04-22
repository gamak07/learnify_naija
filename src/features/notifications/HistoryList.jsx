// NotificationRow.jsx
import React from "react";
import {
  FaEnvelope,
  FaMobileAlt,
  FaSms,
  FaBell,
  FaEllipsisH,
  FaEye,
  FaEdit,
  FaCopy,
  FaTrashAlt,
  FaDownload,
} from "react-icons/fa";

const iconMap = {
  Email: <FaEnvelope className="text-gray-600" />,
  Push: <FaMobileAlt className="text-gray-600" />,
  SMS: <FaSms className="text-gray-600" />,
  "In-app": <FaBell className="text-gray-600" />,
};

const statusStyles = {
  Sent: "bg-green-100 text-green-800",
  Scheduled: "bg-blue-100 text-blue-800",
  Draft: "bg-gray-100 text-gray-600",
  Failed: "bg-red-100 text-red-800",
};

const HistoryList = ({
  id,
  title,
  channels,
  audience,
  scheduled,
  status,
  metrics,
  showMenu,
  setShowMenu
}) => {
  const isOpen = showMenu === id
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
        {id}
      </td>
      <td className="px-4 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
        {title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          {channels.map((c) => (
            <span key={c}>{iconMap[c]}</span>
          ))}
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
        {audience}
      </td>
      <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
        {scheduled || "–"}
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
        {metrics
          ? `${metrics.opened.toLocaleString()} / ${metrics.delivered.toLocaleString()}`
          : "–"}
      </td>
      <td className="relative px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        <button
          className="p-1 hover:text-gray-700"
          onClick={() => setShowMenu(isOpen ? null : id)}
        >
          <FaEllipsisH />
        </button>
        {showMenu === id && (
          <ul className="absolute z-50 w-48 right-13 rounded-md shadow-lg bg-white py-1">
            <li className="w-full font-semibold text-left px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-gray-100">
              <span className="mr-3">
                <FaEye />
              </span>
              View Details
            </li>
            <li className="w-full font-semibold text-left px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-gray-100">
              <span className="mr-3">
                <FaEdit />
              </span>
              Edit
            </li>
            <li className="w-full font-semibold text-left px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-gray-100">
              <span className="mr-3">
                <FaCopy />
              </span>
              Duplicate
            </li>
            <li className="w-full font-semibold text-left px-4 py-2 text-sm text-red-600 flex items-center hover:bg-red-50">
              <span className="mr-3">
                <FaTrashAlt />
              </span>
              Delete
            </li>
            <li className="w-full font-semibold text-left px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-gray-100">
              <span className="mr-3">
                <FaDownload />
              </span>
              Export
            </li>
          </ul>
        )}
      </td>
    </tr>
  );
};

export default HistoryList;
