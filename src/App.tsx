import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <About />
          <Skills />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
