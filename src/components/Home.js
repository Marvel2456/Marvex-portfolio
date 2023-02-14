import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black text-white'>

      {/* container */}

      <div className='max-w-[1024px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-500'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-300 py-2'>Eseosa Marvellous Idemudia</h1>
        <h2 className='text-4xl sm:text-7xl font-bold '>I'm a Full Stack Developer.</h2>
        <p className='py-4 max-w-[850px]'>I build responsive and scalable applications and also provide consultation services for 
          startups. I enjoy sharing ideas and working on real life problems, and i also love building
         these new ideas to life. I love good music!!!
        </p>
        <div>
          <button className='border-2 group px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className='group-hover:rotate-90'>
             <HiArrowNarrowRight className='ml-3' />
            </span>
           
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Home
