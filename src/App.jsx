import { useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import './style.css';

export default function App() {
  useEffect(() => {
    // Retain legacy interactions during this safe structural migration.
    // The script can be migrated section-by-section to React handlers without changing the design.
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = false;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
