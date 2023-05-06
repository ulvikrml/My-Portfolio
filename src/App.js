import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'projects'} element={<Projects/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App