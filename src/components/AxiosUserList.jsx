import React from 'react'
import { useState, useEffect } from 'react'
import ReusableButton from './ReusableButton'
import axios from 'axios'
import './styles.css'

const AxiosUserList = () => {
  // Initializing the users state with an empty array
  const [users, setUsers] = useState([])

  // Store the ID of the user we select 
  const [selectedUser, setSelectedUser] = useState(null)

   // Store info about the selected user 
   const [selectedUserInfo, setSelectedUserInfo] = useState(null)

  const deleteUser = (index) => {
    const newUsers = users.filter((user, i) => i !== index)
    setUsers(newUsers)
  }

  const selectUser = (id) => {
    setSelectedUser(id)
    getUserInfo(id)
  }

  const getUserInfo = (id) => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
    .then(response => {
      console.log(response)
      setSelectedUserInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

// We are going to load users from the fakestoreapi using axios and useEffect
// useEffect makes the request to the fakestoreapi ONE time when the page loads


  useEffect(() => {
    axios.get('https://fakestoreapi.com/users/')
    .then(response => {

    // We want to log the response to make sure it works 
    console.log(response)

    setUsers(response.data)

})
.catch(error => {
  console.log(error)
})

  }, [])

  return (
    <div className='mainbody'>
      <h1>List of Users</h1>

      { selectedUser && 
        <div>
          <h3>Selected User</h3>
          <p>{selectedUser}</p>
        </div>
      }

{ selectedUserInfo && 
        <div className='card'>
          <h3>Selected User</h3>

          {/* Pretend it is a card */}
          <p>{selectedUserInfo.name.firstname}</p>
          <p>{selectedUserInfo.name.lastname}</p>
          <p>{selectedUserInfo.email}</p>
        </div>
      }

      <h3>Users</h3>

      { users.map((user, index) => 
        <div key={index}>
           <p>{user.name.firstname}</p>

          <ReusableButton handleClick={() => deleteUser(index)} title="Delete User"/>
          <br />
          <ReusableButton handleClick={() => selectUser(user.id)} title="Select User"/>

        </div>
      )}
    </div>
  )
}

export default AxiosUserList


// {/* Selecting the user without a button */}
// <button onClick={() => setSelectedUser(user.id)}>Third Button</button>