import React from 'react';
import './Styles/App.css';
import {BrowserRouter, Routes, Route, Link, Redirect, Navigate} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts'
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="*" element={<About/>}/>
      </Routes>
      {/* <Navigate to='/posts'/> */}
    </BrowserRouter>
  )
}

export default App;
