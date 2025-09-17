import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

function AppContent() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  const [achievements] = useState([
    {
      id: 1, 
      title: "React Portfolio", 
      description: "Designed and developed a responsive portfolio website using React and modern CSS",
      date: "2023-10-15",
      icon: "🚀"
    },
    {
      id: 2, 
      title: "JavaScript Certification", 
      description: "Completed advanced JavaScript course with focus on modern ES6+ features",
      date: "2023-08-10",
      icon: "🎓"
    },
    {
      id: 3, 
      title: "UI/UX Design", 
      description: "Created user-friendly interfaces with focus on accessibility and responsive design",
      date: "2023-06-22",
      icon: "🎨"
    }
  ]);

  return (
    <div className="App">
      <InteractiveBackground />
      <Header />
      
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home achievements={achievements} />
              </motion.main>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.main>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.main>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.main>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;