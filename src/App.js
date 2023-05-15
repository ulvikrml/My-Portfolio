import React from 'react';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Footer from './layout/Footer';
import MenuProvider from './context/MenuProvider';
import MobileNavbar from './layout/MobileNavbar';

const App = () => {
  return (
    <MenuProvider>
      <Router>
        <Navbar />
        <MobileNavbar />
        <main className='overflow-x-hidden'>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'projects'} element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </MenuProvider>
  );
};

export default App;
