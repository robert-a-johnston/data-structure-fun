import React, { useState } from 'react'


class Node {
  constructor(value) {
    this.value = value
    this.next = null    
  }
}



export default function SingleLinkedList() {
  const [data, setData] = useState({ head: null })
  let [size, setSize] = useState(0)
  const [current, setCurrent] = useState('')

  function insert(value) {
    let node = new Node(value)
    console.log(node)
    if(!data.head){
      setData({ head: node })
      // setSize(++size)
    } else {
      let current = data.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    setSize(++size)
    console.log('size', size)
  }
  return (
    <div>
      <input
          type="number"
          name="current"
          value={current}
          onChange={e => setCurrent(e.target.value)}
        />
      <button
          disabled={!current || isNaN(current)}
          onClick={() => {
            insert(parseInt(current, 10))
            setCurrent('')
          }}
        >
          Add
        </button>
    </div>
  )
}
