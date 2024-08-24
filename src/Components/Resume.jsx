import React from 'react';
import { FaMedal } from "react-icons/fa6";

function Resume() {
  return (
    <div className='p-8 bg-eerie-black-2'>
      <div className='text-white p-8'>
        <h1 className='capitalize text-[28px]'>Resume</h1>
        <div className='bg-orange-yellow-crayola w-10 mt-2 h-[5px] rounded-full'></div>
      </div>

      <section className='mb-[50px] pl-8 relative'>
        <div className='absolute top-10 left-[53px] w-[1px] h-[190px] bg-jet'></div>
        <div className='text-white flex items-center gap-[15px] mb-[25px] relative'>
          <div className='bg-border-gradient-onyx text-orange-yellow-crayola w-[40px] h-[40px]  
                          text-[16px] p-1 border border-jet rounded-[8px] shadow-shadow-1 flex items-center justify-center'>
            <span className="material-symbols-outlined">import_contacts</span>
          </div>
          <h3 className='text-[18px] capitalize'>Education</h3>
        </div>

        <ol className='ml-[45px]'>
          <li className='relative mb-[20px]'>
            <div className='absolute w-[10px] h-[10px] bg-orange-yellow-crayola rounded-full left-[-28px] top-[7px]'></div>
            <h4 className='text-[14px] text-white mb-[7px]'>Regional Centre For Mapping Of Resources For Development</h4>
            <span className='text-vegas-gold font-normal'>2021 — 2022</span>
            <p className='mb-[20px] text-light-gray font-light leading-[1.6] pr-40'>
              Completed the International Computer Driving License (ICDL) certification, gaining comprehensive 
              skills in essential computer applications, including word processing, spreadsheets, presentations, and databases. This course enhanced my 
              digital literacy and proficiency in using key software tools efficiently for both personal and professional tasks.
            </p>
          </li>
          <li className='relative'>
            <div className='absolute w-[10px] h-[10px] bg-orange-yellow-crayola rounded-full left-[-28px] top-[7px]'></div>
            <h4 className='text-[14px] text-white mb-[7px]'>Moringa School</h4>
            <span className='text-vegas-gold font-normal'>2024 — 2024</span>
            <p className='mb-[20px] text-light-gray font-light leading-[1.6] pr-40'>
                Completed an intensive software engineering program focused on full-stack development and real-world project experience.
            </p>
          </li>
        </ol>
      </section>

      <section className='mb-[50px] pl-8 relative'>
        <div className='absolute top-10 left-[53px] w-[1px] h-[110px] bg-jet'></div>
        <div className='text-white flex items-center gap-[15px] mb-[25px] relative'>
          <div className='bg-border-gradient-onyx text-orange-yellow-crayola w-[40px] h-[40px]  
                          text-[16px] p-1 border border-jet rounded-[8px] shadow-shadow-1 flex items-center justify-center'>
                <FaMedal/>            
          </div>
          <h3 className='text-[18px] capitalize'>Experience</h3>
        </div>

        <ol className='ml-[45px]'>
          <li className='relative mb-[20px]'>
            <div className='absolute w-[10px] h-[10px] bg-orange-yellow-crayola rounded-full left-[-28px] top-[7px]'></div>
            <h4 className='text-[14px] text-white mb-[7px]'>Web Developer</h4>
            <span className='text-vegas-gold font-normal'>2024 — Present</span>
            <p className='mb-[20px] text-light-gray font-light leading-[1.6] pr-40'></p>
          </li>
          <li className='relative'>
            <div className='absolute w-[10px] h-[10px] bg-orange-yellow-crayola rounded-full left-[-28px] top-[7px]'></div>
            <h4 className='text-[14px] text-white mb-[7px]'>Web Designer</h4>
            <span className='text-vegas-gold font-normal'>2024 — Present</span>
            <p className='mb-[20px]'></p>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Resume;
