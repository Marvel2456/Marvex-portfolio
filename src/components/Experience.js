import React from 'react'
import Html from '../assets/Html-icon.webp'
import Css from '../assets/css-icon.png'
import Javascript from '../assets/JavaScript-Logo.png'
import ReactImg from '../assets/React-icon.svg.png'
import Mysql from '../assets/mysql.png'
import Postgres from '../assets/postgresql.webp'
import Bootstrap from '../assets/bootstrap.png'
import TailwindImg from '../assets/tailwind.jpg'
import Django from '../assets/django-logo.png'
import Drf from '../assets/drf-logo2.png'
import Github from '../assets/GitHub.png'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-black text-white'>
      {/* container */}
      <div className='max-w-[1024px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='px-4'>
          <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-blue-500'>Experience</p>
          <p className='py-4'>These are the technologies i work with</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Html} alt='Html icon' />
            <p className='my-2'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Css} alt='Html icon' />
            <p className='my-2'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Javascript} alt='Html icon' />
            <p className='my-2'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={ReactImg} alt='Html icon' />
            <p className='my-2'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Bootstrap} alt='Html icon' />
            <p className='my-2'>BOOTSTRAP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={TailwindImg} alt='Html icon' />
            <p className='my-2'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Django} alt='Html icon' />
            <p className='my-2'>DJANGO</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Drf} alt='Html icon' />
            <p className='my-2'>DRF</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Postgres} alt='Html icon' />
            <p className='my-2'>POSTGRESQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Mysql} alt='Html icon' />
            <p className='my-2'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto rounded-full' src={Github} alt='Html icon' />
            <p className='my-2'>GitHub</p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Experience
