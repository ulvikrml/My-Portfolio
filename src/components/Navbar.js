import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full flex justify-between px-[100px] h-[100px] items-center'>
            <div className='text-white flex gap-2 text-xl font-bold items-center'>
                <a href="/">
                    <img className='w-[60px] hover:scale-75 hover:rotate-360 transition-all duration-500' src={require('../assets/images/logo/logo.png')} alt="logo" />
                </a>
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
                <a className='text-white font-semibold' href="/">Home</a>
                <a className="text-gray-500 ml-10 font-semibold" href="/">Projects</a>
            </div>
        </nav >
    )
}

export default Navbar