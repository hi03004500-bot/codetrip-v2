"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-screen
        flex
        items-center
        justify-center
      "
    >
      {/* subtle radial glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_60%)]
        "
      />

      <div className="text-center px-4">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-semibold
            tracking-tight
            text-white
            drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]
          "
        >
          Hassan Irfan
        </motion.h1>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="
            mt-4
            text-sm
            sm:text-base
            text-neutral-400
            tracking-wide
            whitespace-nowrap
          "
        >
          Student · Casual Gamer · FX Trader
        </motion.p>

        {/* Micro tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="
            mt-6
            text-xs
            tracking-widest
            text-neutral-600
            uppercase
          "
        >
          Systems • Discipline • Consistency
        </motion.p>
      </div>
    </section>
  );
}