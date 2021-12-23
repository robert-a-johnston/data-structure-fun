import React from 'react'
import './info.css'

export default function ArrayInfo() {
  return (
    <div className='container'>
      <div className='time-space-complexity'>
        <h3>Array Time Complexity</h3>
        <table>
          <tr>
            <th>Event</th>
            <th>Time O(n)</th>
            <th>Explanation</th>
          </tr>
          <tr>
            <td>Access by Index</td>
            <td>O(1)</td>
            <td>Can directly access any value on the table by index number.</td>
          </tr>
          <tr>
            <td>Search for Value</td>
            <td>O(n)</td>
            <td>May have to iterate through all values in array to find value.</td>
          </tr>
          <tr>
            <td>Insert</td>
            <td>O(n) or maybe O(1)</td>
            <td>Insertion depends on method of insertion.  If inserting values at specific index
              other than initial index may have to iterate over all values in array.  If you only
              add to an array by pushing a value to the first position then constant time.
            </td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>O(n) or maybe O(1)</td>
            <td>Deletion depends on method of deletion.  If deleting values at specific index
              other than initial index may have to iterate over all values in array.  If you only
              remove a value from an array by popping a value from the first position then constant time.
              Also deleting by index as in the above example is constant time because you 
              access the value by the index number and do not have to iterate through the array.</td>
          </tr>   
        </table>
        <p>n = number of elements in array</p>
        <h3>Array Space Complexity = O(n)</h3>
      </div>
      <div className='information'>
        <h3>Important Point About Arrays</h3>
        <ul>
          <li>Arrays typically begin with 0 as the first index.</li>
          <li>Different languages have different implementations of arrays.  As an example
            Java requires defining the length of an array and that length cannot be changed.  
            This is not the case with JavaScript where array length may change.
          </li>
          <li>Arrays can be used to implement other data structures like linked-lists, stacks, and 
            queues.
          </li>
        </ul>
      </div>
    </div>
  )
}
