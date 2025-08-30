import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor ]  = useState(false)

 const togglefunction =() =>{

  setColor(!color)
  document.body.style.backgroundColor = color ? 'white' : "pink"
  document.body.style.backgroundColor = color ? 'pink' : "white"
 }


  return (
    <>
     <div className='h-screen'>
      <button onClick={togglefunction}>click</button>
     </div>
    </>
  )
}

export default App
