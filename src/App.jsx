import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import SocialDock from './components/SocialDock';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative">
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <SocialDock />
          
          <div className="xl:pl-16">
            <main>
              <Hero />
              <About />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <Certifications />
              <Stats />
              <Resume />
              <Contact />
            </main>
            
            <Footer />
          </div>
        </div>
    </>
  );
}

export default App;
