import { useState } from 'react'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import $ from 'jquery';
window.$ = $;

import './assets/css/animate.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './App.css'

import WOW from 'wow.js';


import Spinner from './components/Spinner';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    const wow = new WOW();
    wow.init();  // Initialize WOW.js
  }, []);
  return (
    <>
      <Spinner />
      <TopHeader />
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
