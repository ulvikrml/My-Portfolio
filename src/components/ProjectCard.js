import React from 'react'
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ProjectCard = ({ title, img, link, github, tags, desc, addStyle }) => {
    return (
        <div className={`w-full xs:w-[310px] s:w-[380px] sm:w-[460px] md:w-[360px] lg:w-[310px] xl:w-[370px] ${addStyle && addStyle}`}>
            <a href={link} className="inline-block mb-2" target="_blank" rel='noreferrer'>
                <LazyLoadImage effect='blur' min-width={'100%'} min-height={'100%'} className='md:h-[225px] lg:h-[195px] xl:h-[235px] p-sm border rounded-md border-[#7b89a8] hover:border-mainBlue hover:translate-y-[-10px] transition-all duration-300 object-cover h-full w-full' src={img} alt={title} />
             </a>
            <div className="card-body">
                <div className="flex justify-between items-center mb-1">
                    <h4 className='text-white text-lg'>{title}</h4>
                    <div className='items-center flex'>
                        <a href={link} className='text-xl' target="_blank" rel='noreferrer'>
                            <BiLinkExternal className='text-mainBlue' />
                        </a>
                        <a className='ml-2 text-lg' href={github} target="_blank" rel='noreferrer'>
                            <FiGithub className='text-mainBlue' />
                        </a>
                    </div>
                </div>
                <p className="text-[#7b89a8] text-sm pb-2">
                    {desc}
                </p>
                <ul className="flex gap-[6px]">
                    {tags.map((tag, i) => (
                        <li className='text-xs sm:text-sm text-white p-1 bg-[#192742] rounded-lg px-2 py-1' key={i}>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard