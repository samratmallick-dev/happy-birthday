import React from 'react';
import { useAudio } from '../../context/AudioContext';
import { FaMusic, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MusicToggle = () => {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-primary hover:text-accent transition-colors"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      {isPlaying ? <FaPause /> : <FaMusic />}
    </motion.button>
  );
};

export default MusicToggle;
