import FeaturesSection from "../components/landing/FeaturesSection";
import HeroSection from "../components/landing/HeroSection";
import MissionSection from "../components/landing/MissionSection";
import TechnologySection from "../components/landing/TechnologySection";

function LandingPage() {
  return (
    <main className="relative bg-transparent">
      <HeroSection />

      <section className="relative z-10 -mt-20 rounded-t-[2.6rem] border-t border-white/10 bg-gradient-to-b from-[#030a18]/95 via-[#02060f]/95 to-[#01030a]">
        <FeaturesSection />
        <MissionSection />
        <TechnologySection />

        <footer className="section-shell pt-14">
          <div className="glass-panel flex flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
            <span>© 2026 SpaceTech Systems</span>
            <span className="text-cyan-300">
              Built with React · Tailwind · Framer Motion
            </span>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default LandingPage;
