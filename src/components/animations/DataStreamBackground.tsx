"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DataStreamBackground() {
  const [streams, setStreams] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedStreams = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));
    setStreams(generatedStreams);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary-container to-transparent"
          style={{
            left: `${stream.left}%`,
            top: `-150px`,
          }}
          animate={{
            y: ["0vh", "150vh"],
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            ease: "linear",
            delay: stream.delay,
          }}
        />
      ))}
    </div>
  );
}
