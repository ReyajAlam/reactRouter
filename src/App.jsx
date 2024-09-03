import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'

// import Outlet from 'react-router-dom'
// Correct: Use named imports
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import About from './components/About/About.jsx'

function App() {
  

  return (
    <>
      <Header />
      
      <Home />
      
      <Outlet > <About /> <Contact /></Outlet> 
      <Footer />
    </>
  )
}

export default App
