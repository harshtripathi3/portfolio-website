// WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Mercedes-Benz Research Developement India",
      position: "Data Scientist",
      duration: "Jan 2024 - Present",
      description: "Automated defect triage on AKS (40% server load reduction). Engineered big data pipeline for log conversion. Improved diagnostics with custom visualizations (25% reduction in diagnosis time). Optimized ETL framework for 5x faster data ingestion. AI-powered ticketing: automated tagging, reduced ticket reassignment (90%), accelerated resolution."
    },
    // {
    //   id: 2,
    //   company: "Digital Solutions Co",
    //   position: "Frontend Developer",
    //   duration: "2020 - 2022",
    //   description: "Developed customer-facing web applications with complex state management and responsive UI components."
    // }
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
