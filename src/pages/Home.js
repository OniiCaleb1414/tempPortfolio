import React, { useState, useEffect } from 'react';
import AchievementForm from '../components/AchievementForm';
import AchievementList from '../components/AchievementList';
import './Pages.css';

const Home = ({ achievements, onAddAchievement }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
    
    // Add scroll animation for elements
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className={`hero-content ${animated ? 'animate' : ''}`}>
            <h1 className="hero-heading">Hello, I'm Alex Johnson</h1>
            <p className="hero-subheading">A passionate Frontend Developer & UI/UX Designer with a focus on creating immersive web experiences.</p>
            <a href="#achievements" className="btn">View My Work</a>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating interactive web experiences. Here you can find my latest work and accomplishments.</p>
          <a href="/about" className="btn">Learn More About Me</a>
        </div>
      </section>

      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">My Achievements</h2>
          <AchievementForm onAdd={onAddAchievement} />
          <AchievementList achievements={achievements} />
        </div>
      </section>
    </div>
  );
};

export default Home;