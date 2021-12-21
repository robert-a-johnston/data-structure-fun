import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Array from './components/Array/array'
import Stack from './components/Stack/stack'
import Queue from './components/queue/Queue'
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
            path='/array'
            element={<Array/>}/>
          <Route
            path='/stack'
            element={<Stack/>}/>
          <Route
            path='/queue'
            element={<Queue/>}/>
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
