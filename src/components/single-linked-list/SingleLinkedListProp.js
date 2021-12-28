/*THIS IS THE CORRECT WAY TO SET UP A LINKED LIST
  WILL USE ALTERNATE WAY TO PROVIDE DEMONSTRATION AND
  VISUALIZATION */

  // class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null    
//   }
// }

  // const[head, setHead] = useState(null)
  // let[length, setLength] = useState(0)
 
  
 

  // // sets most recent added node to head
  // function add(value) {
  //   console.log(head)
  //   setLength(++length)
  //   const node = new Node(value)
  //   node.next = head
  //   setHead(node)
    
  // }

  // // looks for value O(n)
  // function search(value){
  //   let curr = head
  //   while (curr){
  //     if(value === curr.value) {
  //       console.log('curr')
  //       return curr
  //     } 
  //     curr = curr.next
  //   }
  //   console.log('false')
  // }


  // // removes value
  // function remove(value){
  //   // checks for empty list
  //   if(length === 0) {
  //     console.log('empty list')
  //     return
  //   }
  //   // removes if only the head value exists
  //   if(length === 1){
  //     setLength(--length)
  //     setHead(null)
  //     return
  //   }
  //   let node = head
  //   let preNode =null
  //   // search through list
  //   while(node) {
  //     // if you find the value
  //     if(node.value === value){
  //       // set the previous node's value to 
  //       // node value
  //       if(node.next.next !== null) preNode.next = node.next
  //       // remove the node with the value
  //       node.next = null
  //       setLength(--length)
  //       console.log('length after remove', length)
  //       return
  //     }
  //     preNode = node
  //     node = node.next
  //   }
    
    
    
  //   console.log('value not found')
  //   }