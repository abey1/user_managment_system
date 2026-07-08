import React from 'react'

const UserForm = () => {
  return (
        <form className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>Add User</h2>
            <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input type='text' id='name' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500' />
            </div>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                <input type='email' id='email' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500' />
            </div>
         
            <button type='submit' className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600'>Add User</button>
        </form>
  )
}

export default UserForm