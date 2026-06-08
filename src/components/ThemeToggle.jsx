import React, { useEffect, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center glass-card hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ scale: isDark ? 0 : 1, rotate: isDark ? 180 : 0, opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute text-slate-800"
      >
        <BsSunFill size={18} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ scale: isDark ? 1 : 0, rotate: isDark ? 0 : -180, opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute text-yellow-300"
      >
        <BsMoonFill size={18} />
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
