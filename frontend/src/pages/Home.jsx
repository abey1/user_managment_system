import React from 'react'
import UserForm from '../components/UserForm'
import UserList from '../components/UserList'
import { useState, useEffect } from 'react'
import userService from '../services/userService'

const Home = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [editUser, setEditUser] = useState(null)

  async function fetchUsers() {
    const response = await userService.getUsers()
    setUsers(response.data)
  }


  async function handleDelete(id) {
    const confirm = window.confirm('Are you sure you want to delete this user?')
    if (!confirm) return
    try {
      const response = await userService.deleteUser(id)
      setUsers(users.filter(user => user.id !== id))
      await fetchUsers()
    } catch (error) {
      setError(error.response.data.error)
      console.log(error)
    }
  }

  async function handleEdit(id, formData) {
    try {
      await userService.updateUser(id, { name: formData.name, email: formData.email })
      setEditUser(null)
      await fetchUsers()
    } catch (error) {
      setError(error.response.data.error)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <UserForm users={users} setUsers={setUsers} fetchUsers={fetchUsers} setIsLoading={setIsLoading} setError={setError} />
      <UserList users={users} isLoading={isLoading} error={error} handleDelete={handleDelete} handleEdit={handleEdit} setEditUser={setEditUser} editUser={editUser} />
    </>
  )
}

export default Home