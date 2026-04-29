"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Scan, Cloud, Layers, BrainCircuit, Network, Paintbrush, Code, Gem, Bot, GitBranch, Rocket } from "lucide-react";
import Section from "./Section";
import DataStreamBackground from "./animations/DataStreamBackground";

const AngularIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Angular</title>
    <path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/>
  </svg>
);

const NextIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Next.js</title>
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
  </svg>
);

const SpringIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Spring</title>
    <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"/>
  </svg>
);

const HexagonFrame = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-0 w-full h-full ${colorClass} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
      viewBox="0 0 100 100"
    >
      <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </motion.svg>
    <motion.svg
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] ${colorClass} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
    </motion.svg>
    <div className="relative z-10 w-11 h-11 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const TECH_CARDS = [
  {
    icon: <AngularIcon className="w-full h-full text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]" />,
    id: "SYS-ANG",
    title: "Angular",
    desc: "Enterprise-grade frontend framework with a robust ecosystem, ideal for scalable and highly structured applications.",
    glowColor: "group-hover:bg-red-500/15",
    themeColor: "text-red-500",
    metricColor: "text-red-400",
    scannerColor: "via-red-500/30",
    borderColor: "group-hover:border-red-500/40",
    metrics: ["v18.0_ACTIVE", "IVY_ENGINE_ONLINE", "RXJS_STREAM_SYNC"],
  },
  {
    icon: <NextIcon className="w-full h-full text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />,
    id: "SYS-NXT",
    title: "Next.js",
    desc: "Advanced React framework delivering optimized server-side rendering, static site generation, and seamless capabilities.",
    glowColor: "group-hover:bg-white/10",
    themeColor: "text-white",
    metricColor: "text-gray-200",
    scannerColor: "via-white/30",
    borderColor: "group-hover:border-white/40",
    metrics: ["v14.0_ACTIVE", "APP_ROUTER_ONLINE", "RSC_STREAMING"],
  },
  {
    icon: <SpringIcon className="w-full h-full text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]" />,
    id: "SYS-SPR",
    title: "Java Spring",
    desc: "High-performance backend ecosystem providing secure, production-ready microservices and robust API infrastructure.",
    glowColor: "group-hover:bg-green-500/15",
    themeColor: "text-green-500",
    metricColor: "text-green-400",
    scannerColor: "via-green-500/30",
    borderColor: "group-hover:border-green-500/40",
    metrics: ["v3.2_ACTIVE", "JVM_CORE_SYNC", "CLOUD_NATIVE_READY"],
  },
  {
    icon: <Cloud className="w-full h-full text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />,
    id: "SYS-AWS",
    title: "AWS",
    desc: "Cloud infrastructure and serverless computing for scalable deployments and robust architecture.",
    glowColor: "group-hover:bg-orange-500/15",
    themeColor: "text-orange-500",
    metricColor: "text-orange-400",
    scannerColor: "via-orange-500/30",
    borderColor: "group-hover:border-orange-500/40",
    metrics: ["EC2_ACTIVE", "S3_STORAGE", "LAMBDA_READY"],
  },
  {
    icon: <Layers className="w-full h-full text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.6)]" />,
    id: "SYS-NXM",
    title: "NX Monorepo",
    desc: "Smart, fast and extensible build system with first class monorepo support and scalable codebases.",
    glowColor: "group-hover:bg-blue-400/15",
    themeColor: "text-blue-400",
    metricColor: "text-blue-300",
    scannerColor: "via-blue-400/30",
    borderColor: "group-hover:border-blue-400/40",
    metrics: ["WORKSPACE_SYNC", "CACHE_HIT", "DEPS_GRAPH"],
  },
  {
    icon: <BrainCircuit className="w-full h-full text-purple-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />,
    id: "SYS-AI",
    title: "IA Models",
    desc: "Integration of advanced artificial intelligence models for smart operations and autonomous agents.",
    glowColor: "group-hover:bg-purple-500/15",
    themeColor: "text-purple-500",
    metricColor: "text-purple-400",
    scannerColor: "via-purple-500/30",
    borderColor: "group-hover:border-purple-500/40",
    metrics: ["LLM_READY", "INFERENCE_ON", "TENSORS_SYNC"],
  },
  {
    icon: <Network className="w-full h-full text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]" />,
    id: "SYS-LGC",
    title: "LangChain",
    desc: "Framework for developing applications powered by language models with composability.",
    glowColor: "group-hover:bg-emerald-400/15",
    themeColor: "text-emerald-400",
    metricColor: "text-emerald-300",
    scannerColor: "via-emerald-400/30",
    borderColor: "group-hover:border-emerald-400/40",
    metrics: ["CHAIN_LINKED", "AGENTS_ACTIVE", "TOOLS_SYNC"],
  },
  {
    icon: <Paintbrush className="w-full h-full text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" />,
    id: "SYS-TWN",
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework for rapid UI development, consistent styling, and modular design.",
    glowColor: "group-hover:bg-cyan-400/15",
    themeColor: "text-cyan-400",
    metricColor: "text-cyan-300",
    scannerColor: "via-cyan-400/30",
    borderColor: "group-hover:border-cyan-400/40",
    metrics: ["JIT_COMPILER", "UTILITY_SYNC", "THEME_ACTIVE"],
  },
  {
    icon: <Code className="w-full h-full text-violet-500 drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" />,
    id: "SYS-NET",
    title: ".NET",
    desc: "Cross-platform framework for building modern, cloud-based, and high-performance applications.",
    glowColor: "group-hover:bg-violet-500/15",
    themeColor: "text-violet-500",
    metricColor: "text-violet-400",
    scannerColor: "via-violet-500/30",
    borderColor: "group-hover:border-violet-500/40",
    metrics: ["CORE_SYNC", "CLR_ONLINE", "NUGET_READY"],
  },
  {
    icon: <Gem className="w-full h-full text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]" />,
    id: "SYS-ROR",
    title: "Ruby on Rails",
    desc: "Server-side web application framework optimized for programmer happiness and fast prototyping.",
    glowColor: "group-hover:bg-red-600/15",
    themeColor: "text-red-600",
    metricColor: "text-red-500",
    scannerColor: "via-red-600/30",
    borderColor: "group-hover:border-red-600/40",
    metrics: ["GEMS_SYNC", "MVC_PATTERN", "ACTIVERECORD"],
  },
  {
    icon: <Bot className="w-full h-full text-slate-300 drop-shadow-[0_0_12px_rgba(203,213,225,0.6)]" />,
    id: "SYS-CPL",
    title: "Copilot",
    desc: "AI-powered code assistant to accelerate software development workflows and improve code quality.",
    glowColor: "group-hover:bg-slate-300/15",
    themeColor: "text-slate-300",
    metricColor: "text-slate-400",
    scannerColor: "via-slate-300/30",
    borderColor: "group-hover:border-slate-300/40",
    metrics: ["AI_ASSIST", "CONTEXT_SYNC", "SUGGEST_ON"],
  },
  {
    icon: <GitBranch className="w-full h-full text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />,
    id: "SYS-GIT",
    title: "GitHub",
    desc: "Version control and collaborative software development platform for CI/CD pipelines.",
    glowColor: "group-hover:bg-white/15",
    themeColor: "text-white",
    metricColor: "text-gray-300",
    scannerColor: "via-white/30",
    borderColor: "group-hover:border-white/40",
    metrics: ["REPO_SYNC", "ACTIONS_ON", "PR_READY"],
  },
  {
    icon: <Rocket className="w-full h-full text-blue-600 drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]" />,
    id: "SYS-AZD",
    title: "Azure DevOps",
    desc: "Developer services for support teams to plan work, collaborate, and build reliable deployments.",
    glowColor: "group-hover:bg-blue-600/15",
    themeColor: "text-blue-600",
    metricColor: "text-blue-500",
    scannerColor: "via-blue-600/30",
    borderColor: "group-hover:border-blue-600/40",
    metrics: ["PIPELINE_ON", "BOARD_SYNC", "ARTIFACTS_READY"],
  }
];

export default function TechGrid() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    carouselRef.current.style.scrollBehavior = 'auto';
    carouselRef.current.style.scrollSnapType = 'none';
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!isDragging.current || !carouselRef.current) return;
    isDragging.current = false;
    carouselRef.current.style.scrollBehavior = 'smooth';
    carouselRef.current.style.scrollSnapType = 'x mandatory';
  };

  const handleMouseUp = () => {
    if (!isDragging.current || !carouselRef.current) return;
    isDragging.current = false;
    carouselRef.current.style.scrollBehavior = 'smooth';
    carouselRef.current.style.scrollSnapType = 'x mandatory';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
      <DataStreamBackground />
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Section className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary-container/50 block"></span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary-container">Stack Tecnológico</span>
            </motion.div>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              CORE TECHNOLOGIES
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              The foundational stack utilized to engineer robust, scalable, and high-performance applications. Seamlessly integrating backend architecture with dynamic user interfaces.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-right hidden md:block"
          >
            <span className="block font-label text-[10px] tracking-[0.4rem] uppercase text-primary-container/40 mb-2">System Core</span>
            <span className="font-headline text-3xl md:text-4xl font-light tracking-tighter text-primary-container">OPTIMIZED</span>
          </motion.div>
        </div>

        <div className="relative w-[100vw] left-1/2 -ml-[50vw] md:w-full md:left-auto md:ml-0 py-10 group">
          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 md:gap-6 px-6 md:px-0 overflow-x-auto snap-x snap-mandatory pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing"
          >
            {TECH_CARDS.map((card, i) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -8 }}
                className={`w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[360px] shrink-0 snap-start glass-card p-6 md:p-8 relative group transition-all duration-500 overflow-hidden border border-white/5 ${card.borderColor} bg-surface-container/30 backdrop-blur-md flex flex-col select-none`}
              >
                {/* Scanner Line Effect */}
                <motion.div
                  initial={{ top: "-10%" }}
                  whileInView={{ top: "110%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: (i % TECH_CARDS.length) * 0.5 }}
                  className={`absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${card.scannerColor} to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100`}
                />

                {/* Circuit board subtle background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>

                <div className="mb-8 flex justify-between items-start relative z-10">
                  <HexagonFrame colorClass={card.themeColor}>
                    <div className="group-hover:scale-110 transition-transform duration-500 w-full h-full flex items-center justify-center">
                      {card.icon}
                    </div>
                  </HexagonFrame>
                  
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-label text-[10px] tracking-widest text-outline transition-colors duration-500 group-hover:text-primary-container/80">
                      {card.id}
                    </span>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-container/20 animate-pulse"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-container/20 animate-pulse delay-75"></div>
                      <div className={`w-1.5 h-1.5 rounded-full bg-current ${card.themeColor} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-headline text-2xl font-bold mb-3 tracking-wide uppercase relative z-10 transition-colors duration-300">
                  {card.title}
                </h4>
                
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 relative z-10 min-h-[60px]">
                  {card.desc}
                </p>
                
                <div className="flex flex-col gap-3 mb-8 relative z-10">
                  {card.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-1">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-wider flex items-center gap-2">
                        <Scan className="w-3 h-3" /> SYS_METRIC_0{idx + 1}
                      </span>
                      <span className={`font-mono text-[10px] ${card.metricColor}`}>{metric}</span>
                    </div>
                  ))}
                </div>


                
                {/* Dynamic Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500 ${card.glowColor}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}
