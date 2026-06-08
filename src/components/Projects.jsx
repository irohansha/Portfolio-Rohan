import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { staggerContainer, fadeIn } from '../animations/variants';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 1)}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full relative glass-card rounded-3xl overflow-hidden group border border-white/10"
      >
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
        
        <div className="p-8 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              {project.type}
            </span>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {project.title}
            </h4>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
            {project.description}
          </p>

          <div className="mb-8">
            <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-3">Key Features</h5>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, fIdx) => (
                <li key={fIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> {feature}
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-sm text-slate-500 italic flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> +{project.features.length - 3} more...
                </li>
              )}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, tIdx) => (
                <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                <FaExternalLinkAlt size={14} /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass-card hover:bg-white/10 transition-colors text-slate-900 dark:text-white font-medium">
                <FaGithub size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative bg-slate-50 dark:bg-transparent border-y border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            A selection of my best work, demonstrating my ability to build complex, full-stack applications from scratch.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
