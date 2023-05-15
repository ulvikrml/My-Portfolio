import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { MenuContext } from '../context/MenuProvider'

const Navbar = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
    const name = 'Ulvi'
    const surname = 'Karimli'
    return (
        <header className={`${isMenuOpen ? 'bg-bgBlue z-[500]' : ''} w-full flex justify-between h-[80px] items-center container mx-auto px-5`}>
            <div className='text-white flex gap-2 text-xl font-bold items-center'>
                <Link to="/">
                    <img className='w-[60px] hover:scale-75 hover:rotate-360 transition-all duration-500' src='/images/logo/logo.png' alt="logo" />
                </Link>
                <p>
                    {[...name].map((letter, index) => {
                        return <span key={index} className='name-letter'>{letter}</span>
                    })}
                </p>
                <p>
                    {[...surname].map((letter, index) => {
                        return <span key={index} className='name-letter'>{letter}</span>
                    })}
                </p>
            </div>
            <nav className='text-gray-500 hidden sm:block'>
                <NavLink className='font-semibold' to="/" activeclassname="active">Home</NavLink>
                <NavLink className="ml-10 font-semibold" to="/projects" activeclassname="active">Projects</NavLink>
            </nav>
            <div className='block sm:hidden'>
                {isMenuOpen ?
                    <AiOutlineClose className='text-white text-2xl cursor-pointer pr-1 mr-1' onClick={() => setIsMenuOpen(false)} />
                    :
                    <FiMenu className='text-white text-2xl cursor-pointer' onClick={() => setIsMenuOpen(true)} />
                }
            </div>
        </header >
    )
}

export default Navbar