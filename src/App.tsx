import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { userAdded } from './redux/usersSlice'

function App() {
  const [count, setCount] = useState(0)

  let usersState = useSelector( state => state.users)

  console.log("Users: ", usersState);

  const dispatch = useDispatch();

  const handleAddUser = () => {
    console.log('reached here 1 ....');
    
    const newUser = { username: 'giselle', age: 34}

    dispatch(
      userAdded(newUser)
    )
    
  }
  

  return (
    <div className="App">
      <button onClick={handleAddUser}>ADD NEW USER</button>
    </div>
  )
}

export default App
