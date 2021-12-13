import React, { useState } from 'react'
import './array.css'

export default function Array() {
  const [arrayOne, setArrayOne] = useState([])
 

  function insertArray() {
    let inputValue = document.getElementById("value").value
    if(inputValue !== '') arrayOne.push(inputValue)
    document.getElementById("value").value = ""
    console.log(arrayOne)
  }

  function accessArray(){
    let indexValue = document.getElementById("getValueByIndex").value
    document.getElementById("getValueByIndex").value = ""
    console.log(arrayOne[indexValue])
  }

  function searchArray(){
    let inputValue = document.getElementById("getValue").value
    const found = arrayOne.indexOf(inputValue)
    document.getElementById("getValue").value = ""
    console.log(found)
  }


  function deleteValueFromArray() {
    let indexValue = document.getElementById("indexValue").value
    if (indexValue > -1) {
      arrayOne.splice(indexValue, 1)
    }
    document.getElementById("indexValue").value = ""
    console.log(arrayOne)
  }
  return (
    <div>
      <h1>Array Information</h1>
      {/* set value */}
      <label for="value">Value</label>
      <input id="value" type="number"></input>
      <button type="button" onClick={insertArray}>Push to array</button>
      <br/>
      {/* access value */}
      <label for="getValueByIndex">Index Value</label>
      <input id="getValueByIndex" type="number" min="0"></input>
      <button type="button" onClick={accessArray}>Get Index of Value</button>
      <br/>
       {/* find index of value */}
       <label for="getValue">Value</label>
      <input id="getValue" type="number"></input>
      <button type="button" onClick={searchArray}>Get Value at Index</button>
      <br/>
      {/* delete value */}
      <label for="indexValue">Index Value</label>
      <input id="indexValue" type="number" min="0"></input>
      <button type="button" onClick={deleteValueFromArray}>Remove Value</button>      
    </div>
  )
}
