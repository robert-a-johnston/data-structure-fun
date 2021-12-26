import React, { useState } from 'react'


class Node {
  constructor(value) {
    this.value = value
    this.next = null    
  }
}


export default function SingleLinkedList() {
  const[number, setNumber] = useState(0)
  const[searchNumber, setSearchNumber] = useState(0)
  const[removeNumber, setRemoveNumber] = useState(0)
  const[head, setHead] = useState(null)
  let[length, setLength] = useState(0)
  // used for displaying nodes/list
  const [arrayOne, setArrayOne] = useState([])
  let index = 0

  // sets most recent added node to head
  function add(value) {
    console.log(head)
    setLength(++length)
    const node = new Node(value)
    node.next = head
    setHead(node)
    console.log('node', node)
    console.log('length', length)
    const addArray = [value, ...arrayOne]
    setArrayOne(addArray)
    console.log(addArray) 
  }

  // looks for value O(n)
  function search(value){
    let curr = head
    while (curr){
      if(value === curr.value) {
        console.log('curr')
        return curr
      } 
      curr = curr.next
    }
    console.log('false')
  }


  // removes value
  function remove(value){
    // checks for empty list
    if(length === 0) {
      console.log('empty list')
      return
    }
    // removes if only the head value exists
    if(length === 1){
      setLength(--length)
      setHead(null)
      return
    }
    let node = head
    let preNode =null
    // search through list
    while(node) {
      // if you find the value
      if(node.value === value){
        // set the previous node's value to 
        // node value
        if(node.next.next !== null) preNode.next = node.next
        // remove the node with the value
        node.next = null
        setLength(--length)
        console.log('length after remove', length)
        return
      }
      preNode = node
      node = node.next
    }
    console.log('value not found')
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

      <input
        type="number"
        name="searchNumber"
        value={searchNumber}
        onChange={ e => setSearchNumber(e.target.value)}
        />
      <button
        onClick={() =>{
          search(searchNumber)
        }}>Search</button>

      <input
        type="number"
        name="removeNumber"
        value={removeNumber}
        onChange={ e => setRemoveNumber(e.target.value)}
        />
      <button
        onClick={() =>{
          remove(removeNumber)
        }}>Remove</button>


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
