import './App.css'
import { useState } from 'react'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from './features/Users'
//test

function App() {

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [newUsername, setNewUsername] = useState("")

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)

  return (
    <div className="App">
      <div className='displayUsers' >
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, userName }))}>Add User</button>
      </div>

      <div className='displayUsers' >
        {userList.map((user, index) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.userName}</h2>
              <input type='text' placeholder='New Username' onChange={(e) => setNewUsername(e.target.value)}
              />
              <button onClick={() => dispatch(updateUsername({ id: user.id, userName: newUsername }))}>Update Username</button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
