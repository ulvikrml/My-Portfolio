import React from 'react'
import { footerData, logos, repoLink } from '../data/footerData';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='w-[100%] text-white border-t-[0.5px] border-[#000F2E] pt-10'>
      <div className='flex flex-row w-[55%] mx-auto'>
        <div className='flex justify-between w-full'>
          {footerData.map(({ title, links }) => (
            <div className="text-base mb-5 sm:mb-0">
              <h4 className='uppercase text-textGray font-bold'>{title}</h4>
              <ul className='flex flex-col'>
                {
                  links.map(({ name, link, icon }) => {
                    const Icon = icon && icon;
                    return (<li className='mt-3' key={name}>
                      <Link className='flex items-center' to={link}>
                        {icon && <Icon className='text-textGray text-xl mr-2'/>}{name}
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


      <div className='flex justify-center footer-bottom'>
        <div lg={9} className='d-flex flex-column'>
          <div className="made-with d-flex justify-content-center align-items-center">Made With
            <div className="logos d-flex align-items-center">
              {logos.map(({ link }, i) => (
                <span key={i}><img src={link} width={"26"} alt='img' /></span>
              ))}
            </div>
          </div>
          <div className="copyright">
            Made by <a href="mailto:afinasgarli0@gmail.com"> Afin Asgarli</a>. All rights reserved.
          </div>
        </div>
      </div>
      <a href={repoLink} className='source-code d-flex justify-content-between align-items-center'>
        <FiGithub size={"1.25rem"} />  View Source Code
      </a>
    </footer>
  )
}

export default Footer