import React from 'react';
import { motion } from 'framer-motion';
import './AchievementList.css';

const AchievementList = ({ achievements }) => {
  return (
    <div className="achievements-list">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <div className="achievement-icon">{achievement.icon}</div>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          <span className="date">{achievement.date}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementList;