import React, { useState } from 'react'
import './stack.css'

export default function Stack() {
  const [number, setNumber] = useState()
  const [arrayOne, setArrayOne] = useState([])
  let index = 0
 

  function insertArray(value) {
    if(value) {
    const addArray = [value, ...arrayOne]
    setArrayOne(addArray)
  
    console.log(addArray)}
  }

 
  function deleteValueFromArray() {
    const removeArray = [...arrayOne]
    console.log('1', removeArray)
    removeArray.shift()
    console.log(removeArray)
    setArrayOne(removeArray)
  }

  return (
    <div>
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
        <div>index</div>
        <div>value</div>
      </div>
      {arrayOne.map((value) => 
        <div 
          className='array-index-value'
          key={index++}>
          <div className='index'>{index}</div>
          <div className='value'>{value}</div>
        </div>)}
    
    </div>
         
  </div>

  )
}
