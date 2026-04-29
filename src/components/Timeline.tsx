"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import ParticleBackground from "./animations/ParticleBackground";
import Image from "next/image";

const EVENTS = [
  {
    year: "2025",
    title: "HTECH",
    desc: "Soporte y mantenimiento para plataformas de Papa John's en Centroamérica. Optimización de tiempos de respuesta y mejoras continuas en la experiencia de usuario del e-commerce.",
    active: true,
  },
  {
    year: "2024",
    title: "BANCOLOMBIA & TICNOW",
    desc: "Desarrollo en sistema de listas restrictivas (Bancolombia) y validación de flujos con biometría para Daviplata (Ticnow), mejorando la seguridad en procesos de onboarding.",
    active: false,
  },
  {
    year: "2023",
    title: "COGNITS",
    desc: "Desarrollo y consultoría de software para clientes internacionales, diseñando arquitecturas escalables en la nube y liderando la adopción de nuevas tecnologías.",
    active: false,
  },
  {
    year: "2022",
    title: "SIIGO",
    desc: "Arquitecto Frontend liderando el desarrollo de microfrontends con NX. Estandarización de componentes UI, reduciendo tiempos de compilación y mejorando la experiencia de desarrollo.",
    active: false,
  },
  {
    year: "2021",
    title: "CEIBA",
    desc: "Proveedor tecnológico para Scotiabank en el sector asegurador. Automatización de procesos operativos y desarrollo de interfaces centradas en el usuario.",
    active: false,
  },
  {
    year: "2020",
    title: "WPOSS",
    desc: "Desarrollo de un sistema integral para administración de datáfonos, creando módulos de monitoreo en tiempo real y optimizando consultas a bases de datos.",
    active: false,
  },
  {
    year: "2015",
    title: "CREDISERVIR",
    desc: "Diseño y estructuración de la aplicación móvil financiera. Definición de flujos de navegación intuitivos y validación de prototipos interactivos con usuarios.",
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section id="roadmap" ref={containerRef} className="relative py-24 md:py-40 overflow-hidden bg-background">
      {/* Dynamic Sci-Fi Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[30%] -bottom-[30%] left-0 right-0 z-0 pointer-events-none overflow-hidden bg-background"
      >
        {/* Clouds / Cosmic Nebula Overlay */}
        <motion.div
          className="absolute -inset-[100%] opacity-20 mix-blend-color-dodge origin-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-full h-full">
            <filter id="sky-clouds">
              <feTurbulence type="fractalNoise" baseFrequency="0.002" numOctaves="5" seed="22" />
              <feColorMatrix type="matrix" values="
                1 0 0 0 0 
                0 1 0 0 0 
                0 0 1 0 0 
                0 0 0 3.5 -1.5
              " />
            </filter>
            <rect width="100%" height="100%" filter="url(#sky-clouds)" />
          </svg>
        </motion.div>

        {/* Animated Cosmic Orbs (Nebula Colors) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-indigo-600/40 rounded-full blur-[130px] mix-blend-screen pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] bg-purple-700/40 rounded-full blur-[130px] mix-blend-screen pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-0 left-[20%] w-[45vw] h-[45vw] bg-primary-container/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />


        {/* Gradients for seamless fusion and legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_90%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </motion.div>

      <ParticleBackground />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            ROADMAP <span className="text-primary-container drop-shadow-[0_0_15px_rgba(0,255,159,0.3)]">PROFESIONAL</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-0 relative">
          {/* Background line (Iniciando después del título) */}
          <div className="absolute left-4 md:left-1/2 top-0 -bottom-24 md:-bottom-40 w-px bg-white/5"></div>

          {/* Progress line (Iniciando después del título) */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 -bottom-24 md:-bottom-40 w-px bg-gradient-to-b from-primary-container via-primary-fixed to-transparent z-10"
          ></motion.div>
          {EVENTS.map((event, i) => (
            <Section
              key={event.year}
              className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full"
              delay={i * 0.1}
            >
              {/* Left Column */}
              <div className={`py-12 md:py-24 w-full ${i % 2 === 0 ? "pl-14 md:pl-0 md:text-right md:pr-20" : "pl-14 md:order-2 md:text-left md:pl-20"}`}>
                <motion.span
                  className={`${event.active ? "text-primary-container" : "text-on-surface-variant/30"} font-headline text-4xl md:text-5xl font-light mb-4 block`}
                >
                  {event.year}
                </motion.span>
                <h5 className={`text-lg md:text-xl font-bold mb-4 uppercase ${event.active ? "text-white" : "text-on-surface-variant/60"}`}>
                  {event.title}
                </h5>
                <p className={`text-on-surface-variant text-sm max-w-sm ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                  {event.desc}
                </p>
              </div>

              {/* Precise Center Dot (Decoupled from Grid flow) */}
              <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-20 pointer-events-none">
                <div className={`w-4 h-4 rounded-full transition-all duration-500 pointer-events-auto ${event.active ? "bg-primary-container ring-8 ring-primary-container/10 scale-125" : "bg-outline-variant scale-100"
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
