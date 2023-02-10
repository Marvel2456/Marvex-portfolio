import React from 'react'
import Marvex from '../assets/marvex__1.jpg'

const About = () => {
  return (
    <div className='w-full bg-gray-300 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto my-4 rounded-md' src={Marvex} alt='/' />
            <div className='flex flex-col justify-center px-6'>
                <p className='text-[#453299] font-bold uppercase mt-4'>About Marvex</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Eseosa Marvellous Idemudia</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                    sometimes by accident, 
                    sometimes on purpose (injected humour and the like).
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 py-3 text-gray-200'>Contact Me</button>
            </div>
        </div>
      
    </div>
  )
}

export default About
