import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => (
  <div className="header">
    <Navbar>
      <Navbar.Brand><h1>Data Structure Fun</h1></Navbar.Brand>
        <Nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/arrayStackQueue">Arrays/Stacks/Queues</NavLink>
          <NavLink className="nav-link" to="/singleLinkedList">Singly Linked List</NavLink>
          <NavLink className="nav-link" to="/binaryTree">Binary Tree</NavLink>
          <a className="nav-link" href="https://robert-a-johnston.github.io/"
            target="_blank" rel="noreferrer">Portfolio</a>
        </Nav>     
    </Navbar>
  </div>
)

export default Header
