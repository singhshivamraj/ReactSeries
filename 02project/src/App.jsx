import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorPicker from './component/ColorPicker'
import LogicalColor from './component/LogicalColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorPicker/>
     <LogicalColor/>
    </>
  )
}

export default App
