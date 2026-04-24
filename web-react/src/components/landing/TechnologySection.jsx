import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const MotionGrid = motion.div;
const MotionArticle = motion.article;

const stack = [
  {
    name: "React Runtime",
    details: "Arquitectura componible para interfaces dinámicas y escalables.",
  },
  {
    name: "Tailwind Core",
    details:
      "Sistema visual consistente con tokens espaciales y glassmorphism.",
  },
  {
    name: "Framer Motion",
    details: "Transiciones de scroll fluidas con timing natural y elegante.",
  },
  {
    name: "Data Modules",
    details: "Cards y paneles listos para integrar telemetría y APIs en vivo.",
  },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

function TechnologySection() {
  return (
    <SectionReveal className="section-shell pt-8 md:pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          Tecnología
        </p>
        <h2 className="mt-4 font-orbitron text-3xl font-bold text-white md:text-4xl">
          Stack preparado para misión crítica
        </h2>
      </div>

      <MotionGrid
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={gridVariants}
        className="grid gap-5 md:grid-cols-2"
      >
        {stack.map((item) => (
          <MotionArticle
            key={item.name}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="neon-card group"
          >
            <div className="orbit-line" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-3 text-slate-300">{item.details}</p>
          </MotionArticle>
        ))}
      </MotionGrid>
    </SectionReveal>
  );
}

export default TechnologySection;
