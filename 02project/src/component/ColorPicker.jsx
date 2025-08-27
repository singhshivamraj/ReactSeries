import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor]  = useState()



  return (
    <>
   <div className='mb-20' style={{backgroundColor: color}}>
   <button className='bg-red-500 py-3 px-3 rounded-lg gap-3 mr-3' onClick={() =>setColor("red")}>red</button>
   <button className='bg-gray-700 text-white py-3 px-3 rounded-lg gap-3 mr-3' onClick={() =>setColor("gray")}>gray</button>
   <button className='bg-black text-white py-3 px-3 rounded-lg gap-3 mr-3' onClick={() =>setColor("black")}>black</button>
   
   </div>
    </>
  )
}

export default ColorPicker