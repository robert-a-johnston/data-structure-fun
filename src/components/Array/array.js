import React,{ useState } from 'react'
import ArrayInfo from '../info/ArrayInfo'
import './array.css'

export default function Array() {
  const [number, setNumber] = useState()
  const [numberDelete, setNumberDelete] = useState()
  const [arrayOne, setArrayOne] = useState([])
  let index = 0
 

  function insertArray(value) {
    if(value && arrayOne.length < 10) {
    const addArray = [...arrayOne, value]
    setArrayOne(addArray)
    console.log(addArray)}
  }

 
  function deleteValueFromArrayByIndex(value) {
    console.log(typeof value)
    if(value >= 0) {
      const removeArray = [...arrayOne]
      removeArray.splice(value, 1)
      setArrayOne(removeArray)
    } 

  }
  return (
    <div>
      <h1>Create an Array</h1>
      <div className='button-container'>
        {/* Add value to array */}
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
        <input
          type="number"
          name="number"
          placeholder='index'
          value={numberDelete}
          onChange={ e => setNumberDelete(e.target.value)}
          />
        <button
        onClick={() =>{
          deleteValueFromArrayByIndex(numberDelete)
        }}>Delete by Index Number
        </button>
      </div> 
        {/* Display array */}
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
      <h1>Array Information</h1>
      <div><ArrayInfo/></div> 
    </div>
  )
}
