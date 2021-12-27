import React, { useState } from 'react'
import StackInfo from '../info/StackInfo'
import './stack.css'

export default function Stack() {
  const [number, setNumber] = useState()
  const [arrayOne, setArrayOne] = useState([])
  let index = 0
 

  function insertArray(value) {
    if(value && arrayOne.length < 10) {
    const addArray = [value, ...arrayOne]
    setArrayOne(addArray)
    console.log(addArray)}
  }

 
  function popValueFromStack() {
    if(arrayOne.length > 0) {
      const removeArray = [...arrayOne]
      removeArray.shift()
      setArrayOne(removeArray)
    } 

  }
  return (
    <div>
      <h1>Create a Stack</h1>
      <div className='button-container'>
        {/* Add value to stack */}
        <input
          type="number"
          name="number"
          placeholder='0'
          value={number}
          onChange={ e => setNumber(e.target.value)}
          />
        <button
        onClick={() =>{
          insertArray(number)
        }}>Push
        </button>
        <br/>
        
        {/* delete value */}
        <button
        onClick={() =>{
          popValueFromStack()
        }}>Pop
        </button>
      </div> 

      <div className='array'>
        <div className='array-index-value'>
          <h2>index</h2>
          <h2>value</h2>
        </div>
        {arrayOne.map((value) => 
          <div 
            className='array-index-value'
            key={index++}>
            <h2 className='index'>{index}</h2>
            <h2 className='value'>{value}</h2>
          </div>)}
      </div>
      <h1>Stack Information</h1>
      <div><StackInfo/></div> 
    </div>
  )
}
