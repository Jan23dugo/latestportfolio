import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { techStack, projects } from '../assets';


const projectsData = [
  {
    id: 1,
    title: "STREAMS",
    description: "STREAMS is a web-based platform developed for the Polytechnic University of the Philippines – College of Computer and Information Sciences to digitize and streamline the registration, administration, and evaluation of qualifying examinations. It features OCR-powered document processing for extracting academic data from transcripts, secure on-site exam access via IP restriction, and a robust admin portal equipped with two-factor authentication, a question bank, analytics, and comprehensive exam management tools.",
    technologies: [
      techStack.php,
      techStack.mysql,
      techStack.html,
      techStack.css,
      techStack.javascript,
    ],
    liveUrl: "#",
    images: [
      projects.streams.homepage,
      projects.streams.studentWelcome,
      projects.streams.adminLogin,
      projects.streams.studentLogin
    ]
  },
  {
    id: 2,
    title: "Dynamic Portfolio Website with Admin Panel",
    description: "This project is a responsive one-page portfolio website designed to showcase personal projects, skills, and achievements in a clean, modern layout. It features an integrated admin panel that allows the site owner to easily update content, such as project details, images, and descriptions without any coding knowledge. Powered by Supabase as the backend, the system ensures secure data storage and enables real-time content updates, so any changes made through the admin panel are instantly reflected on the live website.",
    technologies: [
      techStack.react,
      techStack.javascript,
      techStack.css,
      techStack.html,
      techStack.supabase
    ],
    liveUrl: "#",
    images: [
      projects.web_portfolio.homepage,
      projects.web_portfolio.adminLogin,
      projects.web_portfolio.aboutSection,
      projects.web_portfolio.aboutSection2,
      projects.web_portfolio.servicesSection,
      projects.web_portfolio.resultsSection,
    ]
  },
  {
    id: 3,
    title: "Promotional Game Website",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes project tracking, deadline management, and progress analytics.",
    technologies: [
      techStack.react,
      techStack.typescript,
      techStack.tailwind,
      techStack.react // Using react icon as placeholder for Firebase until you add a Firebase icon
    ],
    liveUrl: "#",
    images: [
      projects.streams.homepage,
      projects.streams.studentWelcome,
      projects.streams.adminLogin,
      projects.streams.studentLogin
    ]
  }
];

const Project: React.FC = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  const currentProjectData = projectsData[currentProject];

  // Auto-advance images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % currentProjectData.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentProject, currentProjectData.images.length]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-12 py-16"
      style={{
        background: 'radial-gradient(circle at 28% 50%, rgba(255, 193, 7, 0.10) 0%, rgba(26,26,26,0.98) 55%, rgba(10,10,10,1) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 mt-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            My Selected Projects
          </h2>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Project Details */}
           <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
         
            {/* Project Title */}
            <h3 className="text-2xl md:text-2xl font-bold text-white font-display">
              {currentProjectData.title}
            </h3>

            {/* Project Description */}
            <p className="text-base text-white/70 leading-relaxed font-sen">
              {currentProjectData.description}
            </p>

                         {/* Technologies Used and Live Site Link */}
             <div className="flex items-center justify-between">
               {/* Technologies Used */}
               <div className="flex items-center gap-3">
                 {currentProjectData.technologies.map((tech, index) => (
                   <div key={index} className="flex items-center gap-1">
                                           <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-5 h-5"
                        style={{ 
                          filter: tech.filter
                        }}
                      />
                   </div>
                 ))}
               </div>

               {/* Live Site Link */}
                               <div className="flex items-center gap-2">
                  <button 
                    onClick={() => navigate(`/project/${currentProjectData.id}`)}
                    className="text-white/80 hover:text-white transition-colors font-sen flex items-center gap-2 group text-sm"
                  >
                    View More Details
                    <span className="text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      ↗
                    </span>
                  </button>
                </div>
             </div>

                                       {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4">
                <button 
                  onClick={prevProject}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {projectsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToProject(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentProject ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextProject}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                  </svg>
                </button>
              </div>
          </div>

                     {/* Right: Image Slideshow */}
           <div className="relative">
             <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                               {/* Image Container */}
                <div className="relative h-80 overflow-hidden rounded-lg">
                 {currentProjectData.images.map((image, index) => (
                   <img
                     key={index}
                     src={image}
                     alt={`Project ${currentProjectData.title} - Image ${index + 1}`}
                                           className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                   />
                 ))}
                 
                                   {/* Image Dots Indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
                   {currentProjectData.images.map((_, index) => (
                     <div
                       key={index}
                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
                         index === currentImageIndex 
                           ? 'bg-white scale-125' 
                           : 'bg-white/50 scale-100'
                       }`}
                     />
                   ))}
                 </div>
               </div>
               
               {/* Project Info Overlay */}
               <div className="mt-4 text-center">
                 <div className="text-white/80 text-sm font-sen">
                   {currentImageIndex + 1} of {currentProjectData.images.length} images
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
