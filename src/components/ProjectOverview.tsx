"use client";

import { Fragment } from "react";
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

interface Project {
  titleTop: string;
  titleBottom: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  /** "wide" fills the column; "portrait" is height-constrained (phone mockups). */
  imageShape: "wide" | "portrait";
  /** Text on the left, image on the right (desktop). */
  reversed: boolean;
  floatDelay: number;
}

const PROJECTS: Project[] = [
  {
    titleTop: "BACK",
    titleBottom: "OFFICE",
    description:
      "Plataforma de gestión financiera centralizada diseñada para automatizar procesos contables y optimizar la administración diaria de múltiples franquicias.",
    image: {
      src: "/bo.png",
      alt: "SAR Back Office – Plataforma de Gestión Financiera",
      width: 1084,
      height: 590,
    },
    imageShape: "wide",
    reversed: false,
    floatDelay: 0,
  },
  {
    titleTop: "APP",
    titleBottom: "FINANCIERA",
    description:
      "Solución móvil intuitiva diseñada para la autogestión financiera. Facilita la consulta de saldos, ejecución de pagos, transferencias seguras y apertura de nuevos productos, optimizando la experiencia digital del usuario.",
    image: { src: "/app-coop.png", alt: "App Financiera", width: 444, height: 663 },
    imageShape: "portrait",
    reversed: true,
    floatDelay: 1,
  },
  {
    titleTop: "PAPA",
    titleBottom: "JOHNS",
    description:
      "Soporte técnico y mantenimiento de la plataforma web y móvil de pedidos en línea para las operaciones en Guatemala, Panamá y Costa Rica. Asegurando la estabilidad del sistema y un flujo de compra continuo.",
    image: {
      src: "/pj-project.png",
      alt: "Papa Johns – Plataforma de Pedidos",
      width: 1104,
      height: 1428,
    },
    imageShape: "portrait",
    reversed: false,
    floatDelay: 0.5,
  },
];

function ProjectRow({ project }: { project: Project }) {
  const { image, reversed } = project;
  const isWide = project.imageShape === "wide";

  return (
    <article
      className={`relative flex flex-col items-center gap-16 md:items-center ${
        reversed ? "md:flex-row-reverse md:justify-center md:gap-24" : "md:flex-row md:gap-10"
      }`}
    >
      {/* Imagen real del proyecto */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className={`relative flex justify-center ${reversed ? "" : "flex-1"}`}
      >
        {/* Glow verde ambiental detrás de la imagen */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "var(--color-primary-container)" }}
        />

        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: project.floatDelay }}
          className="relative w-full max-w-[600px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={isWide ? "(min-width: 768px) 600px, 100vw" : "350px"}
              className={
                isWide
                  ? "w-full h-auto object-contain"
                  : "h-[350px] md:h-[450px] w-auto mx-auto object-contain drop-shadow-2xl"
              }
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Título + resumen */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className={`flex flex-col items-center gap-4 flex-shrink-0 ${
          reversed ? "md:items-end" : "md:items-start"
        }`}
      >
        <h3
          className={`text-4xl md:text-5xl font-black tracking-tight leading-none text-center ${
            reversed ? "md:text-right" : "md:text-left"
          }`}
        >
          <span className="block text-on-surface">{project.titleTop}</span>
          <span className="block text-primary-container">{project.titleBottom}</span>
        </h3>

        {/* Divider */}
        <div className="h-px w-full bg-primary-container/20" />

        <div className={`flex flex-col items-center gap-2 ${reversed ? "md:items-end" : "md:items-start"}`}>
          <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-on-surface-variant">
            Resumen del Proyecto
          </p>
          <p
            className={`text-on-surface-variant text-sm leading-relaxed max-w-sm text-center ${
              reversed ? "md:text-right" : "md:text-left"
            }`}
          >
            {project.description}
          </p>
        </div>
      </motion.div>
    </article>
  );
}

export default function ProjectOverview() {
  return (
    <section id="projects" className="relative w-full overflow-hidden bg-background pt-12 pb-20 px-6 md:px-16">
      {/* Top transition fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none"></div>

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
        {/* ── Section Title ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-12 pt-10 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 inline-block px-4 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full"
          >
            <span className="text-primary-container font-label text-[10px] md:text-xs tracking-[0.3em] uppercase">
              Casos de Éxito // Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-background max-w-3xl"
          >
            PROYECTOS <span className="text-primary-container drop-shadow-[0_0_15px_rgba(0,255,159,0.5)]">DESTACADOS</span>
          </motion.h2>
        </div>

        {PROJECTS.map((project, i) => (
          <Fragment key={project.image.src}>
            {i > 0 && (
              <div className="my-24 w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent" />
            )}
            <ProjectRow project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
