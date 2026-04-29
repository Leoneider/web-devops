"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import AiCapabilities from "@/components/AiCapabilities";
import TechGrid from "@/components/TechGrid";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leoneider Trigos",
    jobTitle: "DevOps & AI Engineer",
    url: "https://www.devops42.dev/",
  };

  return (
    <main className="relative min-h-screen bg-background text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-container z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <ProjectOverview />
      <AiCapabilities />
      <TechGrid />
      <Timeline />
      <CTA />
      <Footer />
    </main>
  );
}
