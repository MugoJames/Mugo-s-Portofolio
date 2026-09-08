import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-10">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id} className="space-y-3">
              {/* Project Image */}
              <div className="relative h-32 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Description */}
              <p className="text-xs text-gray-600 line-clamp-2">{project.description}</p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors text-xs"
              >
                View Project
                <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {projects.length > 4 && (
          <button className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm">
            View All Projects
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
