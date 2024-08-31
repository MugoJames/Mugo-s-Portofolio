import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

