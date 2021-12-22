import React, { useState } from 'react'
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

 
  function deleteValueFromArray() {
    const removeArray = [...arrayOne]
    let valueRemoved =removeArray.shift()
    console.log(valueRemoved)
    setArrayOne(removeArray)
  }

  return (
  <div className='container'>
      <h1>Stack Information</h1>
      <div className='button-container'>
        {/* Add value to array */}
        <input
          type="number"
          name="number"
          value={number}
          onChange={ e => setNumber(e.target.value)}
          />
        <button
        onClick={() =>{
          insertArray(number)
        }}>Add
        </button>
        <br/>
        
        {/* delete value */}

        <button
        onClick={() =>{
          deleteValueFromArray()
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
         
  </div>

  )
}
