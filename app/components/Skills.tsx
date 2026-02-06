"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const groups = [
    {
      title: "Trading & Markets",
      items: [
        "FX Trading",
        "Volume Spread Analysis (VSA)",
        "Engulfing Strategies",
        "Volume-Based Market Analysis",
        "Risk & Trade Management",
      ],
    },
    {
      title: "Web / AI Development",
      items: [
        "AI-assisted Web Development",
        "Next.js",
        "React",
        "Tailwind CSS",
        "WordPress Development",
      ],
    },
    {
      title: "Content & Media",
      items: [
        "Adobe Premiere Pro",
        "Video Editing",
        "Short-form & Long-form Content",
      ],
    },
    {
      title: "Workflow & Tools",
      items: [
        "System-based Learning",
        "Process Optimization",
        "AI Tooling (ChatGPT, Claude)",
        "Version Control (Git)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full px-6 py-28 section-divider"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-semibold text-neutral-100 mb-20"
        >
          Skills & Focus
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
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
              <h3 className="text-xs font-semibold tracking-widest text-sky-400 mb-5 group-hover:text-sky-200 transition-colors">
                {group.title.toUpperCase()}
              </h3>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-neutral-400 leading-relaxed transition-colors duration-300 group-hover:text-neutral-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}