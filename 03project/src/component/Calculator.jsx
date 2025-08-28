import React, { useState } from 'react'

function Calculator() {

    // const [count, setCount] = useState('')

    // const calculatorApp = ( value) =>{
    //     setCount(count + value)
    // }
    // const mainCalculator = () =>{
    //     setCount(eval(count).toString())
    
    // }

    // const deleteButton = () =>{
    //    setCount('')
    // }


    const [count, setCount] = useState('')
    const [isresult, setIsResult] = useState(false)

    const calculatorApp =(value) =>{
if(isresult){
    setCount(value)
    setIsResult(false)
}else{
    setCount(count + value)
}
    }

    const mainCalculator = () =>{
        try {
            setCount(eval(count).toString())
            setIsResult(true)
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
 <>
  <h1>Calculator</h1>

  <div className='gap-10 flex items-center mt-5'>
<button onClick={() => calculatorApp('0')} className='bg-green-500 py-3 px-3 rounded-lg '>0</button>
<button onClick={() => calculatorApp('1')} className='bg-green-500 py-3 px-3 rounded-lg '>1</button>
<button onClick={() => calculatorApp('2')}   className='bg-green-500 py-3 px-3 rounded-lg '>2</button>
<button onClick={() => calculatorApp('3')}    className='bg-green-500 py-3 px-3 rounded-lg '>3</button>
<button onClick={() => calculatorApp('4')}   className='bg-green-500 py-3 px-3 rounded-lg '>4</button>

  </div>

  <div className='gap-10 flex items-center mt-5'>
    <button onClick={() => calculatorApp('5')}  className='bg-green-500 py-3 px-3 rounded-lg '>5</button>
    <button onClick={() => calculatorApp('6')}  className='bg-green-500 py-3 px-3 rounded-lg '>6</button>
    <button onClick={() => calculatorApp('7')}  className='bg-green-500 py-3 px-3 rounded-lg '>7</button>
    <button onClick={() => calculatorApp('8')}  className='bg-green-500 py-3 px-3 rounded-lg '>8</button>
    <button onClick={() => calculatorApp('9')}  className='bg-green-500 py-3 px-3 rounded-lg '>9</button>
  </div>
 
 <div className=' flex gap-10 mt-10'>
    <button onClick={() => calculatorApp('+')}  className='bg-green-500 py-3 px-3 rounded-lg '>+</button>
    <button onClick={() => calculatorApp('-')}  className='bg-green-500 py-3 px-3 rounded-lg '>-</button>
    <button onClick={() => calculatorApp('*')}  className='bg-green-500 py-3 px-3 rounded-lg '>*</button>
    <button onClick={mainCalculator} className='bg-green-500 py-3 px-3 rounded-lg '>=</button>
    {/* <button onClick={deleteButton} className='bg-green-500 py-3 px-3 rounded-lg '>AC</button> */}
 </div>

   <input
        type="text"
        value={count}
        readOnly
        placeholder="Calculate"
        className="w-60 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
      />
 
 
 
 
 </>
  
  )
}

export default Calculator