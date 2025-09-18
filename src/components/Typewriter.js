import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ 
  text = "", 
  delay = 100, 
  infinite = false,
  onComplete,
  className = "" 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(delay);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length && !isDeleting) {
      // Typing phase
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
        setSpeed(delay);
      }, speed);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
        setSpeed(delay / 2);
      }, speed);
    } else if (infinite) {
      // Switch between typing and deleting for infinite loop
      setIsDeleting(!isDeleting);
      setSpeed(1000); // Pause at end
    } else if (onComplete) {
      // Call completion callback
      onComplete();
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, isDeleting, speed, text, onComplete]);

  return (
    <span className={`typewriter-text ${className}`}>
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;