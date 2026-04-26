"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Cpu, Zap, CircleDashed } from "lucide-react";
import Section from "./Section";

const TERMINAL_STEPS = [
  "> Initializing AI Autonomous Agent...",
  "> Analyzing project requirements...",
  "> [SUCCESS] Requirements parsed.",
  "> Generating system architecture...",
  "> Establishing database connections (PostgreSQL)...",
  "> Writing backend services (Java Spring)...",
  "> [SUCCESS] 42 microservices generated.",
  "> Synthesizing frontend components (Next.js/React)...",
  "> Optimizing performance metrics...",
  "> Running test suites... 1420/1420 passed.",
  "> Deploying to Vercel production environment...",
  "> [SUCCESS] System is ONLINE and fully operational.",
  "> Ready for next command."
];

export default function AiTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    if (currentLineIndex < TERMINAL_STEPS.length) {
      const currentFullLine = TERMINAL_STEPS[currentLineIndex];

      if (currentCharIndex < currentFullLine.length) {
        // Typing effect for the current line
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, Math.random() * 20 + 10); // Random typing speed

        return () => clearTimeout(timeout);
      } else {
        // Line finished typing, move to next line after a short pause
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev, currentFullLine]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 400);

        return () => clearTimeout(timeout);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentLineIndex, currentCharIndex, isComplete]);

  // Current line being typed out
  const currentTypingLine = currentLineIndex < TERMINAL_STEPS.length 
    ? TERMINAL_STEPS[currentLineIndex].substring(0, currentCharIndex) 
    : "";

  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[150px] pointer-events-none"></div>

      <Section className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary-container">Workflow Autónomo</span>
              <span className="w-8 h-[1px] bg-primary-container/50 block"></span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-orbitron text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              CÓDIGO QUE SE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary-fixed">ESCRIBE SOLO</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Nuestros agentes de IA no solo asisten, actúan. Desde la concepción de la arquitectura hasta el despliegue en producción, reducimos los tiempos de desarrollo en un 70% manteniendo los más altos estándares de calidad y seguridad.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-4 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-container" />
                </div>
                <div>
                  <div className="font-headline font-bold text-xl">+300%</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-wider">Velocidad</div>
                </div>
              </div>
              <div className="glass-card p-4 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary-container" />
                </div>
                <div>
                  <div className="font-headline font-bold text-xl">99.9%</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-wider">Precisión</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-2xl relative group"
          >
            {/* Terminal glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-container/30 to-primary-fixed-dim/30 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-[#050a08] rounded-xl border border-primary-container/20 overflow-hidden shadow-2xl h-[400px] flex flex-col">
              {/* Terminal Header */}
              <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-primary-container/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-xs font-mono">
                  <Terminal className="w-3 h-3" />
                  root@orbital-ai:~
                </div>
                <div className="w-16"></div> {/* Spacer for centering */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm overflow-y-auto flex-1 flex flex-col gap-2 scrollbar-hide">
                {displayedLines.map((line, idx) => (
                  <div 
                    key={idx} 
                    className={`${line.includes('[SUCCESS]') ? 'text-primary-container' : 'text-on-surface-variant'}`}
                  >
                    {line}
                  </div>
                ))}
                
                {!isComplete && (
                  <div className="text-on-surface-variant flex">
                    <span>{currentTypingLine}</span>
                    <span className="w-2 h-4 bg-primary-container ml-1 animate-pulse"></span>
                  </div>
                )}

                {isComplete && (
                  <div className="text-primary-container mt-4 flex items-center gap-2">
                    <CircleDashed className="w-4 h-4 animate-spin" />
                    <span>Awaiting instructions...</span>
                    <span className="w-2 h-4 bg-primary-container ml-1 animate-pulse"></span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </Section>
    </section>
  );
}
