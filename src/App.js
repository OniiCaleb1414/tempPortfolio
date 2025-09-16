import React, { useState } from 'react';
import './App.css';

function App() {
  const [achievements, setAchievements] = useState([
    { id: 1, title: "React Project", description: "Built a responsive web application", date: "2023-05-15" },
    { id: 2, title: "JavaScript Certification", description: "Completed advanced JS course", date: "2023-03-10" }
  ]);

  const [newAchievement, setNewAchievement] = useState({ title: '', description: '' });

  const handleAddAchievement = () => {
    if (newAchievement.title && newAchievement.description) {
      const achievement = {
        id: achievements.length + 1,
        title: newAchievement.title,
        description: newAchievement.description,
        date: new Date().toISOString().split('T')[0]
      };
      setAchievements([...achievements, achievement]);
      setNewAchievement({ title: '', description: '' });
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Welcome to my interactive portfolio website</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>This is where you can add your bio, skills, and background information.</p>
      </section>

      <section className="achievements">
        <h2>My Achievements</h2>
        <div className="achievement-form">
          <h3>Add New Achievement</h3>
          <input
            type="text"
            placeholder="Title"
            value={newAchievement.title}
            onChange={(e) => setNewAchievement({...newAchievement, title: e.target.value})}
          />
          <textarea
            placeholder="Description"
            value={newAchievement.description}
            onChange={(e) => setNewAchievement({...newAchievement, description: e.target.value})}
          />
          <button onClick={handleAddAchievement}>Add Achievement</button>
        </div>
        
        <div className="achievements-list">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <span className="date">{achievement.date}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;