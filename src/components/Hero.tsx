"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={targetRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-slate-950/40 z-10"></div>
        <div className="absolute inset-0 hero-gradient z-20"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/devops-video.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-block px-4 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full"
        >
          <span className="text-primary-container font-label text-[10px] md:text-xs tracking-[0.3em] uppercase">
            Identidad: DevOps42 // Estado: Online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-orbitron text-5xl md:text-8xl font-bold tracking-tight text-on-background mb-6"
        >
          SOLUCIONES <span className="text-primary-container drop-shadow-[0_0_15px_rgba(0,255,159,0.5)]">IMPULSADAS</span> POR <span className="text-primary-container drop-shadow-[0_0_15px_rgba(0,255,159,0.5)]">IA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-on-surface-variant text-base md:text-xl font-light tracking-wide mb-10"
        >
          Arquitecto de soluciones tecnológicas enfocado en la integración de IA y sistemas escalables.
          Soy DevOps42, y desarrollo el futuro digital a través de código inteligente y arquitectura en la nube.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 55px rgba(0, 255, 159, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="cta-premium inline-flex items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-container shadow-[0_0_20px_rgba(0,255,159,0.25)] transition hover:bg-[#25D366]/25 group"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Contactar por WS
            </span>
          </motion.button>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-primary-container/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:border-primary-container/60 hover:bg-primary-container/5 hover:shadow-[0_0_15px_rgba(0,255,159,0.1)] active:scale-95"
          >
            <span>Stack Tecnológico</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-60"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase text-on-surface-variant">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-container to-transparent"></div>
      </motion.div>
    </section>
  );
}
