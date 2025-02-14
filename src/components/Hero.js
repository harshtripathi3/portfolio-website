import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const techImages = [
    '/images/react-logo.png',
    '/images/nodejs-logo.png', 
    '/images/python-logo.png'
  ];

  return (
    <div className="hero">
      {/* Binary code background overlay */}
      <div className="binary-overlay" />
      
      {/* Transformer text box */}
      <motion.div 
        className="transformer-box"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: 'spring' }}
      >
        <h1 className="transformer-text">CODE TRANSFORMER</h1>
      </motion.div>

      {/* Sliding tech images */}
      <motion.div 
        className="sliding-images"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {techImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="tech-image"
            alt="Technology"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              delay: index * 0.3
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: [0, 15, -15, 0],
              transition: { duration: 0.4 } 
            }}
          />
        ))}
      </motion.div>

      {/* Main hero content */}
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.h1 
          className="hero-title"
          animate={{
            textShadow: [
              "0 0 10px #9b59b6",
              "0 0 20px #9b59b6", 
              "0 0 10px #9b59b6"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Full-Stack Developer
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Turning ideas into interactive digital experiences
        </motion.p>
      </motion.div>

      {/* CTA Button moved outside hero-content */}
      <motion.a 
        href="#projects"
        className="cta"
        style={{
          position: 'relative', // Ensure proper layering
          zIndex: 2, // Higher than overlay z-index
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        See My Work
      </motion.a>
    </div>
  );
};

export default Hero;