import React, { useEffect, useContext } from 'react'
import ProjectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import { MenuContext } from '../context/MenuProvider'


const Projects = () => {
    const { isMenuOpen } = useContext(MenuContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div className={`${isMenuOpen ? 'mt-33' : 'mt-10'} container mx-auto mb-20 px-10 md:px-5`}>
            <div className='flex items-center flex-col '>
                <div className='text-center flex flex-col items-center'>
                    <h2 className='text-5xl md:text-6xl text-white mb-6 relative flex-shrink-0'>
                        Projects
                        <img className='w-10 absolute top-[-25px] right-[-35px]' src="/images/stickers/code.svg" alt="codingsticker" />
                    </h2>
                    <p className='text-textGray w-full lg:w-3/5 text-base md:text-xl lg:text-2xl'>I've built cool apps and websites using anything from HTML to React. Here are some of my favorite projects over the course of my journey.</p>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                    {ProjectsData.map((project, i) => <ProjectCard key={project.id} {...project} addStyle='mb-8' />)}
                </div>
                <div>
                    <p className="text-textGray text-center text-sm italic mt-8">Hey, hey, hey... I've got even more on <a className='text-mainBlue underline' target='_blank' rel='noreferrer' href="https://github.com/ulvikrml">my GitHub</a>!</p>
                </div>
            </div>
        </div>
    )
}

export default Projects