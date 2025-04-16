import React, { useState } from "react";
import UsersList from "./UsersList";
import Pagination from "../../components/Pagination";

const users = [
  {
    userID: "LN001",
    fullName: "Chioma Eze",
    userType: "Student",
    email: "chiomaeze@email.com",
    phone: "08012345678",
    status: "Active",
    registrationDate: "2024-01-05",
  },
  {
    userID: "LN002",
    fullName: "Mr. Tunde Bello",
    userType: "Teacher",
    email: "tbello@email.com",
    phone: "08023456789",
    status: "Inactive",
    registrationDate: "2023-11-12",
  },
  {
    userID: "LN003",
    fullName: "Mrs. Amina Yusuf",
    userType: "Parent",
    email: "aminayusuf@email.com",
    phone: "08123456789",
    status: "Active",
    registrationDate: "2024-03-18",
  },
  {
    userID: "LN004",
    fullName: "Emeka Okafor",
    userType: "Student",
    email: "emeka.okafor@email.com",
    phone: "08034567891",
    status: "Inactive",
    registrationDate: "2024-02-10",
  },
  {
    userID: "LN005",
    fullName: "Ms. Sandra Obi",
    userType: "Teacher",
    email: "sandra.obi@email.com",
    phone: "08045678912",
    status: "Active",
    registrationDate: "2024-04-01",
  },
  {
    userID: "LN006",
    fullName: "Uche Nnaji",
    userType: "Student",
    email: "uchen@email.com",
    phone: "08056789123",
    status: "Pending",
    registrationDate: "2023-12-20",
  },
  {
    userID: "LN007",
    fullName: "Mrs. Kemi Adeyemi",
    userType: "Parent",
    email: "kemi.adeyemi@email.com",
    phone: "08167891234",
    status: "Active",
    registrationDate: "2024-01-25",
  },
  {
    userID: "LN008",
    fullName: "Samuel John",
    userType: "Student",
    email: "samueljohn@email.com",
    phone: "08178912345",
    status: "Active",
    registrationDate: "2024-03-01",
  },
  {
    userID: "LN009",
    fullName: "Blessing Etim",
    userType: "Teacher",
    email: "blessing.etim@email.com",
    phone: "09012345678",
    status: "Inactive",
    registrationDate: "2023-10-10",
  },
  {
    userID: "LN010",
    fullName: "John Okoro",
    userType: "Student",
    email: "john.okoro@email.com",
    phone: "08011223344",
    status: "Active",
    registrationDate: "2024-02-15",
  },
  {
    userID: "LN011",
    fullName: "Mrs. Fatima Musa",
    userType: "Parent",
    email: "fatima.musa@email.com",
    phone: "07022334455",
    status: "Pending",
    registrationDate: "2023-11-29",
  },
  {
    userID: "LN012",
    fullName: "Adeola Adebayo",
    userType: "Teacher",
    email: "adeola.adebayo@email.com",
    phone: "08133445566",
    status: "Active",
    registrationDate: "2024-04-05",
  },
  {
    userID: "LN013",
    fullName: "Ibrahim Lawal",
    userType: "Student",
    email: "ibrahim.lawal@email.com",
    phone: "08044556677",
    status: "Inactive",
    registrationDate: "2024-01-09",
  },
  {
    userID: "LN014",
    fullName: "Ngozi Nwachukwu",
    userType: "Teacher",
    email: "ngozi.nwa@email.com",
    phone: "09055667788",
    status: "Active",
    registrationDate: "2024-03-22",
  },
  {
    userID: "LN015",
    fullName: "Mr. Felix Omokaro",
    userType: "Parent",
    email: "felix.omokaro@email.com",
    phone: "07066778899",
    status: "Active",
    registrationDate: "2024-04-12",
  },
];

const Users = () => {
  const [selectedUserIDs, setSelectedUserIDs] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIDs = users.map((user) => user.userID);
      setSelectedUserIDs(allIDs);
    } else {
      setSelectedUserIDs([]);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm mx-6 mb-8">
      <div className="overflow-x-auto">
        <table className="min-w-[1200px] w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedUserIDs.length === users.length}
                    className="h-4 w-4 text-blue-600 rounded cursor-pointer border-gray-300"
                  />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                USER ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                FULL NAME
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                USER TYPE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                EMAIL
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                PHONE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                STATUS
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                REGISTRATION DATE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <UsersList
              users={users}
              setSelectedUserIDs={setSelectedUserIDs}
              selectedUserIDs={selectedUserIDs}
            />
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Users;
