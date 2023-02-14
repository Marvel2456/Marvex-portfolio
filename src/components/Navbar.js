import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/EI.png'
import {Link} from 'react-scroll'

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
        <li className='p-4 cursor-pointer'>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    
      
      {/* Hamburger */}

      <div onClick={handleNav} className='md:hidden z-10'>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }

      </div>
      
      {/* mobile menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleNav} to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleNav} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
            <a className='flex justify-between items-center w-full' href='https://github.com/Marvel2456'>
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
