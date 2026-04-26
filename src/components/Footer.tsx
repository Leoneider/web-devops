import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary-container/10 py-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white font-orbitron font-bold tracking-tighter text-xl flex items-center gap-2">
          DevOps42
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
        </div>
        
        <div className="text-on-surface-variant font-label text-[10px] md:text-xs tracking-[0.2rem] uppercase">
          © 2026 DEVOPS42.
        </div>
      </div>
    </footer>
  );
}
