import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import portofolio from '../assets/portofolio.jpeg';

function Hero() {
  return (
    <div className=''>
        <div className="bg-eerie-black-2 flex flex-col-reverse lg:flex-row justify-center items-center text-white p-20 gap-8 lg:gap-48">
            {/* Left side with the image */}
            <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold">Hi! I'm <span>Mugo James</span> </h4>
                <h3 className='font-normal'>A Full-Stack Web Developer.</h3>
                <h1 className='text-2xl max-w-lg mx-auto'>I turn idea's into interactive experiences, one line of code at a time.</h1>
                <div className="flex flex-col">
                    <div className="flex mt-4">
                       <a href="#" className="shadow-shadow-1 bg-border-gradient-onyx p-3 text-2xl mx-2 text-orange-yellow-crayola rounded-lg cursor-pointer"><AiFillLinkedin /></a>
                       <a href="#" className="shadow-shadow-1 bg-border-gradient-onyx p-3 text-2xl mx-2 text-orange-yellow-crayola rounded-lg cursor-pointer"><AiFillGithub /></a>
                       <a href="#" className="shadow-shadow-1 bg-border-gradient-onyx p-3 text-2xl mx-2 text-orange-yellow-crayola rounded-lg cursor-pointer"><AiFillInstagram /></a>
                    </div>
                    <button className='bg-onyx text-[11px] rounded-full p-3 mt-4 w-32 hover:bg-customGray'>Let's Connect</button>
                </div>
            </div>
            {/* Right side with the image */}
            <div className="flex flex-col items-center lg:mr-8 gap-4">
                <img className="rounded-full lg:w-80 lg:h-80 md:h-64 md:w-64 h-40 w-40 object-cover -rotate-45" src={portofolio} alt="portofolio" />
            </div>
        </div>
    </div>
  );
}

export default Hero;
