"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";

const EVENTS = [
  {
    year: "2024",
    title: "LUNAR ARCHWAY",
    desc: "Establishment of the first permanent automated refueling station in lunar polar orbit.",
    active: true,
  },
  {
    year: "2027",
    title: "Colpatria",
    desc: "First uncrewed landing of the heavy-lift habitat modules in the Jezero Crater sector.",
    active: false,
  },
  {
    year: "2032",
    title: "BELT EXPEDITION",
    desc: "Deployment of resource collection swarms within the Asteroid Belt for deep-space manufacturing.",
    active: false,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 md:py-40 relative">
      {/* Background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

      {/* Progress line */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container via-primary-fixed to-transparent hidden md:block z-10"
      ></motion.div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4">Operational Roadmap</h2>
          <p className="text-on-surface-variant text-[10px] md:text-xs font-label uppercase tracking-widest">Phase 4 Deployment: Active</p>
        </div>

        <div className="space-y-12 md:space-y-0 relative">
          {EVENTS.map((event, i) => (
            <Section
              key={event.year}
              className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full"
              delay={i * 0.1}
            >
              {/* Left Column */}
              <div className={`py-12 md:py-24 w-full ${i % 2 === 0 ? "md:text-right md:pr-20" : "md:order-2 md:text-left md:pl-20"}`}>
                <motion.span
                  className={`${event.active ? "text-primary-container" : "text-slate-500"} font-headline text-4xl md:text-5xl font-light mb-4 block`}
                >
                  {event.year}
                </motion.span>
                <h5 className={`text-lg md:text-xl font-bold mb-4 uppercase ${event.active ? "text-white" : "text-slate-300"}`}>
                  {event.title}
                </h5>
                <p className={`text-on-surface-variant text-sm max-w-sm ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                  {event.desc}
                </p>
              </div>

              {/* Precise Center Dot (Decoupled from Grid flow) */}
              <div className="md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20 pointer-events-none">
                <div className={`w-4 h-4 rounded-full transition-all duration-500 pointer-events-auto ${event.active ? "bg-primary-container ring-8 ring-primary-container/10 scale-125" : "bg-slate-500 scale-100"
                  }`}></div>
              </div>

              {/* Right/Opposite Column (Spacer) */}
              <div className={`hidden md:block md:w-full ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}></div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
}
