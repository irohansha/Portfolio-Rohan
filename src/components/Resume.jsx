import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeIn } from '../animations/variants';
import resumeFile from '../assets/Rohan_Resume.pdf';

const Resume = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="resume" className="py-24 relative bg-primary/5 dark:bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          ref={ref}
          variants={fadeIn('up', 'tween', 0.2, 0.8)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
              <FaFilePdf size={40} />
            </div>
            
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              My Resume
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl">
              View my full qualifications, extensive project history, and comprehensive technical skill set in my detailed resume.
            </p>
            
            <a 
              href={resumeFile} 
              download="Rohan_Resume.pdf"
              target="_blank" 
              rel="noreferrer"
              className="btn-primary group flex items-center gap-3 text-lg px-8 py-4"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
