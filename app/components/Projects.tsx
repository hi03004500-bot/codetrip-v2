"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Trading Journal Dashboard",
      description:
        "A personal FX trading journal built to track trades, review performance, and reinforce disciplined risk management.",
      focus:
        "Focused on data clarity, journaling workflows, and consistency-driven decision making.",
      stack: "Next.js • Tailwind • PostgreSQL",
    },
    {
      title: "Personal Portfolio",
      description:
        "A minimal portfolio website designed to present work clearly without unnecessary visual noise.",
      focus:
        "Focused on typography, spacing, motion restraint, and readable layouts.",
      stack: "Next.js • Tailwind • Framer Motion",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full px-6 py-28 section-divider"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-semibold text-neutral-100 mb-16"
        >
          Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
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
              <h3 className="text-lg font-medium text-neutral-100 mb-3 group-hover:text-sky-200 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                {project.focus}
              </p>

              <span className="text-xs tracking-wide text-neutral-500 group-hover:text-neutral-400 transition-colors">
                {project.stack}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}