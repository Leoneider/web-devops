import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-cyan-400 font-bold font-headline text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
          ORBITAL_OS
        </div>
        
        <div className="text-slate-500 font-label text-[8px] md:text-[10px] tracking-[0.2rem] uppercase text-center md:text-left">
          © 2024 CELESTIAL OBSERVER ARCHIVES. ALL SYSTEMS OPERATIONAL.
        </div>
        
        <div className="flex gap-4 md:gap-8">
          {["TERMINAL_LOGS", "PRIVACY_ENCRYPTION", "SIGNAL_HELP"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="font-label text-[8px] md:text-[10px] tracking-[0.2rem] uppercase text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
