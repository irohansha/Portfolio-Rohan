import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const socials = [
  { icon: FaGithub, url: profile.github, label: "GitHub" },
  { icon: FaLinkedin, url: profile.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, url: `mailto:${profile.email}`, label: "Email" },
];

const SocialDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50"
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          whileHover={{ y: -5, scale: 1.1, color: '#0ea5e9' }}
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-300"
        >
          <social.icon size={22} />
        </motion.a>
      ))}
      <div className="w-[1px] h-24 bg-slate-300 dark:bg-slate-700 mt-2"></div>
    </motion.div>
  );
};

export default SocialDock;
