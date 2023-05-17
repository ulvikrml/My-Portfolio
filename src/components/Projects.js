import React from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='mt-[200px] container mx-auto px-10 md:px-5' id='projects'>
      <div className='flex flex-col lg:flex-row justify-between items-center mb-10'>
        <h3 className='text-2xl sm:text-3xl leading-9 relative text-white order-last lg:order-1 text-center md:text-left'>
          Here are a few of my favorite projects.
        </h3>
        <span className='bg-mainBlue h-1 leading-9 relative w-2/5 md:w-1/5 mb-3 lg:mb-0 lg:w-2/5 xl:w-1/2 lg:order-2'></span>
      </div>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {ProjectsData.slice(0, 3).map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </div>
        <div className='mt-8 w-[250px] xs:w-[310px] s:w-[380px] md:w-3/5 lg:w-2/5 mx-auto'>
          <Link to='/projects' className='block border rounded-full border-mainBlue py-3 text-center text-mainBlue hover:text-white hover:bg-mainBlue transition-all'>
            View All</Link>
        </div>
      </div>
    </section>
  )
}

export default Projects