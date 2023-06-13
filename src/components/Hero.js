import React from 'react'

const Hero = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section className='flex flex-col items-center relative mt-28 md:mt-34 mx-auto px-5 animate-heroFade'>
            <p className='text-xl text-white translate-y-[-40px]'>Hey, I'm Ulvi.</p>
            <h1 className='text-[50px] md:text-7xl font-semibold text-white sm:w-4/5 md:w-3/5 text-center mt-[-30px]'>
                I enjoy  <span className='text-mainBlue'>building</span>  for the web.
            </h1>
            <div className='relative w-2/4 top-[30px]'>
                <img src='/images/stickers/pop1.svg' alt='pop1' className='absolute left-[0px] top-[-300px] animate-imgbounce delay300 opacity-0 md:opacity-100' />
                <img src='/images/stickers/html.svg' alt='html' className='absolute w-16 right-[-150px] sm:right-[-80px] md:right-[20px] top-[-200px] md:top-[-280px] animate-imgbounce delay500' />
                <img src='/images/stickers/coder.svg' alt='coder' className='absolute opacity-0 md:opacity-100 w-[320px] left-[-180px] animate-imgbounce delay300' />
                <img src='/images/stickers/js.svg' alt='js' className='absolute left-[-130px] md:left-[60px] top-[-35px] animate-imgbounce delay500' />
                <img src='/images/stickers/code.svg' alt='code' className='absolute opacity-40 md:opacity-100 top-[-200px] md:top-[-80px] left-[-150px] md:left-[-70px] animate-imgbounce delay500' />
                <img src='/images/stickers/dino.svg' alt='dino' className='absolute w-36 md:w-52 top-[115px] left-[-100px] md:left-[120px] lg:left-[200px] animate-imgbounce delay500' />
                <img src='/images/stickers/paintbrush.svg' alt='paintbrush' className='absolute right-[-200px] sm:right-[-150px] md:right-[-90px] top-[-60px] w-48 md:w-52 animate-imgbounce delay700' />
                <img src='/images/stickers/laptop.svg' alt='laptop' className='absolute right-[-120px] sm:right-[-150px] top-[100px] w-40 md:w-56 animate-imgbounce delay600' />
            </div>
            <button onClick={handleClickScroll} className='btn text-xl px-8 py-4 mt-8'>Tell me more</button>
        </section>
    )
}

export default Hero