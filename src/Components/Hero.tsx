import React from 'react';
import {
  AiFillInstagram,
  AiFillGithub,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center min-h-96">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <AiFillInstagram className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <BsTiktok className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <AiFillGithub className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <AiOutlineYoutube className="text-lg" />
            </a>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Hi, I'm {personalInfo.name}
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {personalInfo.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm">
              <span>⬇</span> Download CV
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm">
              💬 Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="relative flex justify-center items-center h-96 lg:h-full">
          {/* Floating badges */}
          <div className="absolute top-4 right-8 bg-purple-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-sm shadow-lg animate-bounce">
            Hi
          </div>

          <div className="absolute top-20 -right-2 bg-orange-400 text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xs shadow-lg">
            AI
          </div>

          <div className="absolute bottom-24 left-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ◉
          </div>

          <div className="absolute bottom-12 right-4 bg-purple-600 text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xs shadow-lg">
            Pr
          </div>

          {/* Avatar Image */}
          <div className="relative z-10 w-64 h-72 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-xl">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
