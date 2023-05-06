import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col items-center relative pt-16'>
            <p className='text-xl text-white'>Hey, I'm Ulvi.</p>
            <h1 className='text-[66px] font-semibold text-white w-3/5 text-center'>
                I enjoy  <span className='text-mainBlue'>building</span>  for the web.
            </h1>
            <div className='relative w-2/4'>
                <img src='/images/stickers/pop1.svg' alt='pop1' className='absolute left-[0px] top-[-300px] animate-imgbounce delay300' />
                <img src='/images/stickers/html.svg' alt='html' className='absolute w-16 right-[20px] top-[-280px] animate-imgbounce delay500' />
                <img src='/images/stickers/coder.svg' alt='coder' className='absolute w-[320px] scale-150 left-[-180px] animate-imgbounce delay300' />
                <img src='/images/stickers/js.svg' alt='js' className='absolute left-[60px] top-[-35px] animate-imgbounce delay500' />
                <img src='/images/stickers/code.svg' alt='code' className='absolute top-[-80px] left-[-70px] animate-imgbounce delay500' />
                <img src='/images/stickers/dino.svg' alt='dino' className='absolute top-[115px] left-[250px] animate-imgbounce delay500' />
                <img src='/images/stickers/paintbrush.svg' alt='paintbrush' className='absolute right-[-90px] top-[-60px] animate-imgbounce delay700' />
                <img src='/images/stickers/laptop.svg' alt='laptop' className='absolute right-[-60px] top-[100px] w-56 animate-imgbounce delay600' />
            </div>
            <a href="/" className='text-white text-xl px-8 py-4 border-2 rounded-full hover:bg-mainBlue transition-all hover:border-mainBlue'>Tell me more</a>
        </section>
    )
}

export default Hero