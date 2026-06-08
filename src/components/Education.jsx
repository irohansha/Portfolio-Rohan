import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { educationData } from '../data/education';

const Education = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="education" className="py-24 relative bg-slate-50 dark:bg-transparent">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Academic Journey</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">
            Education
          </h3>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2 origin-top rounded-full"
          />

          <div className="flex flex-col gap-12">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-center md:justify-between flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="absolute left-[-5px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                />

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.4), type: 'spring' }}
                  className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                >
                  <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
                      {edu.duration}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h4>
                    <h5 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-1">{edu.institution}</h5>
                    <p className="text-sm text-slate-500 mb-4">{edu.location}</p>
                    <div className="inline-block px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10">
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
                
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
