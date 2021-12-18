import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import ArrayStackQueue from './components/ArrayStackQueue/array-stack-queue'
import SingleLinkedList from './components/single-linked-list/SingleLinkedList'
import BinarySearchTree from './components/binary-search-tree/BinarySearchTree'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header/>
        <main>
        <Routes>
          <Route
            path='/'
            element={<Home/>}/> 
          <Route
            path='/arrayStackQueue'
            element={<ArrayStackQueue/>}/>
           <Route
            path='/singleLinkedList'
            element={<SingleLinkedList/>}/>
          <Route
            path='/binaryTree'
            element={<BinarySearchTree/>}/>
          </Routes>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
