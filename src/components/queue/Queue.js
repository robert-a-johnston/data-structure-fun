import React, { useState } from 'react'
import QueueInfo from '../info/QueueInfo'
import './queue.css'

export default function Queue() {
  const [number, setNumber] = useState()
  const [arrayOne, setArrayOne] = useState([])
  let index = 0
 

  function insertArray(value) {
    if(value && arrayOne.length < 10) {
    const addArray = [value, ...arrayOne]
    setArrayOne(addArray)
    console.log(addArray)}
  }

 
  function dequeue() {
    if(arrayOne.length > 0) {
      const removeArray = [...arrayOne]
      removeArray.splice(-1)
      setArrayOne(removeArray)
    } 

  }
  return (
    <div>
      <h1>Create a Queue</h1>
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
        }}>Add
        </button>
        <br/>
        
        {/* delete value */}
        <button
        onClick={() =>{
          dequeue()
        }}>Dequeue
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
      <h1>Queue Information</h1>
      <div><QueueInfo/></div> 
    </div>
  )
}
