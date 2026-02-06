"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/5" />

      {/* Subtle glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-sky-400/20 blur-sm" />

      <div className="relative py-14 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            text-[11px]
            tracking-[0.28em]
            text-neutral-500
            transition-all duration-300
            hover:text-neutral-300
            hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.35)]
          "
        >
          © {new Date().getFullYear()} HASSAN IRFAN
        </motion.p>
      </div>
    </footer>
  );
}