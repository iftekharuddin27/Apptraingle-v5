"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 30;
const PARTICLE_SPEED = 0.45;
const PARTICLE_RADIUS_MIN = 1;
const PARTICLE_RADIUS_MAX = 2;

// Lighter cyan-blue for smaller, subtle particles
const PARTICLE_COLOR = "150, 225, 255";
const BG_COLOR = "#000000";

function createParticle(width: number, height: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = (Math.random() * 0.6 + 0.2) * PARTICLE_SPEED;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN) + PARTICLE_RADIUS_MIN,
    opacity: Math.random() * 0.4 + 0.4,
  };
}

function createParticleInCell(
  left: number,
  top: number,
  cellWidth: number,
  cellHeight: number,
): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = (Math.random() * 0.6 + 0.2) * PARTICLE_SPEED;

  return {
    x: left + Math.random() * cellWidth,
    y: top + Math.random() * cellHeight,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN) + PARTICLE_RADIUS_MIN,
    opacity: Math.random() * 0.4 + 0.4,
  };
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const columns = Math.ceil(Math.sqrt(PARTICLE_COUNT * (width / Math.max(height, 1))));
      const rows = Math.ceil(PARTICLE_COUNT / columns);
      const cellWidth = width / columns;
      const cellHeight = height / rows;

      particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const jitterX = cellWidth * 0.18;
        const jitterY = cellHeight * 0.18;
        const left = column * cellWidth + jitterX;
        const top = row * cellHeight + jitterY;
        const usableWidth = Math.max(cellWidth - jitterX * 2, 1);
        const usableHeight = Math.max(cellHeight - jitterY * 2, 1);
        return createParticleInCell(left, top, usableWidth, usableHeight);
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

          // Update positions first
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            // Cursor interaction (gentle repel)
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const interactionRadius = 140;

            if (distance < interactionRadius) {
              const force = (interactionRadius - distance) / interactionRadius;
              p.x += (dx / distance) * force * 3.5;
              p.y += (dy / distance) * force * 3.5;
            }

            // Wrap edges
            if (p.x < -10) p.x = width + 10;
            else if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10;
            else if (p.y > height + 10) p.y = -10;
          }

          // Draw thin connecting lines to up to 3 nearest neighbors
          const LINK_DISTANCE = 200;
          const MAX_CONNECTIONS = 3;
          const LINE_WIDTH = 1;
          const drawn = new Set<string>();

          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            // build neighbor list
            const neighbors = particles
              .map((q, idx) => ({ idx, dist: Math.hypot(p.x - q.x, p.y - q.y) }))
              .filter((n) => n.idx !== i)
              .sort((a, b) => a.dist - b.dist)
              .slice(0, MAX_CONNECTIONS);

            for (const n of neighbors) {
              if (n.dist > LINK_DISTANCE) continue;
              const a = Math.min(i, n.idx);
              const b = Math.max(i, n.idx);
              const key = `${a}-${b}`;
              if (drawn.has(key)) continue;
              drawn.add(key);

              const alpha = Math.max(0, 1 - n.dist / LINK_DISTANCE) * 0.18;
              ctx.beginPath();
              ctx.lineWidth = LINE_WIDTH;
              ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${alpha})`;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(particles[n.idx].x, particles[n.idx].y);
              ctx.stroke();
            }
          }

          // Draw particle cores on top of lines
          for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.opacity})`;
            ctx.fill();
          }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: -1,
        background: BG_COLOR,
      }}
      aria-hidden="true"
    />
  );
}