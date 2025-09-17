import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {/* <a href="#" className="project-link">View Project</a>
          <a href="#" className="project-link">Source Code</a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;