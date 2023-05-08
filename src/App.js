import React from 'react'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Footer from './layout/Footer'

const App = () => {
  return (
    <>
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'projects'} element={<Projects/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App