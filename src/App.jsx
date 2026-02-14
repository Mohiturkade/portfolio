import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'

import './App.css'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'



function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <Skills/>
    <About/>
    <Projects/>
    <Contact/>
    

     
    </>
  )
}

export default App
