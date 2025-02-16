import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Abstract Summarization",
    description: "We can generate insightful summaries and datasets from our data by fine-tuning PLMs like Pegasus and BERT using NLP techniques, including TextRank with GloVe/Word2Vec for tweet selection. Deployment on Hugging Face ensures easy access and efficient use.",
    link: "https://github.com/harshtripathi3/abstact_Summarization"
  },
  {
    title: "Workflow DataModel",
    description: "We've developed a model-based software for interactive workflows, creating metadata encompassing various workflow types, tasks, and actions. A user-friendly GUI enables workflow creation, accessible to both admins for definition and users for participation.",
    link: "https://github.com/harshtripathi3/workflow_DataModel"
  },
  {
    title: "TalShow",
    description: "I've developed a full-stack website using MERN to showcase my projects, featuring login/registration with JWT tokens and filtering. Following DevOps principles, I managed a CI/CD pipeline using Jenkins, Docker, and Ansible for automation.",
    link: "https://github.com/harshtripathi3/talShow"
  },
  {
    title: "Why So Harsh",
    description: "I analyzed and categorized tweets with multi-label tags (e.g., vulgar, disrespectful) using LSTM and a voting classifier for improved AOC scores. Data pre-processing and vectorization were performed using techniques like GloVe and Word2Vec.",
    link: "https://github.com/harshtripathi3/why_so_Harsh"
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
