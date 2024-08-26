import React from 'react'
import { FaLaptopCode,FaDatabase,FaCodeBranch } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

function About() {
  return (
    <div className='p-8 text-white bg-eerie-black-2'>
      <div className='text-white p-8'>
        <h1 className='capitalize text-[28px]'>About Me</h1>
        <div className='bg-orange-yellow-crayola w-10 mt-2 h-[5px] rounded-full'></div>
      </div>
      <div className='p-4'>
        <h2 className='text-[23px]'>👋 Hi there!</h2>
        <p className='text-start mx-auto pr-80 text-[16px] text-light-gray p-4 font-normal'>
          I'm a passionate and motivated <span className='text-vegas-gold font-normal'>Junior Full-stack Developer</span> with a strong hold on front-end development and a growing expertise in backend technologies. I thrive on creating engaging and responsive user interfaces while continuously improving my server-side development skills.
        </p>
        <p className='pt-4 pr-80 text-[16px] text-light-gray p-4 font-normal'>
          My job is to develop your applications to be functional, user-friendly, and visually appealing. I ensure that every project I work on has a personal touch, making it both eye-catching and easy to use. My goal is to effectively communicate your message and identity through innovative and creative solutions. I have had the opportunity to contribute to various projects, enhancing the digital presence of multiple companies.
        </p>
      </div>

      <div className='text-light-gray p-4'>
        <h2 className='text-[23px] text-white'>🚀 What I Do!</h2>
        <ul className='grid grid-cols-3 gap-[20px]'>
          <li className='bg-border-gradient-onyx shadow-shadow-2 relative rounded-[14px] p-[20px] flex z-1 before:bg-bg-gradient-jet border border-jet'>
            <div className='mb-[10px] p-4 text-orange-yellow-crayola '>
              <FaLaptopCode className='text-7xl' />
            </div>
            <div className=' p-4 '>
              <h4 className='mb-[4px] text-white text-[18px] capitalize'>Frontend Development</h4>
              <p className='text-[14px] leading-custom'>
                Building responsive and intuitive interfaces using React, Tailwind CSS, and JavaScript.
              </p>
            </div>
          </li>

          <li className='bg-border-gradient-onyx shadow-shadow-2 relative rounded-[14px] p-[20px] flex z-1 border border-jet '>
            <div className='mb-[10px] p-4 text-orange-yellow-crayola '>
              <AiOutlineApi className='text-7xl' />
            </div>
            <div className='p-4'>
                <h4 className='mb-[4px] text-white text-[18px] capitalize'>Backend Development</h4>
                <p className='text-[14px] leading-custom'>
                  Developing scalable APIs and server-side logic using Flask and Node.js.
                </p>
            </div>
          </li>

          <li className='bg-border-gradient-onyx shadow-shadow-2 relative rounded-[14px] p-[20px] flex z-1 border border-jet'>
            <div className='mb-[10px] p-4 text-orange-yellow-crayola '>
              <FaDatabase className='text-7xl' />
            </div>
            <div className='p-4'>
                <h4 className='mb-[4px] text-white text-[18px] capitalize'>Database Management</h4>
                <p className='text-[14px] leading-custom'>
                    Designing and optimizing databases using PostgreSQL and MySQL for efficient querying.
                </p>
            </div>
          </li>

          <li className='bg-border-gradient-onyx shadow-shadow-2 relative rounded-[14px] p-[20px] flex z-1 border border-jet'>
            <div className='mb-[10px] p-4 text-orange-yellow-crayola '>
              <FaCodeBranch className='text-7xl' />
            </div>
            <div className='p-4'>
                <h4 className='mb-[4px] text-white text-[18px] capitalize'>Version Control</h4>
                <p className='text-[14px] leading-custom'>
                    Managing code versions and collaborating effectively with Git and GitHub.
                </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default About;
