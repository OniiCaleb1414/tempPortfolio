import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>My Journey</h2>
            <p>Hello! I'm a passionate developer with experience in creating interactive web applications. I enjoy solving complex problems and turning ideas into reality through code.</p>
            
            <h2>Skills</h2>
            <div className="skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          
          <div className="about-image">
            {/* Placeholder for your photo */}
            <div className="placeholder-image">
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;