import React from "react";

const UserAnalyticsList = ({ users }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className='px-6 py-4 whitespace-nowrap'>
            <div></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'></td>
          <td className='px-6 py-4 whitespace-nowrap'></td>
          <td className='px-6 py-4 whitespace-nowrap'></td>
          <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'></td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserAnalyticsList;
