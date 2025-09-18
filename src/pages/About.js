import React from 'react';
import Cubes from '../components/Cubes';
import CircularGallery from '../components/CircularGallery';
import './Pages.css';

const About = () => {
  const galleryStyle = { height: '600px', position: 'relative', marginBottom: '2rem' };
  return (
    <div className="page" style={{ position: 'relative' }}>
      <div style={galleryStyle}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
      <div className="container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>My Journey</h2>
            <p>
              Hello! I'm a passionate developer with experience in creating
              interactive web applications. I enjoy solving complex problems and
              turning ideas into reality through code.
            </p>
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

          {/* Add Cubes on the side */}
          <div style={{ height: '600px', position: 'relative' }}>
            <Cubes
              gridSize={8}
              maxAngle={60}
              radius={4}
              borderStyle="2px dashed #5227FF"
              faceColor="#1a1a2e"
              rippleColor="#ff6b6b"
              rippleSpeed={1.5}
              autoAnimate={true}
              rippleOnClick={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
