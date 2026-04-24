"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function ProjectOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 px-6 md:px-16">
      {/* Hex-pattern overlay usando el color primario del tema */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%2300ff9f' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }}
      />
      {/* Glow ambiental superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[120px] opacity-20"
        style={{ background: "var(--color-primary-container)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── Top: Mockup + Logo/Title ── */}
        <div className="relative flex flex-col items-center gap-16 md:flex-row md:items-center md:gap-10">

          {/* Left – imagen real del proyecto */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="relative flex-1 flex justify-center"
          >
            {/* Glow verde ambiental detrás de la imagen */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "var(--color-primary-container)" }}
            />

            <div className="relative w-full max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden"
              >
                <Image
                  src="/bo.png"
                  alt="SAR Back Office – Plataforma de Gestión Financiera"
                  width={1200}
                  height={750}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Logo + título */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col items-center md:items-start gap-4 flex-shrink-0"
          >
            <div className="flex items-center gap-4">
              {/* Texto BACK OFFICE */}
              <div className="leading-none">
                <div className="text-4xl md:text-5xl font-black tracking-tight leading-none text-on-surface">
                  BACK
                </div>
                <div
                  className="text-4xl md:text-5xl font-black tracking-tight leading-none"
                  style={{ color: "var(--color-primary-container)" }}
                >
                  OFFICE
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{ background: "rgba(0,255,159,0.2)" }}
            />

            <p
              className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Resumen del Proyecto
            </p>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div
          className="my-14 h-px"
          style={{ background: "var(--color-outline-variant)" }}
        />

        {/* ── Descripción en dos columnas ── */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-on-surface-variant text-sm md:text-base leading-relaxed"
          >
            Este fue un proyecto para una plataforma de gestión financiera diseñada para grandes
            franquicias en industrias como comida rápida y restaurantes, ayudándolas a automatizar
            procesos contables y gestionar múltiples locales de manera más eficiente.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-on-surface-variant text-sm md:text-base leading-relaxed"
          >
            El objetivo era diseñar una interfaz intuitiva que redujera la complejidad en la gestión
            de datos financieros, optimizando las operaciones diarias de los dueños de franquicias.
            El reto principal fue garantizar que la plataforma pudiera escalar a múltiples locales
            manteniendo una experiencia de usuario consistente y precisión en los reportes financieros.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
