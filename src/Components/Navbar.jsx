import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
      <div className='text-light-gray flex justify-between items-center mx-w-[1240px] mx-auto h-24 px-4 text-1'>
        <img className='h-52 pt-10' src={logo} alt="logo" />
        
        <ul className='hidden md:flex mr-20 ease-in-out cursor-pointer'>
          <li className='p-2'>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : 'hover:text-neutral-600 focus:text-light-gray-70'}
            >
              Home
            </NavLink>
          </li>
          <li className='p-2'>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : 'hover:text-light-gray-70 focus:text-light-gray-70'}
            >
              About
            </NavLink>
          </li>
          <li className='p-2'>
            <NavLink
              to="/resume"
              className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : 'hover:text-light-gray-70 focus:text-light-gray-70'}
            >
              Resume
            </NavLink>
          </li>
          <li className='p-2'>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : 'hover:text-light-gray-70 focus:text-light-gray-70'}
            >
              Portfolio
            </NavLink>
          </li>
          <li className='p-2'>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : 'hover:text-light-gray-70 focus:text-light-gray-70'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
  
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
  
        <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-50' : "fixed left-[-100%]"}>
          <h1 className='text-3xl primary-color m-4'>Mugo James</h1>
          <ul className='p-8 text-2xl'>
            <li className='p-2'>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : ''}
              >
                Home
              </NavLink>
            </li>
            <li className='p-2'>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : ''}
              >
                About
              </NavLink>
            </li>
            <li className='p-2'>
              <NavLink
                to="/resume"
                className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : ''}
              >
                Resume
              </NavLink>
            </li>
            <li className='p-2'>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : ''}
              >
                Portfolio
              </NavLink>
            </li>
            <li className='p-2'>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'text-orange-yellow-crayola' : ''}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  