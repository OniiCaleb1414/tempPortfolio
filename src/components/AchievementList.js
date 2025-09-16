import React from 'react';
import './AchievementList.css';

const AchievementList = ({ achievements }) => {
  return (
    <div className="achievements-list">
      {achievements.map(achievement => (
        <div key={achievement.id} className="achievement-card fade-in">
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          <span className="date">{achievement.date}</span>
        </div>
      ))}
    </div>
  );
};

export default AchievementList;