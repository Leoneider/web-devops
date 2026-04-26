"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import GridBackground from "./animations/GridBackground";

export default function CTA() {
  return (
    <section className="py-24 md:py-40 bg-background text-center px-6 md:px-10 relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="font-orbitron text-[30vw] md:text-[20vw] font-bold text-primary-container whitespace-nowrap">
          CONTACTO
        </span>
      </div>
      
      <Section className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-8 md:mb-10 leading-tight">
          ¿LISTO PARA TRANSFORMAR <span className="text-primary-container">TU PROYECTO?</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-10 md:mb-12 text-sm md:text-base leading-relaxed">
          Estoy disponible para nuevas colaboraciones y proyectos desafiantes. 
          Hablemos sobre cómo puedo ayudarte a escalar tu infraestructura y optimizar tus procesos con IA.
        </p>
        <motion.a 
          href="https://wa.me/573174638521"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block group relative px-10 md:px-12 py-4 md:py-5 bg-primary-container text-on-primary-container font-bold uppercase tracking-[0.2em] transition-all overflow-hidden rounded-sm"
        >
          <span className="relative z-10">Iniciar Conversación</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </motion.a>
      </Section>
    </section>
  );
}
