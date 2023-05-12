import React from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='mt-[200px] px-[100px]' id='projects'>
        <h3>
        Here are a few of my favorite projects.
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {ProjectsData.slice(0, 3).map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </div>
        <div className='mt-8 w-full'>
            <Link to='/projects' className='block border rounded-full border-mainBlue py-3 text-center text-mainBlue hover:text-white hover:bg-mainBlue transition-all'>
             View All</Link>
        </div>
    </section>
  )
}

export default Projects