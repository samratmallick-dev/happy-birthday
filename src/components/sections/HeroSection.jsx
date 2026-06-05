import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const floatingElements = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, 
    y: Math.random() * 100, 
    size: Math.random() * 20 + 10,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 2,
    type: Math.random() > 0.5 ? '🎈' : '✨',
  }));

  const scrollToCountdown = () => {
    document.getElementById('countdown').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 px-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-2xl z-0 opacity-50"
          initial={{ x: `${el.x}vw`, y: `110vh` }}
          animate={{
            y: `-10vh`,
            x: [`${el.x}vw`, `${el.x + 5}vw`, `${el.x - 5}vw`, `${el.x}vw`],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        >
          {el.type}
        </motion.div>
      ))}
      <div className="z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-display font-bold mb-6 text-gradient"
        >
          {"🎉 Happy Birthday Tamal Das 🎂".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl text-center mb-12 font-light"
        >
          Wishing you endless happiness, success, and unforgettable memories.
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToCountdown}
          className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold text-lg tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        >
          Celebrate
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
