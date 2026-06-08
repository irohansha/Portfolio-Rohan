import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certificationsData } from '../data/certifications';
import { staggerContainer, fadeIn } from '../animations/variants';

const Certifications = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Achievements</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">
            Certifications
          </h3>
        </div>

        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeIn('up', 'spring', index * 0.2, 1)}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group text-center flex flex-col items-center justify-center border border-white/5"
            >
              {/* Glow effect */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 ${cert.bgColor} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-20 h-20 rounded-2xl ${cert.bgColor} border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                <cert.icon size={36} className={`${cert.color}`} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{cert.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold relative z-10">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
