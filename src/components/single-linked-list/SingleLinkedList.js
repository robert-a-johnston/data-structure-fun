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
  const[head, setHead] = useState(null)
  let[length, setLength] = useState(0)


  function add(value) {
    setLength(++length)
    const node = new Node(value)
    node.next = head
    setHead(node)
    console.log('node', node)
    console.log('length', length)
    
  }

  function search(value){
    var curr = head
    while (curr){
      if(value === curr.value) {
        console.log('true')
        return true
      }
      console.log(curr)
      curr = curr.next
    }
    console.log(false)
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
    </div>
  )
}
