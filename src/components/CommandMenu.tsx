"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  "MISSION CONTROL",
  "CREW MANIFEST",
  "CARGO LOG",
  "EMERGENCY PROTOCOLS",
];

export default function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[30] bg-black/40 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%', transition: { type: "spring", stiffness: 300, damping: 30 } }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              mass: 0.8,
              restDelta: 0.001
            }}
            className="fixed inset-y-0 right-0 w-full md:w-[320px] bg-background/90 backdrop-blur-[24px] z-[40] flex flex-col border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.8),inset_-20px_0_40px_rgba(255,255,255,0.06),inset_-1px_0_0_rgba(255,255,255,0.1)]"
          >


            {/* Content Area */}
            <div className="flex-1 p-8 pt-24 flex flex-col gap-12 overflow-y-auto">
              <h2 className="font-orbitron text-2xl font-bold tracking-tighter text-white mt-4">
                COMMAND_MENU
              </h2>

              <nav className="flex flex-col gap-10">
                {MENU_ITEMS.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex justify-between items-center group cursor-pointer"
                  >
                    <span className="font-orbitron text-[15px] text-slate-300 group-hover:text-primary-container transition-colors tracking-wide">
                      {item}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-primary-container group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Footer Area */}
            <div className="p-8 pb-10 border-t border-white/5">
              <div className="h-[1px] w-full bg-white/5 mb-10" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary-container text-black font-orbitron font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,255,159,0.3)] hover:shadow-[0_0_40px_rgba(0,255,159,0.5)] transition-all text-xs rounded-sm"
              >
                INITIATE_DOCKING
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
