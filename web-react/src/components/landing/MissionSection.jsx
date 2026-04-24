import SectionReveal from "./SectionReveal";

function MissionSection() {
  return (
    <SectionReveal className="section-shell pt-8 md:pt-16">
      <div className="glass-panel relative overflow-hidden p-8 md:p-12">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Misión
          </p>
          <h2 className="mt-4 font-orbitron text-3xl font-bold text-white md:text-4xl">
            Impulsar productos digitales de frontera
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">
            Construimos experiencias frontend con estándares aeroespaciales:
            precisión visual, rendimiento continuo y narrativa tecnológica de
            alto impacto para marcas orientadas al futuro.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}

export default MissionSection;
