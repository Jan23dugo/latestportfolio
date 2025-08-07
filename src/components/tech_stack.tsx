import React, { useRef, useEffect } from 'react';

// Import your icon files (adjust paths as needed)
import reactIcon from '../assets/icons/react.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import htmlIcon from '../assets/icons/html5.svg';
import cssIcon from '../assets/icons/css.svg';
import phpIcon from '../assets/icons/php.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import supabaseIcon from '../assets/icons/supabase.svg';

const techStack = [
  { 
    name: 'React', 
    icon: <img src={reactIcon} alt="React" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1190%) hue-rotate(169deg) brightness(101%) contrast(97%)' }} />,
    color: '#61DAFB'
  },
  { 
    name: 'TypeScript', 
    icon: <img src={typescriptIcon} alt="TypeScript" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(212deg) brightness(97%) contrast(86%)' }} />,
    color: '#3178C6'
  },
  { 
    name: 'Tailwind', 
    icon: <img src={tailwindIcon} alt="Tailwind CSS" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(55%) sepia(96%) saturate(1206%) hue-rotate(164deg) brightness(95%) contrast(84%)' }} />,
    color: '#06B6D4' 
  },
  { 
    name: 'JavaScript', 
    icon: <img src={javascriptIcon} alt="JavaScript" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(83%) sepia(83%) saturate(2496%) hue-rotate(2deg) brightness(101%) contrast(102%)' }} />,
    color: '#F7DF1E'
  },
  { 
    name: 'HTML', 
    icon: <img src={htmlIcon} alt="HTML" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(95%) saturate(1464%) hue-rotate(355deg) brightness(100%) contrast(97%)' }} />,
    color: '#E34F26'
  },
  { 
    name: 'CSS', 
    icon: <img src={cssIcon} alt="CSS" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(94%) saturate(1566%) hue-rotate(197deg) brightness(97%) contrast(97%)' }} />,
    color: '#1572B6'
  },
  { 
    name: 'PHP', 
    icon: <img src={phpIcon} alt="PHP" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(51%) sepia(12%) saturate(2264%) hue-rotate(214deg) brightness(97%) contrast(95%)' }} />,
    color: '#777BB4'
  },
  { 
    name: 'MySQL', 
    icon: <img src={mysqlIcon} alt="MySQL" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(55%) saturate(1464%) hue-rotate(197deg) brightness(94%) contrast(92%)' }} />,
    color: '#4479A1'
  },
  { 
    name: 'Supabase', 
    icon: <img src={supabaseIcon} alt="Supabase" className="w-10 h-10" style={{ filter: 'brightness(0) saturate(100%) invert(62%) sepia(67%) saturate(434%) hue-rotate(122deg) brightness(100%) contrast(89%)' }} />,
    color: '#3ECF8E'
  },
];

const TechStack: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    let isHovered = false;

    const animate = () => {
      if (!isHovered) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="techstack"
      className="w-full py-24 px-4 md:px-12 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 28% 50%, rgba(255, 193, 7, 0.10) 0%, rgba(26,26,26,0.98) 55%, rgba(10,10,10,1) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Tech Stack
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-sen">
            Technologies I use to build modern, scalable web applications.
          </p>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-hidden cursor-pointer"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* First set of items */}
          {techStack.map((tech, index) => (
            <div 
              key={`first-${index}`}
              className="flex-shrink-0 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 min-w-[200px]"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-white text-lg font-semibold font-sen hover:text-white/90 transition-colors">
                  {tech.name}
                </span>
              </div>
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${tech.color}20 0%, transparent 100%)`,
                  borderColor: `${tech.color}40`
                }}
              ></div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => (
            <div 
              key={`second-${index}`}
              className="flex-shrink-0 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 min-w-[200px]"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-white text-lg font-semibold font-sen hover:text-white/90 transition-colors">
                  {tech.name}
                </span>
              </div>
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${tech.color}20 0%, transparent 100%)`,
                  borderColor: `${tech.color}40`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
