import React, { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../context/MenuProvider'
const MobileNavbar = () => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);
    const { setIsMenuOpen } = useContext(MenuContext)
    return (
        <div className='fixed z-[999] w-full h-[100%] height-calc bottom-0 mt-[80px] bg-[#000A1F] transition-transform duration-[0.3s] ease-[ease-in-out] left-0 top-0'>
            <nav className='text-gray-500 flex flex-col container mx-auto px-5 mt-8'>
                <NavLink className='font-semibold pb-5 mb-5 border-b-xs border-white-200' to="/" activeclassname="active" onClick={() => { setIsMenuOpen(false) }}>Home</NavLink>
                <NavLink className="font-semibold pb-5 border-b-xs border-white-200" to="/projects" activeclassname="active" onClick={() => {setIsMenuOpen(false) }}>Projects</NavLink>
            </nav>
        </div >
    )
}

export default MobileNavbar