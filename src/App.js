// import React, {useContext} from 'react'
// import Navbar from './layout/Navbar'
// import Home from './pages/Home'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Projects from './pages/Projects'
// import Footer from './layout/Footer'
// import MobileNavbar from './layout/MobileNavbar'
// import { MenuContext } from './context/MenuProvider'
// import MenuProvider from './context/MenuProvider';

// const App = () => {
//   const {isMenuOpen} = useContext(MenuContext)
//   console.log('app');
//   return (
//       <Router>
//         <Navbar></Navbar>
//         {isMenuOpen ? <MobileNavbar/> : ''}
//         <main className='overflow-x-hidden'>
//           <Routes>
//             <Route path={'/'} element={<Home />} />
//             <Route path={'projects'} element={<Projects />} />
//           </Routes>
//         </main>
//         <Footer></Footer>
//       </Router>
//   )
// }

// export default App
import React from 'react';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Footer from './layout/Footer';
import MenuProvider from './context/MenuProvider';
import MobileNavbar from './layout/MobileNavbar';
import { MenuContext } from './context/MenuProvider';

const App = () => {
  return (
    <MenuProvider>
      <AppContent />
    </MenuProvider>
  );
};

const AppContent = () => {
  const { isMenuOpen } = React.useContext(MenuContext);

  return (
    <Router>
      <Navbar />
      {isMenuOpen ? <MobileNavbar /> : ''}
      <main className='overflow-x-hidden'>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'projects'} element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
