import React from 'react'

const RolesList = ({roles}) => {
  return (
    <tbody className='bg-white divide-gray-200'>
        {roles.map((role, i)=>(
            <tr key={i} className='hover:bg-gray-50'>
                
            </tr>
        ))}
    </tbody>
  )
}

export default RolesList