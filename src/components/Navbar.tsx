"use client";

import { motion } from "framer-motion";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import CommandMenu from "./CommandMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-8 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-8 h-8 bg-primary-container rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,255,159,0.4)]"
          >
            <Globe className="w-5 h-5 text-black" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-orbitron font-bold tracking-tighter text-white"
          >
            ORBITAL_OS
          </motion.div>
        </div>


        <div className="flex items-center gap-4">

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-primary-container transition-all flex flex-col items-center justify-center p-2 w-10 h-10 gap-1.5 relative overflow-hidden"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary-container block rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-primary-container block rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary-container block rounded-full"
            />
          </motion.button>
        </div>
      </nav>

      {/* Command Menu Drawer */}
      <CommandMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
