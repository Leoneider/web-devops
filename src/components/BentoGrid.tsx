"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Section from "./Section";

export default function BentoGrid() {
  return (
    <Section className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-8 group relative overflow-hidden"
        >
          <div className="bg-surface-container-low p-8 md:p-10 h-full flex flex-col justify-end relative z-10 transition-all duration-500 hover:bg-surface-container-high">
            <div className="absolute top-0 right-0 p-8">
              <Rocket className="w-10 h-10 text-primary-container/20 group-hover:text-primary-container transition-colors duration-500" />
            </div>
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4 tracking-tight">PRECISION BALLISTICS</h3>
            <p className="text-on-surface-variant max-w-md text-sm md:text-base">
              Our propulsion systems achieve a 99.99% orbital insertion accuracy rate using real-time gravitational wave compensation.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="bg-surface-container-highest px-3 py-1 flex items-center gap-2 border border-white/5">
                <div className="w-1 h-4 bg-primary-container animate-pulse"></div>
                <span className="text-[10px] font-label uppercase tracking-widest">Velocity: 28,000 km/h</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-4"
        >
          <div className="bg-surface-container-low p-8 md:p-10 h-full border-l-2 border-primary-container/10 relative overflow-hidden">
            <span className="text-primary-container font-label text-xs tracking-widest uppercase block mb-6">Module 02</span>
            <h3 className="font-headline text-2xl font-bold mb-4">CRYO-STEEL SHIELDING</h3>
            <p className="text-on-surface-variant text-sm">
              Engineered for extreme thermal cycling in low-earth orbit environments.
            </p>
            <div className="mt-10 aspect-square overflow-hidden bg-slate-900 border border-white/5 relative group">
              <img 
                alt="Hardware detail" 
                className="w-full h-full object-cover mix-blend-screen opacity-50 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2a4f-xq7eNamC0R3BRAVjhH0iiq6ABYR727kK1USsKsfQhdlBW6W8BjO5HuadgY5bxDNiG5V8izZcp7eduWNpaSUDxamjU_5EFEDyePYnP08gk_17U3LiKVelGtW-VJLt5VPUQgh1GDyti2K3jhk3NSgUyrPs_AfUTBNI4vAs9zupTaetYFeDjzBESUv8y6PxM7YLYBgIteIh6-ENwH7Wt3KPUjiRQE12qbUad5vYRgsnwfSuUHKqnOAVK0cTj1_95RcOlRaWIBiN" 
              />
              <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
