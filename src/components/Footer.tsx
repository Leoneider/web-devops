import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary-container/10 py-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white font-orbitron font-bold tracking-tighter text-xl flex items-center gap-2">
          DevOps42
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
        </div>
        
        <div className="text-on-surface-variant font-label text-[8px] md:text-[10px] tracking-[0.2rem] uppercase text-center md:text-left">
          © {new Date().getFullYear()} DEVOPS42. ALL SYSTEMS OPERATIONAL.
        </div>
        
        <div className="flex gap-4 md:gap-8">
          {["TERMINAL_LOGS", "PRIVACY_ENCRYPTION", "SIGNAL_HELP"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="font-label text-[8px] md:text-[10px] tracking-[0.2rem] uppercase text-on-surface-variant hover:text-primary-container transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
