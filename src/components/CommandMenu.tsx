"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, type RefObject } from "react";

interface CommandMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  /** The hamburger button: it stays visible above the drawer and is part of the focus loop. */
  toggleRef: RefObject<HTMLButtonElement | null>;
}

const MENU_ITEMS = [
  { label: "INICIO", targetId: "hero" },
  { label: "PROYECTOS", targetId: "projects" },
  { label: "CAPACIDADES IA", targetId: "ai-capabilities" },
  { label: "STACK TECNOLÓGICO", targetId: "tech-stack" },
  { label: "ROADMAP PROFESIONAL", targetId: "roadmap" },
  { label: "CONTACTO", targetId: "cta" },
];

export default function CommandMenu({ id, isOpen, onClose, toggleRef }: CommandMenuProps) {
  const navRef = useRef<HTMLElement>(null);

  // While open: Escape closes, focus moves into the menu and returns to the toggle on close.
  useEffect(() => {
    if (!isOpen) return;
    const toggle = toggleRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose, toggleRef]);

  // Keep Tab inside the dialog: after the last link, loop back to the toggle button.
  const handleLastLinkKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      toggleRef.current?.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-[30] bg-black/40 backdrop-blur-[2px]"
          />

          <motion.div
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
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
            <div className="flex-1 p-8 pt-24 flex flex-col gap-12 overflow-y-auto">
              <h2 className="font-orbitron text-2xl font-bold tracking-tighter text-white mt-4">
                COMMAND_MENU
              </h2>

              <nav ref={navRef} aria-label="Secciones" className="flex flex-col gap-10">
                {MENU_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.targetId}
                    href={`#${item.targetId}`}
                    onClick={onClose}
                    onKeyDown={i === MENU_ITEMS.length - 1 ? handleLastLinkKeyDown : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex justify-between items-center group cursor-pointer"
                  >
                    <span className="font-orbitron text-[15px] text-slate-300 group-hover:text-primary-container transition-colors tracking-wide">
                      {item.label}
                    </span>
                    <ChevronRight aria-hidden="true" className="w-5 h-5 text-slate-600 group-hover:text-primary-container group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
