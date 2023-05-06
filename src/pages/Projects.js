import React from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <main className='mt-[40px] px-[100px]'>
        <h3>
        Here are a few of my favorite projects.
        </h3>
        <div className='flex gap-10 flex-col lg:flex-row '>
          {ProjectsData.map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </div>
    </main>
  )
}

export default Projects