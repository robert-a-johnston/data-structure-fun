import React, { useState } from 'react'


class Node {
  constructor(value) {
    this.value = value
    this.next = null    
  }
}


export default function SingleLinkedList() {
  const[number, setNumber] = useState(0)
  const[head, setHead] = useState(null)
  let[length, setLength] = useState(0)


  function add(value) {
    setLength(++length)
    console.log('value', value, length)
    const node = new Node(value)
    setHead(node)
  
    console.log('node', node)
    
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
          add(number)
        }}>Add</button>
    </div>
  )
}
