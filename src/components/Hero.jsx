import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { textVariant, fadeIn, staggerContainer } from '../animations/variants';
import { profile } from '../data/profile';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

const TypewriterText = () => {
  const titles = profile.roles;
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => (prev + 1) % titles.length), 3000);
    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-primary inline-block font-bold"
    >
      {titles[index]}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={fadeIn('up', 'tween', 0.1, 0.5)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1 
              variants={textVariant(0.2)}
              className="text-5xl md:text-7xl font-heading font-extrabold leading-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.h2 
              variants={textVariant(0.3)}
              className="text-2xl md:text-3xl font-heading font-medium text-slate-600 dark:text-slate-300 h-10"
            >
              I am a <TypewriterText />
            </motion.h2>

            <motion.p 
              variants={fadeIn('up', 'tween', 0.4, 0.5)}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              {profile.objective}
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.5, 0.5)}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#resume" className="btn-primary group flex items-center gap-2">
                Download Resume
                <FaDownload className="group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
              </a>
              <div className="flex items-center gap-3 ml-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors hover:scale-110">
                  <FaGithub size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors hover:scale-110">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className="relative lg:ml-auto hidden md:block"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary via-secondary to-accent animate-[spin_8s_linear_infinite]">
              <div className="absolute inset-2 bg-background-light dark:bg-background-dark rounded-full overflow-hidden flex items-center justify-center animate-[spin_8s_linear_infinite_reverse]">
                <img 
                  src="/rohan.jpg" 
                  alt={profile.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 -left-12 glass-card px-4 py-3 rounded-2xl flex items-center gap-3"
            >
              <span className="text-2xl">🚀</span>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-slate-900 dark:text-white">5+ Projects</span>
                <span className="text-xs text-slate-500">Built</span>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 -right-8 glass-card px-4 py-3 rounded-2xl flex items-center gap-3"
            >
              <span className="text-2xl">🎓</span>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Projects & Skills</span>
                <span className="text-xs text-slate-500">Earned</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
