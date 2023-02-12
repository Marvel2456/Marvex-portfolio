import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1024px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1024px] w-full px-8 sm:grid grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold pb-4'>
            <p>Hi, I'm Eseosa, it's nice to meet you!</p>
          </div>
          <div>
            <p>
              I'm a passionate developer who dedicates time and resources in making sure that the desired resuslt
               is attained. I enjoy using latest and more efficient methods of writing clean, reuseable codes,
                and i'm a quick and efficient learner.
            </p>
          </div>
        </div>

      </div>
        
      
    </div>
  )
}

export default About
