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
      Data Scientist/Engineer with 3+ years of experience in building scalable ETL systems and deploying ML models. Proven expertise in Big Data optimization (40% load reduction) and automating defect resolution (60% manual work reduction).
      </p>
    </motion.section>
  );
};

export default About;
