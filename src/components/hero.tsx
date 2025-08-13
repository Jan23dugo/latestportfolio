import React from 'react';
import { commonAssets } from '../assets';

import profile from '../assets/profile/profile2.png';
const Hero: React.FC = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    if (commonAssets.resumePdf) {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = commonAssets.resumePdf;
      link.download = 'Jan-Lloyd-Dugo-Resume.pdf'; // Filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback if no resume is found
      alert('Resume not available for download at the moment.');
    }
  };

  return (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-12 pt-32 pb-12 gap-8 md:gap-12 lg:gap-20"
    style={{
      background: 'radial-gradient(circle at 28% 50%, rgba(255, 193, 7, 0.10) 0%, rgba(26,26,26,0.98) 55%, rgba(10,10,10,1) 100%)',
    }}
  >
    {/* Left: Image */}
    <div className="flex-1 flex items-center justify-center relative min-w-[320px] max-w-lg">
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={profile}
          alt="Profile"
          className="bg-transparent w-70 h-70 md:w-120 md:h-120 object-contain rounded-none"
        />
      </div>
    </div>

    {/* Right: Text Content */}
    <div className="flex-1 max-w-2xl z-10 flex flex-col justify-center items-start md:items-start">
      <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-8 font-display">
    Hi, I'm Jan Lloyd,
    <span className="block text-white text-4xl md:text-6xl lg:text-6xl font-bold opacity-80 mb-8 font-display">
      a Web Developer
    </span>
  </h1>
  <p className="text-2xl text-white/70 mb-10 max-w-md font-sen">
    Adaptable, eager to learn, and committed to continuous growth and self-improvement.
  </p>
      <div className="flex gap-6">
        <button className="bg-transparent border-2 border-[#8B4513] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#8B4513]/20 transition font-sen">My Projects</button>
        <button 
          onClick={handleDownloadResume}
          className="bg-[#CD853F] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#CD853F]/80 transition flex items-center gap-2 font-sen"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </button>
      </div>
    </div>
  </section>
  );
};

export default Hero;
