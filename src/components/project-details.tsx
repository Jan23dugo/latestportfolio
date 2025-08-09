import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { techStack, projects } from '../assets';

// Project data (should match your main project data)
const projectsData = [
  {
    id: 1,
    title: "STREAMS - STUDENT REGISTRATION, EXAMINATION, AND MANAGEMENT SYSTEM PORTAL",
    overview: {
      role: "Full Stack Developer",
      timeline: "2025",
      status: "In Development",
      description: "STREAMS is a web-based platform developed for the Polytechnic University of the Philippines – College of Computer and Information Sciences to digitize and streamline the registration, administration, and evaluation of qualifying examinations. It features OCR-powered document processing for extracting academic data from transcripts, secure on-site exam access via IP restriction, and a robust admin portal equipped with two-factor authentication, a question bank, analytics, and comprehensive exam management tools."
    },
    technologies: [
      techStack.php,
      techStack.mysql,
      techStack.html,
      techStack.css,
      techStack.javascript,
    ],
    features: [
      "Automated Document Processing – Eliminates manual TOR data entry through Azure-powered OCR.",
      "Security-First Approach – Implements IP-based restrictions, 2FA for admins, and controlled on-site exam access.",
      "Efficiency & Organization – Centralized question bank, automated student verification, and analytics tools for performance tracking.",
      "Transparency for Students – Clear status updates and results via the student portal."
    ],
         challenges: [
       "Manual registration, document verification, and exam administration caused delays and inefficiencies.",
       "High risk of human error in processing student records.",
       "Lack of clear communication on application status for students.",
       "Time-consuming paper-based document handling for administrators."
     ],
     solutions: [
       "OCR-powered registration for fast and accurate TOR data extraction.",
       "Secure on-site exam access using IP restrictions to prevent off-campus exam attempts.",
       "Two-factor authentication (2FA) for enhanced admin account security.",
       "Centralized question bank for efficient exam creation and reusability."
     ],
    liveUrl: "https://pupstreams.website/",
    githubUrl: "#",
    images: [
      projects.streams.homepage,
      projects.streams.studentWelcome,
      projects.streams.adminLogin,
      projects.streams.studentLogin
    ],
    duration: "3 months",
    role: "Full-Stack Developer",
    teamSize: "Capstone Project"
  },
  {
    id: 2,
    title: "Website Portfolio with Admin",
    overview: {
      role: "Full Stack Developer",
      timeline: "2025",
      status: "Completed",
      description: "This project is a responsive one-page portfolio website designed to showcase personal projects, skills, and achievements in a clean, modern layout. It features an integrated admin panel that allows the site owner to easily update content—such as project details, images, and descriptions—without any coding knowledge. Powered by Supabase as the backend, the system ensures secure data storage and enables real-time content updates, so any changes made through the admin panel are instantly reflected on the live website."
    },
    technologies: [
      techStack.react,
      techStack.javascript,
      techStack.css,
      techStack.html,
      techStack.supabase
    ],
    features: [
      "One-page portfolio layout — clean and professional design.",
      "Admin panel — full content management without touching the code.",
      "Supabase backend — scalable, secure, and API-driven data handling.",
      "Dynamic rendering — portfolio content updates instantly after edits.",
            "Authentication — secure owner-only access to admin tools."
     ],
    liveUrl: "#",
    githubUrl: "#",
    images: [
      projects.web_portfolio.homepage,
      projects.web_portfolio.adminLogin,
      projects.web_portfolio.aboutSection,
      projects.web_portfolio.aboutSection2,
      projects.web_portfolio.servicesSection,
      projects.web_portfolio.projectsSection,
      projects.web_portfolio.projectsSection2,
      projects.web_portfolio.resultsSection,
      projects.web_portfolio.toolsSection,
      projects.web_portfolio.homeContent,
      
      


    ],
    duration: "2 months",
    role: "Full-Stack Developer",
    teamSize: "Solo Project"
  },
  {
    id: 3,
    title: "Promotional Game Website",
    overview: {
      role: "Frontend Developer",
      timeline: "2024",
      status: "Completed",
      description: "An engaging promotional website designed to showcase and promote a mobile game, featuring interactive elements, smooth animations, and real-time user engagement tracking. The project combines creative design with functional features to create an immersive user experience."
    },
    technologies: [
      techStack.react,
      techStack.typescript,
      techStack.tailwind,
    ],
    features: [
      "Interactive Game Previews",
      "User Registration System",
      "Real-time Statistics",
      "Social Media Integration",
      "Newsletter Subscription",
      "Analytics Dashboard",
      "Mobile Gaming Experience",
      "Conversion Optimization"
    ],
         challenges: [
       "Creating engaging interactive elements for game promotion",
       "Implementing real-time statistics and user tracking",
       "Optimizing for mobile gaming audience",
       "Integrating with multiple social media platforms"
     ],
     solutions: [
       "Built interactive game previews with smooth animations and particle effects",
       "Implemented real-time analytics dashboard with live user tracking",
       "Optimized for mobile devices with touch-friendly controls and responsive design",
       "Integrated social media APIs for seamless sharing and community features"
     ],
    liveUrl: "#",
    githubUrl: "#",
    images: [
      projects.streams.homepage,
      projects.streams.studentWelcome,
      projects.streams.adminLogin,
      projects.streams.studentLogin
    ],
    duration: "1.5 months",
    role: "Frontend Developer",
    teamSize: "3 developers"
  }
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Find the project by ID
  const project = projectsData.find(p => p.id === parseInt(id || '1'));

  // Redirect to home if project not found
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  // Auto-advance images every 4 seconds
  useEffect(() => {
    if (!project) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % project.images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return null;
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (!thumbnailsRef.current) return;
    
    // Calculate scroll amount based on thumbnail width + gap (80px + 12px gap = 92px per thumbnail)
    const thumbnailWidth = 92;
    const visibleThumbnails = Math.floor(thumbnailsRef.current.clientWidth / thumbnailWidth);
    const scrollAmount = thumbnailWidth * Math.max(1, visibleThumbnails - 1);
    
    const currentScroll = thumbnailsRef.current.scrollLeft;
    
    if (direction === 'left') {
      thumbnailsRef.current.scrollTo({
        left: Math.max(0, currentScroll - scrollAmount),
        behavior: 'smooth'
      });
    } else {
      thumbnailsRef.current.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'radial-gradient(circle at 28% 50%, rgba(255, 193, 7, 0.10) 0%, rgba(26,26,26,0.98) 55%, rgba(10,10,10,1) 100%)',
      }}
    >
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Back to Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        {/* Project Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
            {project.title}
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column: Image Gallery */}
          <div className="h-fit">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 font-display">Project Gallery</h2>
              
              {/* Main Image */}
              <div className="relative h-96 overflow-hidden rounded-lg mb-0">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={() => scrollThumbnails('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Scroll thumbnails left"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>

                {/* Thumbnail Container */}
                <div 
                  ref={thumbnailsRef}
                  className="flex gap-3 overflow-x-auto scrollbar-hide px-10 py-2"
                >
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-white scale-105' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollThumbnails('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Scroll thumbnails right"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="h-fit">
            {/* Project Overview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
              <h2 className="text-2xl font-bold text-white mb-4 font-display">Project Overview</h2>
              
              {/* Overview Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-white/50 font-semibold min-w-[80px]">Role:</span>
                  <span className="text-white font-sen">{project.overview.role}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/50 font-semibold min-w-[80px]">Timeline:</span>
                  <span className="text-white font-sen">{project.overview.timeline}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/50 font-semibold min-w-[80px]">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.overview.status === 'In Development' 
                      ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                      : 'bg-green-400/20 text-green-400 border border-green-400/30'
                  }`}>
                    {project.overview.status}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="text-white/50 font-semibold block mb-2">Overview:</span>
                  <p className="text-white/70 font-sen leading-relaxed">
                    {project.overview.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Technologies Used */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white font-display force-mb-8" style={{ marginBottom: '2rem' }}>Technologies Used</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-8 h-8"
                    style={{ filter: tech.filter }}
                  />
                  <span className="text-white font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 font-display">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

                 {/* Challenges & Solutions - Only show if project has challenges and solutions */}
         {project.challenges && project.solutions && (
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
             {/* Challenges */}
             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
               <h2 className="text-2xl font-bold text-white mb-4 font-display">Challenges</h2>
               <ul className="space-y-3">
                 {project.challenges.map((challenge, index) => (
                   <li key={index} className="flex items-start gap-3 text-white/70">
                     <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                     <span className="leading-relaxed">{challenge}</span>
                   </li>
                 ))}
               </ul>
             </div>
   
             {/* Solutions */}
             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
               <h2 className="text-2xl font-bold text-white mb-4 font-display">Solutions</h2>
               <ul className="space-y-3">
                 {project.solutions.map((solution, index) => (
                   <li key={index} className="flex items-start gap-3 text-white/70">
                     <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 mt-2"></div>
                     <span className="leading-relaxed">{solution}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={project.liveUrl}
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-lg transition-colors group"
          >
            View Live Site
            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
          <a
            href={project.githubUrl}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border border-white/20 transition-colors group"
          >
            View Source Code
            <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;