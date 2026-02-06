"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />

      {/* animated top glow */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-25%] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sky-500/25 blur-[160px]"
      />

      {/* animated lower glow */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-30%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-[180px]"
      />
    </div>
  );
}
