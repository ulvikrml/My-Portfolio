import React from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <main className='mt-[40px] px-[100px]'>
            <div className='flex items-center flex-col '>
                <div className='text-center'>
                    <h2 className='text-6xl text-white mb-6 relative'>
                        Projects
                        <img className='w-10 absolute' src="/images/stickers/code.svg" alt="codingsticker" />
                    </h2>
                    <p className='text-textGray'>I've built cool apps and websites using anything from HTML to React. Here are some of my favorite projects over the course of my journey.</p>
                </div>
                <div className='mt-10 grid grid-cols-3 gap-6 justify-center'>
                    {ProjectsData.map((project, i) => <ProjectCard key={project.id} {...project} />)}
                </div>
                <div>
                    <p class="text-textGray text-center text-sm italic mt-8">Hey, hey, hey... I've got even more on <a className='text-mainBlue underline' target='_blank' rel='noreferrer' href="https://github.com/ulvikrml">my GitHub</a>!</p>
                </div>
            </div>
        </main>
    )
}

export default Projects