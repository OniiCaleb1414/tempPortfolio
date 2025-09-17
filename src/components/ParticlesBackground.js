import React, { useRef, useEffect, useState } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Set canvas size
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Create particles
    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`
      });
    }

    const drawParticles = () => {
      // Clear canvas with a slight fade effect for trails
      ctx.fillStyle = 'rgba(15, 12, 41, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles and connections
      particles.forEach((particle, i) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance/500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="particles-background"
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default ParticlesBackground;