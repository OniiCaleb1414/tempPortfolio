import React, { useState } from 'react';
import './AchievementForm.css';

const AchievementForm = ({ onAdd }) => {
  const [achievement, setAchievement] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (achievement.title && achievement.description) {
      onAdd(achievement);
      setAchievement({ title: '', description: '' });
    }
  };

  const handleChange = (e) => {
    setAchievement({
      ...achievement,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="achievement-form fade-in">
      <h3>Add New Achievement</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={achievement.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Description"
            value={achievement.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn">Add Achievement</button>
      </form>
    </div>
  );
};

export default AchievementForm;