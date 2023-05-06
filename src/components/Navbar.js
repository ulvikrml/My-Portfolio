import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full flex justify-between px-[100px] h-[100px] items-center'>
            <div className='text-white flex gap-2 text-xl font-bold items-center'>
                <Link to="/">
                    <img className='w-[60px] hover:scale-75 hover:rotate-360 transition-all duration-500' src='/images/logo/logo.png' alt="logo" />
                </Link>
                <p>
                    <span className='name-letter'>U</span>
                    <span className='name-letter'>l</span>
                    <span className='name-letter'>v</span>
                    <span className='name-letter'>i</span>
                </p>
                <p>
                    <span className='name-letter'>K</span>
                    <span className='name-letter'>a</span>
                    <span className='name-letter'>r</span>
                    <span className='name-letter'>i</span>
                    <span className='name-letter'>m</span>
                    <span className='name-letter'>l</span>
                    <span className='name-letter'>i</span>
                </p>
            </div>
            <div>
                <Link className='text-white font-semibold' to="/">Home</Link>
                <Link className="text-gray-500 ml-10 font-semibold" to="/projects">Projects</Link>
            </div>
        </nav >
    )
}

export default Navbar