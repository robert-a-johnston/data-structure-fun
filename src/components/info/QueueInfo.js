import React from 'react'
import './info.css'

export default function ArrayInfo() {
  return (
    <div className='container'>
      <div className='time-space-complexity'>
        <h3>Queue Time Complexity</h3>
        <table>
          <tr>
            <th>Event</th>
            <th>Time O(n)</th>
            <th>Explanation</th>
          </tr>
          <tr>
            <td>Access</td>
            <td>O(n)</td>
            <td>You may have to iterate through all values in the queue to access a value.
            </td>
          </tr>
          <tr>
            <td>Search for Value</td>
            <td>O(n)</td>
            <td>May have to iterate through all values in queue to find value.</td>
          </tr>
          <tr>
            <td>Insert</td>
            <td>O(1)</td>
            <td>Enqueueing only occurs from the end of the queue by definition.
            </td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>O(1)</td>
            <td>Dequeueing only occurs from the front of the queue by definition.</td>
          </tr>   
        </table>
        <p>n = number of elements in queue</p>
        <h3>Queue Space Complexity = O(n)</h3>
      </div>
      <div className='information'>
      <p><b>Definition:</b> A queue is a collection of entities 
      that are maintained in a sequence and can be modified by the addition of entities 
      at one end of the sequence and the removal of entities from the other end of 
      the sequence.
      </p>
        <h3>Important Points About Queues</h3>
        <ul>
          <li>Can be implemented with other data types like arrays or linked lists.</li>
          <li>Is a FIRST IN FIRST OUT (FIFO) data structure.</li>
          <li>Insertion is called enqueueing.</li>
          <li>Deleting is called dequeueing.</li>
          <li>Used for breath first search algorithm.</li>
        </ul>
      </div>
    </div>
  )
}
