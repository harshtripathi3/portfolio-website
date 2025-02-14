import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>
        I am a full-stack developer with experience in React, Node.js, and many modern technologies. I love turning ideas into interactive web experiences.
      </p>
    </motion.section>
  );
};

export default About;
