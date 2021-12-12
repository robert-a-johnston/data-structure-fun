import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import './App.css';

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
          </Routes>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
