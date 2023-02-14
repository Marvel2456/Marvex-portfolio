import React from 'react'
import MarvexImg from '../assets/marvexB.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-white pb-[180px]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1024px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1024px] w-full px-8 sm:grid grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold pb-4'>
            <img src={MarvexImg} className='rounded-full h-[250px] w-[200px]' alt='Eseosa' />
          </div>
          <div>
            <p>
              I'm a passionate developer with a relentless drive for innovation and a commitment to delivering
              intuitive and impactful software solutions, i am a software developer that turns complex problems
              into simple and elegant solutions. Join me on a journey to shape the future through code and innovative
              ideas, where together we can turn this ideas into reality.
            </p>
          </div>
        </div>

      </div>
        
      
    </div>
  )
}

export default About
