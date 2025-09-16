import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Pages.css';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store with shopping cart and payment processing",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/300x200?text=E-Commerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for organizing tasks and projects",
      technologies: ["React", "Firebase", "Material UI"],
      image: "https://via.placeholder.com/300x200?text=Task+App"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      image: "https://via.placeholder.com/300x200?text=Weather+App"
    }
  ]);

  return (
    <div className="page">
      <div className="container">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on:</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;