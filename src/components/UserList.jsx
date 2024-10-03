import React, {useState} from 'react'
import ReusableButton from './ReusableButton'

// Functional Component 

// props is short for "properties" that allow you to pass information to a component 
// so the component can display or use that information 
// props = {} 


const UserList = (props) => {
    const [users, setUsers] = useState(props.users)
    const [selectedUser, setSelectedUser] = useState(null)

    const deleteUser = (index) => {
      // Filter method removes users from the list 
      const newUsers = users.filter((user, i) => i !== index)
      setUsers(newUsers)
    }

    const selectUser = (index) => {
        setSelectedUser(users[index])
      }


    return (
      <div>
        {/* <h3>Selected User</h3>
        <p>{selectedUser}</p> */}

        { selectedUser && 
            <div>
                <h3>Selected User</h3>
                <p>{selectedUser}</p>
            </div>
        }

        <h1>List of Users</h1>
        { users.map((user, index) => 
        <div key={index}>
            <p>{user}</p>


            <ReusableButton  title='Delete User' handleClick={() => deleteUser(index)}/>

            <br></br>

            <ReusableButton title='Select User' handleClick={() => selectUser(index)}/> 
        </div>
        
        )}
  
      </div>
    )
  }

UserList.defaultProps = {
    users: ["Jake Default", "Sally Default", "Sarah Default"]
  }

export default UserList


// // Class Component 
// import React, { Component } from 'react'

// export default class UserList extends Component {
//   // allowed to have their own variables 
//   render() {
//     return (
//       <div>UserList</div>
//     )
//   }
// }