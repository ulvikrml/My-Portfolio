import React from 'react'
import SkillsData from '../data/skills.json'

const Skills = () => {
    return (
        <section className='mt-28 container mx-auto px-5 md:px-0'>
            <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center">
                <div className='left-wr w-full lg:w-1/2 text-2xl lg:text-3xl text-white font-semibold relative text-center lg:text-left mb-12 lg:mb-0'>
                    <h2>I got the experience. <br /> Here is my toolbelt for success.</h2>
                    <img src={'images/stickers/laptop.svg'} className='absolute left-[-140px] lg:left-[-25px] top-18 lg:top-28 z-minus' alt='laptop' />
                    <img src={'images/stickers/coding.svg'} className='absolute right-[-60px] lg:right-32 top-60 lg:top-24 z-minus' alt='coding' />
                    <img src={'images/stickers/fillStar.svg'} className='absolute right-[-100px] lg:right-20 top-[-15px] z-minus' alt='star' />
                    <img src={'images/stickers/youtube.svg'} className='absolute top-64 lg:top-44 right-80 lg:right-44 z-minus' alt='youtube' />
                </div>
                <div className='flex flex-wrap w-full md:w-4/5 lg:w-1/2'>
                    {SkillsData.map(({ title, icon }, i) => (
                        <div className="w-1/5 flex flex-col items-center mb-10" title={title} key={i}>
                            <img src={icon} className="w-[40px] h-[40px]" alt='title' />
                            <span className='mt-1 text-xs text-[#7b89a8]'>{title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills