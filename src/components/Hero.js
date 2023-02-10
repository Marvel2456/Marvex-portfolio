import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#453299] font-bold p-2 text-2xl'>CREATIVE PERSONALITY</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Experienced Developer</h1>
            <div className='flex justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>With experience in</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={[
                    'Html', 'Css', 'Javascript', 'Bootstrap', 'Tailwind', 'React Js', 'Django', 'DRF', 'Mysql', 'Postgresql'
                    ]} typeSpeed={60} backSpeed={80} loop 
                />
            </div>
            <p className='text-gray-500 pt-4'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            <button className='bg-[#4f30d9] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero
