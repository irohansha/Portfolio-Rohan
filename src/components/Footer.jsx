import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-background-dark py-8 border-t border-slate-200 dark:border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left flex flex-col gap-1">
          <a href="#home" className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-1">
            {/* <span className="text-primary">NK</span> */}
            <span>Rohan.dev</span>
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Designed & Developed by Rohan Sha Shaik © {new Date().getFullYear()}
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10 transition-colors"
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
