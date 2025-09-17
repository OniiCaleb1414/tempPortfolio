import React from 'react';
import './Pages.css';
// import FallingText from '../components/FallingText';

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
        {/* <FallingText
  text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
  highlightWords={["React", "Bits", "animated", "components", "simplify"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/> */}
      </div>
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <h1> Something about me</h1> */}
    </div>
  );
};

export default About;