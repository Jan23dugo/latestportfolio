import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import TechStack from './components/tech_stack';
import Project from './components/project';
import Contact from './components/contact';
import ProjectDetails from './components/project-details';
import Footer from './components/footer';

// Home page component
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
