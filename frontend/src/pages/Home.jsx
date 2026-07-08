import React from 'react'
import UserForm from '../components/UserForm'
import UserList from '../components/UserList'
import { useState } from 'react'
const Home = () => {
    const [users, setUsers] = useState([])
  return (
    <>
    <UserForm setUsers={setUsers}/>
    <UserList users={users}/>
    </>
  )
}

export default Home