"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate particles only on the client side to prevent hydration mismatches
    const generatedParticles = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5, // Smaller like stars
      duration: Math.random() * 40 + 20, // Much slower drifting
      delay: Math.random() * 10,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            // White glow suitable for stars
            boxShadow: `0 0 ${particle.size * 5}px ${particle.size * 1.5}px rgba(255, 255, 255, 0.8)`,
          }}
          animate={{
            y: ["0%", "-30%"], // Very subtle upward drift
            // Twinkling effect: pulsing opacity unpredictably
            opacity: [0, 0.2, 0.9, 0.1, 0.7, 1, 0.3, 0],
            scale: [1, 1.3, 0.8, 1.5, 0.9, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
