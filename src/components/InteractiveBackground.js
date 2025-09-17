import React, { useRef, useEffect, useState } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.7)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Attract to mouse
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.x += dx / distance * 0.5;
          this.y += dy / distance * 0.5;
        }
        
        if (this.size > 0.2) this.size -= 0.05;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add particles on mouse move
      if (Math.random() > 0.7) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(0, 0%, 100%, ${0.2 - distance/500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-background"
    />
  );
};

export default InteractiveBackground;