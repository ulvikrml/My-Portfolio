import React from 'react'
import { footerData, repoLink } from '../data/footerData';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='container mx-auto text-white border-t-xs border-[#000F2E] py-10 flex flex-col items-center relative px-5'>
      <div className='flex flex-row w-[90%] lg:w-[63%] mx-auto border-b-xs border-gray-800 pb-10'>
        <div className='flex justify-between w-full flex-wrap'>
          {footerData.map(({ title, links }) => (
            <div className="text-base mb-5 sm:mb-0 last-of-type:basis-full sm:last-of-type:basis-0" key={title}>
              <h4 className='uppercase text-textGray font-bold'>{title}</h4>
              <ul className='flex flex-col'>
                {
                  links.map(({ name, link, icon }) => {
                    const Icon = icon && icon;
                    return (<li className='mt-3' key={name}>
                      <Link className='flex items-center' to={link}>
                        {icon && <Icon className='text-textGray text-xl mr-2' />}{name}
                      </Link>
                    </li>)
                  }
                  )
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center pt-6'>
        <div className='flex flex-col'>
          <div className="flex justify-center items-center">
            <span className='text-textGray uppercase text-sm font-semibold mr-2'>Made With</span>
            <div className="flex items-center ">
              <span><img className='w-6 ml-2' src='/images/icons/react-logo.svg' alt='react-logo' /></span>
              <span><img className='w-6 ml-2' src='/images/icons/tailwind-logo.svg' alt='tailwind-logo' /></span>
            </div>
          </div>
          <div className="text-textGray text-xs mt-3 ">
            Made by <a href="mailto:ulvikrml@gmail.com" className='text-[#b2bbcf]'> Ulvi Karimli</a>. All rights reserved.
          </div>
        </div>
      </div>
      <div className='flex flex-end items-center mt-7 md:mb-12 relative md:absolute md:bottom-0 md:right-5'>
        <a href={repoLink} className='flex items-center text-sm px-3 py-2 rounded-lg border-xs border-mainBlue-light text-mainBlue-light'>
          <FiGithub className='mr-2 text-lg' />  View Source Code
        </a>
      </div>
    </footer>
  )
}

export default Footer