import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { editUser, removeUser, userAdded } from './redux/usersSlice'

function App() {
  const [count, setCount] = useState(0)

  let usersState = useSelector( state => state.users)

  console.log("Users: ", usersState);

  const dispatch = useDispatch();

  const handleAddUser = () => {
 
    const newUser = { id: 1, username: 'giselle', age: 34}

    dispatch(
      userAdded(newUser)
    )
    
  }

  const handleEditUser = () => {
    const updates = { id: 1, username: 'giselle', age: 34}

    dispatch(
      editUser(updates)
    )
  }

  const handleDeleteUser = () => dispatch(removeUser({id: 1}))
  

  return (
    <div className="App">
      <button onClick={handleAddUser}>ADD NEW USER</button>
      <button onClick={handleEditUser}>EDIT NEW USER</button>
      <button onClick={handleDeleteUser}>DELETE USER</button>
    </div>
  )
}

export default App
