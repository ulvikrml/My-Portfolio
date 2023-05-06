import React from 'react'
import SkillsData from '../data/skills.json'

const Skills = () => {
    return (
        <section className='mt-28 px-[100px]'>
                <div className="flex flex-col lg:flex-row w-full  justify-between">
                        <div className='left-wr w-1/2 text-3xl text-white font-semibold relative'>
                            <h2>I got the experience. <br /> Here is my toolbelt for success.</h2>
                            <img src={'images/stickers/laptop.svg'} className='absolute left-[-25px] top-28' alt='laptop' />
                            <img src={'images/stickers/coding.svg'} className='absolute right-32 top-24' alt='coding' />
                            <img src={'images/stickers/fillStar.svg'} className='absolute right-20 top-[-15px]' alt='star' />
                            <img src={'images/stickers/youtube.svg'} className='absolute top-44 right-44' alt='youtube' />
                        </div>
                        <div className='flex flex-wrap w-1/2'>
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