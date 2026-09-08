import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/90 text-white py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Mugo James. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Built with React + TypeScript + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
