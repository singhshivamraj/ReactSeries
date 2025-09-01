import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useTimer} from 'use-timer'

function App() {
  const {time, start, pause, reset, status} = useTimer()
  // const [count, setCount] = useState(0)

  return (
    <>
   <div>
     <h1 className='bg-gray-500 text-white py-3 px-3 text-lg'>Time: {time}</h1>
   </div>
   <div className='mt-3 '>
     <button className='bg-green-700 py-3 px-3 rounded-xl text-white text-xl ' onClick={start}> Start</button>
     <button className='bg-red-500 py-3 px-3 rounded-xl text-white text-xl ml-3' onClick={pause}>stop</button>
     <button className='bg-red-500 py-3 px-3 rounded-xl text-white text-xl ml-3' onClick={reset}>reset</button>
   </div>
    </>
  )
}

export default App
