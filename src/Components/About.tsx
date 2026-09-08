import React from 'react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* Left - Avatar in Star Shape */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 lg:w-56 lg:h-56">
            {/* Star background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-200 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={personalInfo.profileImage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
            {/* JS Badge */}
            <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm">
              JS
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-orange-500">About Me</h2>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">5+</div>
              <p className="text-xs text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">10+</div>
              <p className="text-xs text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">100+</div>
              <p className="text-xs text-gray-600">Projects Done</p>
            </div>
          </div>

          {/* Button */}
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
