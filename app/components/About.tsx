"use client";

import { motion } from "framer-motion";

export default function About() {
  const edges = [
    {
      title: "Trader’s Mindset",
      desc: "Risk-first thinking, probability-based decisions, and emotional discipline shaped by real market exposure.",
    },
    {
      title: "Developer’s Precision",
      desc: "Clean systems, performance-focused UI, and logic-driven problem solving across web & tools.",
    },
    {
      title: "Long-Term Discipline",
      desc: "Consistency over hype. Process over outcomes. Built habits that compound over time.",
    },
  ];

  return (
    <section id="about" className="relative w-full px-6 py-24 section-divider">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl font-semibold text-neutral-100 mb-6"
        >
          About
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-sm sm:text-base text-neutral-400 mb-16"
        >
          I’m a student focused on building systems — in markets and in code.
          I combine analytical trading with clean, functional development.
        </motion.p>

        {/* Edge cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {edges.map((edge, i) => (
            <motion.div
              key={edge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                group
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-sky-400/60
                hover:bg-white/[0.05]
                hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]
              "
            >
              <h3 className="text-base font-medium text-neutral-100 mb-2 transition-colors group-hover:text-sky-200">
                {edge.title}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {edge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}