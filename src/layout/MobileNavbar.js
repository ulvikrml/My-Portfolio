import React, { useEffect, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../context/MenuProvider'


const MobileNavbar = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const [previousWindowWidth, setPreviousWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const isHorizontalResize = windowWidth !== previousWindowWidth;
            if (isHorizontalResize) {
                setIsMenuOpen(false);
            }
            setPreviousWindowWidth(windowWidth);
        };

        let previousWindowWidth = window.innerWidth;
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMenuOpen, previousWindowWidth]);


    useEffect(() => {
        const body = document.body;
        if (isMenuOpen) {
            body.style.overflow = 'hidden';
            // window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth' 
            //   });
              setTimeout(window.scrollTo({
                top: 0,
                behavior: 'smooth' 
              }),100);
        } else {
            body.style.overflow = 'auto';
        }

        return () => {
            body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <div className={`${isMenuOpen ? 'active-menu' : 'deactive-menu'}  mobile-navbar`}>
            <nav className='text-gray-500 flex flex-col container mx-auto px-7 mt-8'>
                <NavLink className='font-semibold pb-5 mb-5 border-b-xs border-white-200' to="/" activeclassname="active" onClick={() => { setIsMenuOpen(false) }}>Home</NavLink>
                <NavLink className="font-semibold pb-5 border-b-xs border-white-200" to="/projects" activeclassname="active" onClick={() => { setIsMenuOpen(false) }}>Projects</NavLink>
            </nav>
        </div >
    )
}

export default MobileNavbar