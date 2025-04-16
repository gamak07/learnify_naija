import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Button from "../../components/Button";
import DeleteUserModal from "./DeleteUserModal";

const UsersList = ({ users, selectedUserIDs, setSelectedUserIDs }) => {
  const [showModal, setShowModal] = useState(false);
  const [nameToDelete, setNameToDelete] = useState(null);

  const handleShowModal = (name) => {
    setShowModal((prev) => !prev);
    setNameToDelete(name);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNameToDelete(null);
  };

  const handleCheck = (userID, checked) => {
    if (checked) {
      setSelectedUserIDs((prev) => [...prev, userID]);
    } else {
      setSelectedUserIDs((prev) => prev.filter((id) => id !== userID));
    }
  };
  return (
    <>
      {users.map((user, i) => (
        <tr key={i} className="hover:bg-gray-50">
          {/* Checkbox for selection */}
          <td className="px-6 py-4 whitespace-nowrap">
            <input
              type="checkbox"
              checked={selectedUserIDs.includes(user.userID)}
              onChange={(e) => handleCheck(user.userID, e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded cursor-pointer border-gray-300"
            />
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {user.userID}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 flex items-center gap-2 whitespace-nowrap">
            <span>
              <img
                src="/images/aisha.jpg"
                className="h-10 w-10 rounded-full object-cover"
                alt={user.fullName}
              />
            </span>
            {user.fullName}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <p
              className={`px-2 rounded-full text-xs font-semibold leading-5 inline-flex ${
                user.userType === "Teacher"
                  ? "bg-purple-100 text-purple-800"
                  : user.userType === "Student"
                  ? "bg-green-100 text-green-800"
                  : user.userType === "Parent"
                  ? "bg-yellow-100 text-yellow-800"
                  : ""
              }`}
            >
              {user.userType}
            </p>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {user.email}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {user.phone}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <p
              className={`px-2 rounded-full text-xs font-semibold leading-5 inline-flex ${
                user.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : user.status
                  ? "bg-red-100 text-red-800"
                  : ""
              }`}
            >
              {user.status}
            </p>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {user.registrationDate}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <div className="flex items-center">
              <Button className="text-indigo-600">
                <FaEye />
              </Button>
              <Button
                className="ml-2 text-red-600"
                onClick={() => handleShowModal(user.fullName)}
              >
                <IoTrashOutline />
              </Button>
            </div>
          </td>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm  z-50">
              <DeleteUserModal
                nameToDelete={nameToDelete}
                onClose={handleCloseModal}
              />
            </div>
          )}
        </tr>
      ))}
    </>
  );
};

export default UsersList;
