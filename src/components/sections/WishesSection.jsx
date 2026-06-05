import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaGift } from 'react-icons/fa';

const WishesSection = () => {
  const wishes = [
    {
      id: 1,
      icon: <FaHeart className="text-accent text-2xl" />,
      title: "Dear Tamal,",
      content: "On your special day, I wish you happiness, success, good health, and endless opportunities. Thank you for being such an amazing friend."
    },
    {
      id: 2,
      icon: <FaStar className="text-gold text-2xl" />,
      title: "May every dream",
      content: "you have come true and may this year bring you incredible achievements and unforgettable moments."
    },
    {
      id: 3,
      icon: <FaGift className="text-secondary text-2xl" />,
      title: "Happy Birthday,",
      content: "my friend! 🎂🎉"
    }
  ];

  return (
    <section className="py-20 px-4 min-h-[80vh] relative flex flex-col items-center">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          Heartfelt Wishes
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2 rounded-full hidden md:block"></div>

        {wishes.map((wish, index) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass items-center justify-center border-2 border-primary z-20 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              {wish.icon}
            </div>
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
              <div className="glass dark:glass-dark rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-300"></div>
                
                <div className="md:hidden mb-4 w-10 h-10 rounded-full glass flex items-center justify-center">
                  {wish.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-900 dark:text-white mb-3">
                  {wish.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
                  {wish.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WishesSection;
