import React, { useState } from "react";
import ContentsList from "./ContentsList";
import Pagination from "../../components/Pagination";

const contents = [
    {
      contentID: "CN001",
      title: "Introduction to Calculus",
      type: "videos",
      subject: "Mathematics",
      author: "Dr. Adebayo",
      status: "Published",
      creationDate: "2024-01-05",
    },
    {
      contentID: "CN002",
      title: "Chemical Bonding Explained",
      type: "documents",
      subject: "Chemistry",
      author: "Mrs. Nwosu",
      status: "Draft",
      creationDate: "2023-11-12",
    },
    {
      contentID: "CN003",
      title: "Basics of Newtonian Physics",
      type: "quizzes",
      subject: "Physics",
      author: "Mr. Okafor",
      status: "Under Review",
      creationDate: "2024-03-18",
    },
    {
      contentID: "CN004",
      title: "Shakespearean Literature",
      type: "interactive",
      subject: "English",
      author: "Ms. Okechukwu",
      status: "Published",
      creationDate: "2024-02-10",
    },
    {
      contentID: "CN005",
      title: "Geometry Essentials",
      type: "videos",
      subject: "Mathematics",
      author: "Mr. Tunde",
      status: "Draft",
      creationDate: "2024-04-01",
    },
    {
      contentID: "CN006",
      title: "Organic Reactions Overview",
      type: "documents",
      subject: "Chemistry",
      author: "Dr. Musa",
      status: "Under Review",
      creationDate: "2023-12-20",
    },
    {
      contentID: "CN007",
      title: "Modern Physics Concepts",
      type: "quizzes",
      subject: "Physics",
      author: "Prof. Adeyemi",
      status: "Published",
      creationDate: "2024-01-25",
    },
    {
      contentID: "CN008",
      title: "Interactive Grammar Workshop",
      type: "interactive",
      subject: "English",
      author: "Mrs. Eze",
      status: "Draft",
      creationDate: "2024-03-01",
    },
    {
      contentID: "CN009",
      title: "Algebraic Expressions Simplified",
      type: "videos",
      subject: "Mathematics",
      author: "Ms. Obi",
      status: "Published",
      creationDate: "2023-10-10",
    },
    {
      contentID: "CN010",
      title: "Thermodynamics Quiz",
      type: "quizzes",
      subject: "Physics",
      author: "Mr. John",
      status: "Under Review",
      creationDate: "2024-02-15",
    },
    {
      contentID: "CN011",
      title: "Poetic Devices in Literature",
      type: "documents",
      subject: "English",
      author: "Mrs. Fatima",
      status: "Draft",
      creationDate: "2023-11-29",
    },
    {
      contentID: "CN012",
      title: "Statistical Methods",
      type: "interactive",
      subject: "Mathematics",
      author: "Dr. Adeola",
      status: "Published",
      creationDate: "2024-04-05",
    },
    {
      contentID: "CN013",
      title: "Introduction to Modern Chemistry",
      type: "videos",
      subject: "Chemistry",
      author: "Mr. Ibrahim",
      status: "Under Review",
      creationDate: "2024-01-09",
    },
    {
      contentID: "CN014",
      title: "Physics in Everyday Life",
      type: "documents",
      subject: "Physics",
      author: "Mrs. Ngozi",
      status: "Published",
      creationDate: "2024-03-22",
    },
    {
      contentID: "CN015",
      title: "Creative Writing Techniques",
      type: "interactive",
      subject: "English",
      author: "Mr. Felix",
      status: "Draft",
      creationDate: "2024-04-12",
    },
  ];
  

const Contents = () => {
  const [selectedContentIDs, setSelectedContentIDs] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIDs = contents.map((content) => content.contentID);
      setSelectedContentIDs(allIDs);
    } else {
      setSelectedContentIDs([]);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm mx-6 mb-8">
      <div className="w-full">
        <table className="max-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedContentIDs.length === contents.length}
                    className="h-4 w-4 text-blue-600 rounded cursor-pointer border-gray-300"
                  />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                TITLE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                TYPE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                SUBJECT
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500"
              >
                AUTHOR
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
                CREATION DATE
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
            <ContentsList
              contents={contents}
              setSelectedContentIDs={setSelectedContentIDs}
              selectedContentIDs={selectedContentIDs}
            />
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Contents;
