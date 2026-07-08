import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>User Management System</h1>
            <ul className='flex space-x-4'>
                <li><a href='/'>Home</a></li>
                <li><a href='/users'>Users</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar