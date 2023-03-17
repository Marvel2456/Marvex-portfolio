import React from 'react'
import Quicksales from '../assets/quick.png'
import Auction from '../assets/Oau.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-black text-white pt-[300px] pb-[100px]'>

      <div className='max-w-[1024px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8 px-4'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Projects</p>
          <p className='py-6'>These are some of the projects i worked on</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div style={{backgroundImage: `url(${Quicksales})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>

              <span className='text-2xl font-bold tracking-wider'>
                Django Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Marvel2456/Quicksales_updated/tree/auditlog">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
            

          </div>

          <div style={{backgroundImage: `url(${Auction})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>

              <span className='text-2xl font-bold tracking-wider'>
                Django Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>


          </div>

          <div style={{backgroundImage: `url(${Quicksales})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>

              <span className='text-2xl font-bold tracking-wider'>
                <p>Django Application</p>
                <p>username: admin</p>
                <p>password:admin123</p>
              </span>

              <div className='pt-8 text-center'>
                <a href="https://quicksales-2.up.railway.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Marvel2456/Quicksales-2.0">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>


            </div>

          </div>
        
      </div>
      
    </div>
  )
}

export default Projects
