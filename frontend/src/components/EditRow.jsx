import React from 'react'
import { useState } from 'react'

const EditRow = ({user, setEditUser, handleEdit}) => {
    const [formData, setFormData] = useState({name:user.name, email:user.email})

    function handleSubmit(e) {
        e.preventDefault()
        handleEdit(user.id, formData)
    }
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
   
  return (
    <li className='bg-gray-100 p-4 rounded-lg flex '>

        <form onSubmit={handleSubmit} className='flex'>
            <div className='flex flex-col space-y-2'>
            <input type="text" name="name" placeholder="Name" className='border border-gray-300 rounded-md p-2' value={formData.name} onChange={handleChange}  />
            <input type="email" name="email" placeholder="Email" className='border border-gray-300 rounded-md p-2' value={formData.email} onChange={handleChange}  />
            </div>
            
            <button className='bg-green-500 text-white px-4 py-2 rounded-md'  type="submit">Save</button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md' type="button" onClick={() => setEditUser(null)}>Cancel</button>
        </form>
    </li>
    
  )
}

export default EditRow