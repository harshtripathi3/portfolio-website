import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Project One",
    description: "An amazing project that does incredible things.",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A groundbreaking solution to modern problems.",
    link: "#"
  },
  {
    title: "Project Three",
    description: "A creative project showcasing my skills.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <motion.section 
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
