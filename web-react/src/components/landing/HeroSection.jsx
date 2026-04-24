import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import StarfieldCanvas from "./StarfieldCanvas";

const videoUrl =
  "https://cdn.coverr.co/videos/coverr-aerial-view-of-stars-in-space-1579/1080p.mp4";
const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionVideo = motion.video;

function HeroSection() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.65]);

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-0 h-screen overflow-hidden"
    >
      <MotionVideo
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80"
        style={{ y: prefersReducedMotion ? 0 : videoY }}
      >
        <source src={videoUrl} type="video/mp4" />
      </MotionVideo>

      <StarfieldCanvas reducedMotion={prefersReducedMotion} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#030818]/70 to-[#02060f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,243,255,0.22),transparent_60%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{
            y: prefersReducedMotion ? 0 : contentY,
            opacity: prefersReducedMotion ? 1 : contentOpacity,
          }}
          className="glass-panel mx-auto w-full max-w-4xl px-8 py-10 text-center md:px-14 md:py-14"
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/45 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            NASA Innovation Style
          </p>
          <h1 className="font-orbitron text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Engineering the Next Orbit
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
            Arquitecturas digitales para misiones críticas, visualización
            espacial y tecnología de precisión con enfoque futurista.
          </p>

          <MotionButton
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 55px rgba(0, 243, 255, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="cta-premium mt-9 inline-flex items-center justify-center rounded-xl border border-cyan-200/60 bg-cyan-300/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-glow transition hover:bg-cyan-200/20"
          >
            <span className="relative z-10">Launch Mission</span>
          </MotionButton>

          <MotionButton
            whileHover={{ y: -2 }}
            className="mt-3 inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/[0.03] px-7 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-cyan-200/45 hover:text-cyan-100"
          >
            Explore Systems
          </MotionButton>
        </MotionDiv>
      </div>
    </header>
  );
}

export default HeroSection;
