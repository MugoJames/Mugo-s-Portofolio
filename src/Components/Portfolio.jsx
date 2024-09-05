import React, { useState } from 'react';
import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import design1 from "../assets/Design1.jpeg"
import design2 from "../assets/Design2.jpeg"
import project3 from "../assets/Project3.png"
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('WebDevelopment');

  const renderContent = () => {
    switch (activeTab) {
      case 'WebDesign':
        return (
          <div className='bg-eerie-black-2 lg:flex lg:grid-cols-2'>
            <div className='gap-10 p-5  '>
              <div className=''>
                <img src={design2} alt="project1" className='h-[300px] w-[500px] rounded-lg' />
              </div>
              <div className='text-white-2 pt-4 '>
                <h1 className='text-[19px] font-normal '>Adventure</h1>
                <p className='text-light-gray-70 text-[14px] font-light '>Adventure-focused, immersive design with intuitive navigation.</p>
              </div>
            </div>
            <div className='gap-10 p-5  '>
              <div className=''>
                <img src={design1} alt="project1" className='h-[300px] w-[500px] rounded-lg' />
              </div>
              <div className='text-white-2 pt-4 '>
                <h1 className='text-[19px] font-normal '>Real Factory</h1>
                <p className='text-light-gray-70 text-[14px] font-light '>Tailored WordPress theme for industrial business websites.</p>
              </div>
            </div>
            
          </div>
        );
          default:
        return (
          <div className='bg-eerie-black-2 lg:flex lg:flex-wrap'>
            <div className='gap-10 p-5'>
              <div className=''>
                <img src={project2} alt="project1" className='h-[300px] w-[500px] rounded-lg' />
              </div>
              <div className='text-white-2 pt-4 '>
                <h1 className='text-[19px] font-normal '>Coffee</h1>
                <p className='text-light-gray-70 text-[14px] font-light '>An Elegant coffee website for coffee lovers.</p>

              </div>
            </div>
            <div className='gap-10 p-5'>
              <div className=''>
                <img src={project1} alt="project1" className='h-[300px] w-[500px] rounded-lg' />
              </div>
              <div className='text-white-2 pt-4 '>
                <h1 className='text-[19px] font-normal '>Skull-Fitness</h1>
                <p className='text-light-gray-70 text-[14px] font-light '> A Dynamic gym website for fitness enthusiasts.</p>
              </div>
            </div>
            <div className='gap-10 p-5'>
              <div className=''>
                <img src={project3} alt="project1" className='h-[300px] w-[500px] rounded-lg' />
              </div>
              <div className='text-white-2 pt-4 '>
                <h1 className='text-[19px] font-normal '>KYR-Africa(Know your rights)</h1>
                <p className='text-light-gray-70 text-[14px] font-light '> A company project aimed at providing user-friendly and affordable access to justice education and advice on individual freedoms and rights. </p>
              </div>
            </div>

          </div>
        );
    }
  };

  return (
    <div>
      <div className='text-white p-8'>
        <h1 className='capitalize text-[28px]'>Portfolio</h1>
        <div className='bg-orange-yellow-crayola w-10 mt-2 h-[5px] rounded-full'></div>
      </div>

      <div className='flex space-x-4 p-4'>
        <button
          className={`p-2 ${activeTab === 'WebDevelopment' ? 'text-vegas-gold' : 'text-light-gray'} text-light-gray font-normal`}
          onClick={() => setActiveTab('WebDevelopment')}
        >
          Web Development
        </button>
        <button
          className={`p-2 ${activeTab === 'WebDesign' ? 'text-vegas-gold' : 'text-light-gray'} text-light-gray font-normal`}
          onClick={() => setActiveTab('WebDesign')}
        >
          Web Design
        </button>
      </div>

      <div className='p-4'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Portfolio;
