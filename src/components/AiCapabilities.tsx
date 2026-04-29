"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Network, Code, Sparkles, Workflow } from "lucide-react";
import Section from "./Section";
import NetworkBackground from "./animations/NetworkBackground";

const SERVICES = [
  {
    id: "SRV-01",
    title: "LLM Integration",
    description: "Integración nativa de modelos de lenguaje avanzados (OpenAI, Anthropic, local LLMs) para potenciar las capacidades cognitivas de tu aplicación.",
    icon: <Brain className="w-6 h-6 text-primary-container" />,
    bg: "/card_bg_llm.png",
  },
  {
    id: "SRV-02",
    title: "Autonomous Agents",
    description: "Desarrollo de agentes inteligentes capaces de razonar, planificar y ejecutar tareas complejas de forma autónoma dentro de tu sistema.",
    icon: <Bot className="w-6 h-6 text-primary-container" />,
    bg: "/card_bg_agents.png",
  },
  {
    id: "SRV-03",
    title: "AI Workflows",
    description: "Automatización de procesos empresariales y flujos de trabajo mediante pipelines impulsados por IA, reduciendo la fricción operativa.",
    icon: <Workflow className="w-6 h-6 text-primary-container" />,
    bg: "/card_bg_workflow.png",
  },
  {
    id: "SRV-04",
    title: "Generative UI",
    description: "Interfaces dinámicas que se adaptan en tiempo real a las necesidades del usuario utilizando generación de componentes por IA.",
    icon: <Sparkles className="w-6 h-6 text-primary-container" />,
    bg: "/card_bg_genui.png",
  },
  {
    id: "SRV-05",
    title: "Predictive Analytics",
    description: "Modelos predictivos integrados para anticipar comportamientos, optimizar recursos y tomar decisiones basadas en datos masivos.",
    icon: <Network className="w-6 h-6 text-primary-container" />,
    bg: "/card_bg_analytics.png",
  },
  {
    id: "SRV-06",
    title: "AI-Assisted Dev",
    description: "Aceleración del ciclo de vida del software utilizando copilotaje avanzado y generación de código automatizada.",
    icon: <Code className="w-6 h-6 text-primary-container" />,
    bg: "/card_bg_code.png",
  },
];

export default function AiCapabilities() {
  return (
    <section id="ai-capabilities" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <NetworkBackground />
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Neural Network Abstract Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <Section className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-primary-container/50 block"></span>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary-container">Soluciones IA</span>
            <span className="w-8 h-[1px] bg-primary-container/50 block"></span>
          </motion.div>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            AI CORE CAPABILITIES
          </h2>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed text-sm md:text-base">
            Potenciamos el desarrollo de software tradicional integrando inteligencia artificial de vanguardia. 
            Construimos sistemas escalables, autónomos y preparados para el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 border border-white/5 glow-border relative group overflow-hidden flex flex-col"
            >
              {/* Card background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: `url(${service.bg})` }}
              />
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center border border-white/5 group-hover:border-primary-container/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="font-label text-[10px] tracking-widest text-white/30 group-hover:text-primary-container/60 transition-colors duration-300">
                  {service.id}
                </span>
              </div>
              
              <h3 className="font-headline text-xl font-bold mb-4 tracking-wide text-on-surface group-hover:text-primary-container transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-1 h-1 bg-primary-container rounded-full animate-pulse"></div>
                <span className="text-[9px] uppercase tracking-widest font-mono text-primary-container/70">System Active</span>
              </div>
              
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
