// WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Innovators Inc",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Led development of enterprise-scale applications using modern tech stack including React, Node.js, and cloud services."
    },
    {
      id: 2,
      company: "Digital Solutions Co",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Developed customer-facing web applications with complex state management and responsive UI components."
    }
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span className="duration">{exp.duration}</span>
            </div>
            <h4 className="position">{exp.position}</h4>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
