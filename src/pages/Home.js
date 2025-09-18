import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AchievementList from '../components/AchievementList';
import Typewriter from '../components/Typewriter';
import ParticlesBackground from '../components/ParticlesBackground';
import CurvedLoop from '../components/CurvedLoop';
import './Pages.css';
import GradientText from '../components/GradientText';
import ShapeBlur from '../components/ShapeBlur'; // ✅ import ShapeBlur

const Home = ({ achievements }) => {
  useEffect(() => {
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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="page"
    >
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* ✅ Background Layers */}
        <ParticlesBackground />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <ShapeBlur
            variation={0}
            pixelRatioProp={window.devicePixelRatio || 1}
            shapeSize={0.6}
            roundness={0.5}
            borderSize={0.05}
            circleSize={0.5}
            circleEdge={1}
          />
        </div>

        {/* ✅ Foreground Content */}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            className="hero-content"
            variants={itemVariants}
          >
            <GradientText
              colors={["#ff8a00", "#e52e71", "#40ffaa", "#4079ff"]}
              animationSpeed={6}
              showBorder={false}
              className="hero-title"
            >
              Welcome to My Portfolio
            </GradientText>

            <h1 className="hero-heading">
              <Typewriter 
                text="Hello, I'm Caleb Belay " 
                delay={100} 
                infinite={false}
              />
            </h1>

            <p className="hero-subheading">
              <Typewriter 
                text="A passionate Frontend Developer & UI/UX Designer with a focus on creating immersive web experiences." 
                delay={50} 
                infinite={false}
              />
            </p>

            <motion.a 
              href="#achievements" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Curved Loop Section */}
      <section className="curved-loop-section">
        <div className="curved-loop-container">
          <h2 className="curved-loop-title">Creative Developer</h2>
          <CurvedLoop 
            marqueeText="✦ React ✦ JavaScript ✦ CSS ✦ UI/UX ✦ C++"
            speed={2}
            curveAmount={300}
            className="curved-loop-text"
            interactive={true}
          />
        </div>
      </section>

      <motion.section 
        className="about-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating interactive web experiences. Here you can find my latest work and accomplishments.</p>
          <motion.a 
            href="/about" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Me
          </motion.a>
        </div>
      </motion.section>

      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">My Achievements</h2>
          <AchievementList achievements={achievements} />
        </div>
      </section>

      {/* Additional Curved Loop at the bottom */}
      <section className="curved-loop-section">
        <div className="curved-loop-container">
          <CurvedLoop 
            marqueeText="Let's create something amazing together ✦"
            speed={1.5}
            curveAmount={250}
            className="curved-loop-subtle"
            interactive={false}
          />
        </div>
      </section>
      
    </motion.div>
  );
};

export default Home;
