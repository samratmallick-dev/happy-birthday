import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-20 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-primary hover:text-accent transition-colors"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
    </motion.button>
  );
};

export default ThemeToggle;
