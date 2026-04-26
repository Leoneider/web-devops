"use client";

import { motion } from "framer-motion";
import { ArrowRight, Scan } from "lucide-react";
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
];

export default function TechGrid() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TECH_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-6 md:p-8 relative group transition-all duration-500 overflow-hidden border border-white/5 ${card.borderColor} bg-surface-container/30 backdrop-blur-md flex flex-col`}
            >
              {/* Scanner Line Effect */}
              <motion.div
                initial={{ top: "-10%" }}
                whileInView={{ top: "110%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
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

              <a 
                href="#" 
                className="text-primary-container text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all relative z-10 mt-auto"
              >
                Initialize Module <ArrowRight className="w-3 h-3" />
              </a>
              
              {/* Dynamic Glow Effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500 ${card.glowColor}`}></div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
