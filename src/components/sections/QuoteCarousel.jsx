import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const quotes = [
  {
    text: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Things are never quite as scary when you've got a best friend.",
    author: "Bill Watterson"
  },
  {
    text: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr."
  },
  {
    text: "True friendship multiplies the good in life and divides its evils.",
    author: "Baltasar Gracian"
  }
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 min-h-[50vh] flex flex-col items-center justify-center relative bg-slate-900/80">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl relative z-10"
      >
        <div className="text-center mb-8">
          <FaQuoteLeft className="text-4xl md:text-6xl text-primary/30 mx-auto" />
        </div>

        <div className="h-48 md:h-40 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full text-center px-4"
            >
              <p className="text-xl md:text-3xl font-light text-slate-900 dark:text-white mb-6 leading-relaxed">
                "{quotes[currentIndex].text}"
              </p>
              <p className="text-accent font-semibold tracking-wide uppercase">
                - {quotes[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteCarousel;
