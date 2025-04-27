import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password,  setPasword] = useState('')

    // ei ta sudhu data take pathanar jonno 
    const{setUser} = useContext(UserContext) // This is set the provide set user in UserContextProvider.jsx

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input  type='text' 
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       placeholder='username' />
        {" "}
      <input type='text' 
       value={password}
       onChange={(e) => setPasword(e.target.value)}
       placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
