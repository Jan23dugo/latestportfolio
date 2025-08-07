import React from 'react';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-45 backdrop-blur-lg px-20 py-8 flex items-center justify-between">
    {/* Logo */}
    <div className="font-bold text-lg tracking-wide text-white">JD</div>
    {/* Nav Links */}
    <div className="hidden md:flex gap-8 text-white font-medium">
      <a href="#home" className="navbar-link no-underline hover:text-white transition">Home</a>
      <a href="#techstack" className="navbar-link hover:text-white transition">Tech Stack</a>
      <a href="#projects" className="navbar-link hover:text-white transition">Featured Projects</a>
      <a href="#education" className="navbar-link hover:text-white transition">Education</a>
      <a href="#contact" className="navbar-link hover:text-white transition">Contact</a>
    </div>
   
  </nav>
);

export default Navbar;
