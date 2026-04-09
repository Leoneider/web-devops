"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, ShieldCheck } from "lucide-react";
import Section from "./Section";

const TECH_CARDS = [
  {
    icon: <Cpu className="w-10 h-10" />,
    id: "TX-0192",
    title: "Neural Telemetry",
    desc: "Direct neural interface for real-time pilot-to-vessel data synchronization and rapid response handling.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    id: "AX-4800",
    title: "Quantum Mapping",
    desc: "Harnessing quantum entanglement for instantaneous galactic positioning without satellite reliance.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    id: "SX-8821",
    title: "Life Support 2.0",
    desc: "Closed-loop biosynthetic environments capable of sustaining biological life for multi-decade transits.",
  },
];

export default function TechGrid() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest">
      <Section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 tracking-tight">INTELLIGENT SYSTEMS</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              The ORBITAL_OS ecosystem integrates autonomous navigation with deep-learning telemetry analysis to minimize human intervention during critical flight phases.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-right"
          >
            <span className="block font-label text-[10px] tracking-[0.4rem] uppercase text-primary-container/40 mb-2">Protocol Status</span>
            <span className="font-headline text-3xl md:text-4xl font-light tracking-tighter">ACTIVE_GRID</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TECH_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="glass-card glow-border p-8 relative group transition-all duration-500 overflow-hidden"
            >
              <div className="mb-12 flex justify-between items-start">
                <span className="text-primary-container group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </span>
                <span className="font-label text-[10px] tracking-widest text-outline">{card.id}</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-4 tracking-wide uppercase">{card.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                {card.desc}
              </p>
              <a 
                href="#" 
                className="text-primary-container text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Explore Module <ArrowRight className="w-3 h-3" />
              </a>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-container/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
