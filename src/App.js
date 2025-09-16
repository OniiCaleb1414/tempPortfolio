import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
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
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home achievements={achievements} onAddAchievement={addAchievement} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;