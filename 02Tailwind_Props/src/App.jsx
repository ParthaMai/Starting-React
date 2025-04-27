import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    age : 21,
    Username: "Partha"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card channel="Hello Sir" someObj={myObj}  /> // pass the obj
    <Card username="Partha" btnText="Click me" />
    <Card username="Rahul" btnText="visit me" />
    <Card />
    </>
  )
}

export default App
