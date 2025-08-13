/**
 * Central Assets Loader
 * This file uses import.meta.glob to load all assets and organize them by category
 * Import this file anywhere you need to access assets in a structured way
 */

// Type definitions for better TypeScript support
export interface TechIcon {
  name: string;
  icon: string;
  color: string;
  filter: string;
}

export interface AssetModule {
  [key: string]: string;
}

// Load all assets using import.meta.glob
const iconModules = import.meta.glob<string>('./icons/*.svg', { eager: true, query: '?url', import: 'default' });
const projectModules = import.meta.glob<string>('./projects/**/*.png', { eager: true, query: '?url', import: 'default' });
const profileModules = import.meta.glob<string>('./profile/*.png', { eager: true, query: '?url', import: 'default' });
const fontModules = import.meta.glob<string>('./fonts/*.woff', { eager: true, query: '?url', import: 'default' });
const svgModules = import.meta.glob<string>('./*.svg', { eager: true, query: '?url', import: 'default' });
const resumeModules = import.meta.glob<string>('./resume/*.pdf', { eager: true, query: '?url', import: 'default' });

// Helper function to extract filename without extension
const getAssetName = (path: string): string => {
  const filename = path.split('/').pop() || '';
  return filename.replace(/\.[^/.]+$/, '');
};

// Helper function to organize modules by name
const organizeModules = (modules: Record<string, string>): Record<string, string> => {
  const organized: Record<string, string> = {};
  Object.entries(modules).forEach(([path, url]) => {
    const name = getAssetName(path);
    organized[name] = url;
  });
  return organized;
};

// Organize assets by category
export const icons = organizeModules(iconModules);
export const fonts = organizeModules(fontModules);
export const profile = organizeModules(profileModules);
export const svgAssets = organizeModules(svgModules);
export const resume = organizeModules(resumeModules);

// Organize project images by project folder
export const projects = {
  streams: organizeModules(
    Object.fromEntries(
      Object.entries(projectModules).filter(([path]) => path.includes('/streams/'))
    )
  ),
  web_portfolio: organizeModules(
    Object.fromEntries(
      Object.entries(projectModules).filter(([path]) => path.includes('/web_portfolio/'))
    )
  ),
  ojt: organizeModules(
    Object.fromEntries(
      Object.entries(projectModules).filter(([path]) => path.includes('/ojt/'))
    )
  )
};

// Tech stack configuration with icons and styling
export const techStack: Record<string, TechIcon> = {
  react: {
    name: 'React',
    icon: icons.react,
    color: '#61DAFB',
    filter: 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1190%) hue-rotate(169deg) brightness(101%) contrast(97%)'
  },
  typescript: {
    name: 'TypeScript',
    icon: icons.typescript,
    color: '#3178C6',
    filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(212deg) brightness(97%) contrast(86%)'
  },
  javascript: {
    name: 'JavaScript',
    icon: icons.javascript,
    color: '#F7DF1E',
    filter: 'brightness(0) saturate(100%) invert(83%) sepia(83%) saturate(2496%) hue-rotate(2deg) brightness(101%) contrast(102%)'
  },
  html: {
    name: 'HTML',
    icon: icons.html5,
    color: '#E34F26',
    filter: 'brightness(0) saturate(100%) invert(35%) sepia(95%) saturate(1464%) hue-rotate(355deg) brightness(100%) contrast(97%)'
  },
  css: {
    name: 'CSS',
    icon: icons.css,
    color: '#1572B6',
    filter: 'brightness(0) saturate(100%) invert(28%) sepia(94%) saturate(1566%) hue-rotate(197deg) brightness(97%) contrast(97%)'
  },
  php: {
    name: 'PHP',
    icon: icons.php,
    color: '#777BB4',
    filter: 'brightness(0) saturate(100%) invert(51%) sepia(12%) saturate(2264%) hue-rotate(214deg) brightness(97%) contrast(95%)'
  },
  mysql: {
    name: 'MySQL',
    icon: icons.mysql,
    color: '#4479A1',
    filter: 'brightness(0) saturate(100%) invert(34%) sepia(55%) saturate(1464%) hue-rotate(197deg) brightness(94%) contrast(92%)'
  },
  tailwind: {
    name: 'Tailwind',
    icon: icons.tailwind,
    color: '#06B6D4',
    filter: 'brightness(0) saturate(100%) invert(55%) sepia(96%) saturate(1206%) hue-rotate(164deg) brightness(95%) contrast(84%)'
  },
  supabase: {
    name: 'Supabase',
    icon: icons.supabase,
    color: '#3ECF8E',
    filter: 'brightness(0) saturate(100%) invert(69%) sepia(84%) saturate(542%) hue-rotate(115deg) brightness(96%) contrast(87%)'
  }
};

// Quick access to commonly used assets
export const commonAssets = {
  // Profile images
  profilePic: profile.profile,
  profilePic1: profile.profile1,
  profilePic2: profile.profile2,
  profilePicMain: profile.profilepic1,

  // Common SVGs
  blob: svgAssets['blob-haikei'],
  upArrow: svgAssets['up-right-arrow'],
  reactLogo: svgAssets.react,

  // Fonts
  senRegular: fonts['Sen-Regular'],
  senBold: fonts['Sen-Bold'],
  senExtraBold: fonts['Sen-ExtraBold'],

  // Resume
  resumePdf: resume.resume || resume['Jan-Lloyd-Dugo-Resume'] || Object.values(resume)[0] // Flexible resume naming
};

// Helper function to get tech stack by names
export const getTechStack = (techNames: string[]): TechIcon[] => {
  return techNames.map(name => techStack[name.toLowerCase()]).filter(Boolean);
};

// Helper function to get project images
export const getProjectImages = (projectName: keyof typeof projects): string[] => {
  const projectImages = projects[projectName];
  return Object.values(projectImages);
};

// Export all assets for direct access if needed
export const allAssets = {
  icons,
  projects,
  profile,
  fonts,
  svgAssets,
  resume,
  techStack,
  commonAssets
};

// Default export with all organized assets
export default allAssets;
