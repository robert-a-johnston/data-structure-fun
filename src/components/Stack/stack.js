import React, { useState } from 'react'
import './stack.css'

export default function Stack() {
  const [number, setNumber] = useState()
  const [numberDelete, setNumberDelete] = useState()
  const [arrayOne, setArrayOne] = useState([])
  let index = 0
 

  function insertArray(value) {
    if(value) {
    const addArray = [...arrayOne, value]
    setArrayOne(addArray)
  
    console.log(addArray)}
  }

 
  function deleteValueFromArrayByIndex(value) {
    console.log('value', value)
    const removeArray = [...arrayOne]
    removeArray.splice(value, 1)
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
      <input
        type="number"
        name="number"
        value={numberDelete}
        onChange={ e => setNumberDelete(e.target.value)}
        />
      <button
      onClick={() =>{
        deleteValueFromArrayByIndex(numberDelete)
      }}>delete
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
