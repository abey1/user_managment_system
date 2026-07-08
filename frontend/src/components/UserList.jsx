import React from 'react'

const UserList = ({ users }) => {
  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>User List</h2>
        <ul className='space-y-2'>
            {users.map((user) => (
                <li key={user.id} className='bg-gray-100 p-4 rounded-lg'>
                    <h3 className='text-lg font-bold'>{user.name}</h3>
                    <p className='text-gray-600'>{user.email}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList