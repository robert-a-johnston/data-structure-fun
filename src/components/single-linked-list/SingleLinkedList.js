import React, { useState } from 'react'





export default function SingleLinkedList() {
  const [number, setNumber] = useState()
  const [nodeDelete, setNodeDelete] = useState()
  const [arrayOne, setArrayOne] = useState([])
  let index = 0
 

  function insertNode(value) {
    if(value && arrayOne.length < 10) {
    const addArray = [...arrayOne, value]
    setArrayOne(addArray)
    }
  }

 
  function removeNode(value) {
      const removeArray = [...arrayOne]
      const indexValue = removeArray.indexOf(value)
      console.log(indexValue)
      if(indexValue){
        console.log('in')
       removeArray.splice(indexValue, 1)
      } else {
        console.log('value not present')
      }
      setArrayOne(removeArray)
      
    }
  

  
  return (
    <div>
      <input
        type="number"
        name="number"
        value={number}
        onChange={ e => setNumber(e.target.value)}
        />
      <button
        onClick={() =>{
          insertNode(number)
        }}>Add Node</button>

      <input
        type="number"
        name="removeNumber"
        value={nodeDelete}
        onChange={ e => setNodeDelete(e.target.value)}
        />
      <button
        onClick={() =>{
          removeNode(nodeDelete)
        }}>Remove Node</button>


      <div className='array'>
        <div className='array-index-value'>
          <h2>points</h2>
          <h2>value</h2>
        </div>
        {arrayOne.map((value) => 
          <div 
            className='array-index-value'
            key={index++}>
            <h2 className='index'>
              {index === arrayOne.length - 1 ? 'null' : arrayOne[index + 1]}</h2>
            <h2 className='value'>{value}</h2>
          </div>)}
      </div>
    </div>
  )
  }
