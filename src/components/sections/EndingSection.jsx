import React from 'react';
import { motion } from 'framer-motion';

const EndingSection = () => {
  return (
    <section className="py-20 px-4 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900 z-0"></div>

      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 leading-tight">
            Thank You For Being Such An Amazing Friend ❤️
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-light italic leading-relaxed"
        >
          "May your life be filled with happiness, success, love, and unforgettable memories."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-slate-500"
        >
          Made with love &lt;3
        </motion.div>
      </div>

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20 z-0"
          initial={{ 
            x: `${Math.random() * 100}vw`, 
            y: `${100 + Math.random() * 20}vh` 
          }}
          animate={{ 
            y: `-20vh`,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </section>
  );
};

export default EndingSection;
