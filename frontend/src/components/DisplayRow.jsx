import React from 'react'

const DisplayRow = ({user, handleSetEditUser, handleDelete}) => {
  return (
    <li className='bg-gray-100 p-4 rounded-lg flex justify-between space-x-4'>
                    <h3 className='text-lg font-bold'>{user.name}</h3>
                    <p className='text-gray-600'>{user.email}</p>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => handleDelete(user.id)}>Delete</button>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => handleSetEditUser(user)}>Edit</button>
                </li>
  )
}

export default DisplayRow