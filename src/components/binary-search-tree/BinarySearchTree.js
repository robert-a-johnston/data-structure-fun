import React, { useState } from 'react'
import Tree from 'react-d3-tree'
import './BinarySearchTree.css'



class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
export default function Graph() {
  const[current, setCurrent] = useState('')
  const [data, setData] = useState({ root: null })
  const [verify,setVerify] = useState(false)
  // determines which side of root to place children
  function traverse(obj) {
    if (!obj) return null

    if (obj.left) {
      traverse(obj.left)
    }

    if (obj.value) {
      let children = []

      if (obj.left) {
        children = [...children, traverse(obj.left)]
      }

      if (obj.right) {
        children = [...children, traverse(obj.right)]
      }

      return {
        name: String(obj.value),
        children: children.length && [traverse(obj.left)].length ? children : []
      }
    }
    
    if (obj.right) {
      traverse(obj.right)
    }
  }

  // converts data to use in react-d3-tree Tree
  function formatData(data) {
    const res = Object.keys(data).map(key => {
      return {
        name: data[key] && data[key].value ? String(data[key].value) : key,
        children: traverse(data.root) ? [traverse(data.root)] : null
      }
    })

    if (res[0].children) {
      return res[0].children
    }

    return res
  }
  // insert value into tree
  function insert(value) {
    // create new node
    let node = new Node(value)
    // if the root is empty create root node
    if(!data.root) {
      setData({ root: node })
    } else {
      let current = data.root
      console.log(current)
      while (!!current) {
        // set node to left of current node if node < current
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node
            break
          }
          current = current.left
          // set node to right of current node if node > current
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node
            break
          }
          current = current.right
        } else {
          break
        }
      }
    }
    // setVerify(false)
    return data
  }

  return (
    <div>
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

      <div id="treeWrapper" >
        
        <Tree
          styles={{
            nodes: {
              node: {
                circle: {
                  
                  name: {
                    fontFamily: `'Roboto', sans-serif`,
                    fontSize: '1.6rem'
                  }
                }
              },
              leafNode: {
                circle: {
                 
                  name: {
                    fontFamily: `'Roboto', sans-serif`,
                    fontSize: '1.6rem'
                  }
                }
              }
            }
          }}
          pathFunc={'straight'}
          collapsible={false}
          orientation='vertical'
          translate={{
            x: document.getElementById('treeWrapper')
              ? document.getElementById('treeWrapper').clientWidth / 2
              : window.innerWidth / 2,
            y: document.getElementById('treeWrapper')
              ? document.getElementById('treeWrapper').clientHeight / 2
              : window.innerHeight / 2
          }}
          
          data={formatData(data)}
        />
      </div>
    </div>
  )
}

