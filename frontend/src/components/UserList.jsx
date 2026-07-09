import React from 'react'
import { useEffect } from 'react'
import userService from '../services/userService'
import DisplayRow from './DisplayRow'
import EditRow from './EditRow'
const UserList = ({ users , isLoading, error, handleDelete, handleEdit, setEditUser, editUser}) => {
  
function handleSetEditUser(user){
  setEditUser(user)
}

    if (isLoading) {
        return <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>User List</h2>
            <div className='animate-pulse'>
                <div className='h-10 bg-gray-200 rounded w-full'></div>
            </div>
        </div>
    }
    if (users.length === 0) {
        return <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>No users found</h2>
        </div>
    }
    if (error) {
        return <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>Error: {error}</h2>
        </div>
    }
  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>User List</h2>
        <ul className='space-y-2'>
            {users.map((user) => (
              editUser && user.id === editUser.id?
                <EditRow key={user.id} user={user}  setEditUser={setEditUser} handleEdit={handleEdit}/>
              :
                <DisplayRow key={user.id} user={user} handleDelete={handleDelete} handleSetEditUser={handleSetEditUser}  />
            ))}
        </ul>
    </div>
  )
}

export default UserList