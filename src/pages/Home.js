import React, { useState } from 'react';
import AchievementForm from '../components/AchievementForm';
import AchievementList from '../components/AchievementList';
import './Pages.css';

const Home = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, title: "React Project", description: "Built a responsive web application", date: "2023-05-15" },
    { id: 2, title: "JavaScript Certification", description: "Completed advanced JS course", date: "2023-03-10" }
  ]);

  const addAchievement = (achievement) => {
    const newAchievement = {
      id: achievements.length + 1,
      ...achievement,
      date: new Date().toISOString().split('T')[0]
    };
    setAchievements([...achievements, newAchievement]);
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>A showcase of my projects, skills, and achievements</p>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating interactive web experiences. Here you can find my latest work and accomplishments.</p>
          <a href="/about" className="btn">Learn More About Me</a>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2>My Achievements</h2>
          <AchievementForm onAdd={addAchievement} />
          <AchievementList achievements={achievements} />
        </div>
      </section>
    </div>
  );
};

export default Home;