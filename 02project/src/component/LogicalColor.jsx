import React, { useState } from 'react'

function LogicalColor() {

  const [color, setColor] = useState()

  const randomColor = () =>{
    const latters = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i< 6; i++){
color += latters[Math.floor(Math.random()* 16)]
    }
    return color
  }

  const colorPicker = () =>{
const myRandomColor = randomColor();
document.body.style.backgroundColor = myRandomColor;
  }
  return (
    <div >
      <button onClick={colorPicker} className='bg-green-700 py-2 px-3 rounded-lg text-white'>clickme{color}</button>
    </div>
  )
}

export default LogicalColor