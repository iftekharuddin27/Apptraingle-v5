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

const PARTICLE_COUNT = 36;
const PARTICLE_SPEED = 0.45;
const PARTICLE_RADIUS_MIN = 1.5;
const PARTICLE_RADIUS_MAX = 3.0;

// Bright blue — higher RGB values = lighter/more luminous glow on black
const PARTICLE_COLOR = "41, 179, 255"; // brand primary blue
const GLOW_COLOR = "41, 179, 255"; // brand primary blue
const BG_COLOR = "#000000"; // pure black

function createParticle(width: number, height: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = (Math.random() * 0.6 + 0.2) * PARTICLE_SPEED;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN) + PARTICLE_RADIUS_MIN,
    opacity: Math.random() * 0.35 + 0.65,
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
    opacity: Math.random() * 0.35 + 0.65,
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

      for (const p of particles) {
        // Move
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

        // Outer glow halo (large, very soft)
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 7);
        halo.addColorStop(0, `rgba(${GLOW_COLOR}, ${p.opacity * 0.25})`);
        halo.addColorStop(1, `rgba(${GLOW_COLOR}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 7, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Mid glow
        const midGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        midGlow.addColorStop(0, `rgba(${PARTICLE_COLOR}, ${p.opacity * 0.7})`);
        midGlow.addColorStop(1, `rgba(${PARTICLE_COLOR}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = midGlow;
        ctx.fill();

        // Bright crisp core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.opacity * 0.9})`;
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