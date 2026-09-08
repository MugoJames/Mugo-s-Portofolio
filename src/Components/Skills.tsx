import React from 'react';

const Skills: React.FC = () => {
  const skillsToDisplay = [
    { name: 'Illustrator', color: 'bg-orange-500', icon: '🎨' },
    { name: 'Figma', color: 'bg-purple-500', icon: '✨' },
    { name: 'Adobe XD', color: 'bg-pink-500', icon: '🎭' },
    { name: 'React', color: 'bg-blue-500', icon: '⚛️' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500', icon: '🎨' },
    { name: 'Bootstrap', color: 'bg-purple-600', icon: '📦' },
    { name: 'Python', color: 'bg-blue-600', icon: '🐍' },
    { name: 'Vue.js', color: 'bg-green-500', icon: '💚' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-10">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">My Skills</h2>
        <p className="text-gray-600 text-sm">
          Technologies and tools I use consistently
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4">
          {skillsToDisplay.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 ${skill.color} rounded flex items-center justify-center text-white text-xs font-bold`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
              </div>
              <div className={`h-1.5 rounded-full ${skill.color} opacity-75`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
