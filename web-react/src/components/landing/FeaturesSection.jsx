import SectionReveal from "./SectionReveal";

const features = [
  {
    title: "Deep Space UX",
    description:
      "Interfaces inmersivas con jerarquía visual limpia para centros de control y plataformas de datos.",
  },
  {
    title: "Mission Reliability",
    description:
      "Diseño resiliente con componentes modulares, métricas claras y consistencia operacional.",
  },
  {
    title: "Telemetry Intelligence",
    description:
      "Visualización de señales complejas en tiempo real, optimizada para análisis y toma de decisiones.",
  },
];

function FeaturesSection() {
  return (
    <SectionReveal className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          Características
        </p>
        <h2 className="mt-4 font-orbitron text-3xl font-bold text-white md:text-4xl">
          Diseño orientado a innovación
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {features.map((item) => (
          <article key={item.title} className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}

export default FeaturesSection;
