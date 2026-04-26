"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NetworkBackground() {
  const [nodes, setNodes] = useState<{ 
    id: number; 
    x: number; 
    y: number; 
    durations: number[]; 
    delays: number[];
    nodeDuration: number;
  }[]>([]);

  useEffect(() => {
    // Generate nodes
    const generatedNodes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      durations: [Math.random() * 5 + 5, Math.random() * 5 + 5, Math.random() * 5 + 5],
      delays: [Math.random() * 5, Math.random() * 5, Math.random() * 5],
      nodeDuration: Math.random() * 2 + 2,
    }));
    setNodes(generatedNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, i) => (
          nodes.slice(i + 1, i + 4).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="var(--color-primary-container)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.5, 0] 
              }}
              transition={{
                duration: node.durations[j],
                repeat: Infinity,
                ease: "linear",
                delay: node.delays[j],
              }}
            />
          ))
        ))}
      </svg>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1 h-1 bg-primary-container rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: node.nodeDuration, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
