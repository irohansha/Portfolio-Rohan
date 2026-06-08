import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experienceData } from '../data/experience';
import { staggerContainer, slideIn } from '../animations/variants';

const Experience = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Career Path</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">
            Experience & Training
          </h3>
        </div>

        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col gap-6"
        >
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              variants={slideIn('right', 'tween', index * 0.2, 0.6)}
              className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors relative overflow-hidden"
            >
              {/* Gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{exp.location}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="text-primary font-semibold">{exp.duration}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 pt-6 md:pt-0 md:pl-8">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <span className="text-accent mt-1 text-lg">✦</span>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
