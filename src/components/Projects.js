import React from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className='mt-[200px] px-[100px]'>
        <h3>
        Here are a few of my favorite projects.
        </h3>
        <div className='flex gap-10 flex-col lg:flex-row '>
          {ProjectsData.slice(0, 3).map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </div>
        <div className='mt-8 w-full'>
            <a href='/' className='block border rounded-full border-mainBlue py-3 text-center text-mainBlue hover:text-white hover:bg-mainBlue transition-all'>
             View All</a>
        </div>
    </section>
  )
}

export default Projects