import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/EI.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
      <div>
        <img src={Logo} alt='Logo image' style={{width: '80px'}} />
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Experience</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Contact</li>
      </ul>
    
      
      {/* Hamburger */}

      <div onClick={handleNav} className='md:hidden z-10'>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
        
      </div>
      
      {/* mobile menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 px-4'>
            <a className='flex justify-between items-center w-full' href='/'>
              Linkedin<AiOutlineLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333] px-4'>
            <a className='flex justify-between items-center w-full' href='/'>
              Github<AiOutlineGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fce20] px-4'>
            <a className='flex justify-between items-center w-full' href='/'>
              Email<HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#555754] px-4'>
            <a className='flex justify-between items-center w-full' href='/'>
              Resume<BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar
