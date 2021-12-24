import React from 'react'

export default function StackInfo() {
  return (
    <div className='container'>
    <div className='time-space-complexity'>
      <h3>Time Complexity</h3>
      <table>
        <tr>
          <th>Event</th>
          <th>Time O(n)</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td>Access</td>
          <td>O(n)</td>
          <td>In worst case you must traverse entire stack to find value.</td>
        </tr>
        <tr>
          <td>Search for Value</td>
          <td>O(n)</td>
          <td>May have to iterate through all values in array to find value.</td>
        </tr>
        <tr>
          <td>Insert</td>
          <td>O(1)</td>
          <td>By definition stacks only add values to first index of the stack.
          </td>
        </tr>
        <tr>
          <td>Delete</td>
          <td>O(1)</td>
          <td>By definition stacks only remove the first element of the stack</td>
        </tr>   
      </table>
      <p>n = number of elements in stack</p>
      <h3>Stack Space Complexity = O(n)</h3>
    </div>
    <div className='information'>
      <h3>Array Information</h3>
      <p><b>Definition:</b> A stack is an abstract data type where all data operations are performed 
        at one end of the stack.
      </p>
      <ul>
        <li>Can be implemented with other structures like arrays or linked lists.</li>
        <li>Is a LAST IN FIRST OUT (LIFO) data structure.</li>
        <li>An insertion is called a PUSH.</li>
        <li>A deletion is called a POP.</li>
      </ul>
    </div>
  </div>
)
  
}
