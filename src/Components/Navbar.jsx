import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const hanleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-gray-500  flex  justify-between items-center mx-w-[1240px] mx-auto h-24 px-4 text-1 '>
        <img className='h-52 pt-10' src={logo} alt="logo" />
        <ul className='hidden md:flex mr-20'>
            <li className='p-2'>Home</li>
            <li className='p-2'>About</li>
            <li className='p-2'>Resume</li>
            <li className='p-2'>Portofolio</li>
            <li className='p-2'>Contact</li>
        </ul>






        <div onClick={hanleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

        </div>

        <div className= { nav ? 'text-gray-300  fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500  ' 
                                : "fixed left-[-100%]"}>
        <h1 className=' text-3xl primary-color m-4'>Mugo James</h1>
            <ul className='p-8 text-2xl'>
                <li className='p-2'>Home</li>
                <li className='p-2'>Company</li>
                <li className='p-2'>Resources</li>
                <li className='p-2'>About</li>
                <li className='p-2'>Contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
