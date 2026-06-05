import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownSection = () => {
  const [timeLived, setTimeLived] = useState({ years: 0, months: 0, days: 0, hours: 0 });

  useEffect(() => {
    const calculateTimeLived = () => {
      const dob = new Date('2002-06-05T00:00:00');
      const now = new Date();

      let years = now.getFullYear() - dob.getFullYear();
      let months = now.getMonth() - dob.getMonth();
      let days = now.getDate() - dob.getDate();
      let hours = now.getHours() - dob.getHours();

      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeLived({ years, months, days, hours });
    };

    calculateTimeLived();
    const interval = setInterval(calculateTimeLived, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const timeUnits = [
    { label: 'Years', value: timeLived.years },
    { label: 'Months', value: timeLived.months },
    { label: 'Days', value: timeLived.days },
    { label: 'Hours', value: timeLived.hours },
  ];

  return (
    <section id="countdown" className="py-20 px-4 min-h-[60vh] flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
          Time of Awesomeness
        </h2>
        <p className="text-slate-600 dark:text-slate-400">Celebrating every moment since June 5th, 2002</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl w-full"
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            className="glass dark:glass-dark rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group"
          >
            {/* Glowing background on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-2 z-10"
            >
              {unit.value}
            </motion.span>
            <span className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase z-10">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CountdownSection;
