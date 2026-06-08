import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { profile } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-[#070b15] py-16 border-t border-slate-200 dark:border-slate-800/60 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          
          {/* Column 1: Info & Tagline */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 group w-fit">
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text font-extrabold">{profile.initials}</span>
              <span className="text-xl font-semibold hover:text-primary transition-colors">Rohan.dev</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              Motivated Software Engineer building highly performant web applications with modern design, responsive interfaces, and robust architectures.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a 
                href={profile.github} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full glass-card border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary dark:hover:text-primary hover:scale-110 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full glass-card border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary dark:hover:text-primary hover:scale-110 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href={`mailto:${profile.email}`} 
                aria-label="Email Rohan"
                className="w-10 h-10 rounded-full glass-card border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary dark:hover:text-primary hover:scale-110 transition-all"
              >
                <FaEnvelope size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-base tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary dark:hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-base tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" size={14} />
                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" size={14} />
                <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" size={14} />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800/80 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Designed & Developed by {profile.name} © {currentYear}
          </p>

          <button 
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full glass-card border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 hover:scale-105 transition-all shadow-sm"
          >
            <FaArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
