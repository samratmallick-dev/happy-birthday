import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const CakeSection = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const blowOutCandles = () => {
    setCandlesBlown(true);
    
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section className="py-20 px-4 min-h-[70vh] flex flex-col items-center justify-center relative bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-16">
          Make a Wish, Tamal! ✨
        </h2>

        <div className="relative w-64 h-64 mx-auto mb-16 mt-10">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-4 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-sm">
                {!candlesBlown && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-yellow-400 rounded-full blur-[2px] flame origin-bottom shadow-[0_0_15px_#facc15]">
                    <div className="absolute top-1 left-1 w-2 h-3 bg-white rounded-full"></div>
                  </div>
                )}
                <div className="absolute top-0 w-full h-full" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)' }}></div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-4 right-4 h-24 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg shadow-lg z-10 border-b-4 border-pink-600">
            <div className="absolute -bottom-3 left-2 w-6 h-6 bg-pink-500 rounded-full"></div>
            <div className="absolute -bottom-4 left-12 w-5 h-8 bg-pink-500 rounded-full"></div>
            <div className="absolute -bottom-2 right-16 w-6 h-5 bg-pink-500 rounded-full"></div>
            <div className="absolute -bottom-5 right-6 w-5 h-9 bg-pink-500 rounded-full"></div>
          </div>

          <div className="absolute top-16 left-0 right-0 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg z-0 border-b-4 border-purple-700">
             <div className="absolute top-1/2 left-0 w-full flex justify-around">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-3 h-3 rounded-full bg-white/50"></div>
               ))}
             </div>
          </div>

          <div className="absolute top-36 -left-8 -right-8 h-8 bg-slate-700 rounded-full shadow-2xl border-b-4 border-slate-800 -z-10"></div>
        </div>

        {!candlesBlown ? (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={blowOutCandles}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-slate-900 font-bold text-lg tracking-wide shadow-lg"
          >
            Blow Out Candles
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl text-accent font-display font-semibold"
          >
            Yay! Wishes coming true... 🎉
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default CakeSection;
