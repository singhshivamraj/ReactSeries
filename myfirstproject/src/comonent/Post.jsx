import React, { useState } from 'react'


function Post() {
const [count, setCount] = useState(0)
const Add = () =>{
  if(count < 100){

    setCount(count + 1)
  }
  
} 
  const subtarct = () =>{
    if(count > 0){
  
      setCount(count - 1)
    }
  }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Add}>Add</button>
        <button onClick={subtarct}>sub</button>
    </div>
  )
}

export default Post