import React from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='mt-[200px] container mx-auto px-10 md:px-5' id='projects'>
        <h3>
        Here are a few of my favorite projects.
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {ProjectsData.slice(0, 3).map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </div>
        <div className='mt-8 w-full md:w-3/5 lg:w-2/5 mx-auto'>
            <Link to='/projects' className='block border rounded-full border-mainBlue py-3 text-center text-mainBlue hover:text-white hover:bg-mainBlue transition-all'>
             View All</Link>
        </div>
    </section>
  )
}

export default Projects