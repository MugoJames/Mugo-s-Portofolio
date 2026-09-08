import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm rounded-3xl mx-4 mt-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-lg text-gray-900">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2">
          {navItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 px-3 py-1 transition-colors"
              >
                {item.label}
              </a>
              {idx < navItems.length - 1 && <div className="w-px h-4 bg-gray-300"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Hire Me Button */}
        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
            Hire Me
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 p-2"
          >
            {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-100 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-700 hover:text-orange-600 py-2 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
