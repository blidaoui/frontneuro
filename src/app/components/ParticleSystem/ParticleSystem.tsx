"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  duration: number;
};

export const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 60 }, () => ({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
      }))
    );
  }, []);

  if (!particles.length) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-emerald-400/20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x * 100}%`,
            top: `${particle.y * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
