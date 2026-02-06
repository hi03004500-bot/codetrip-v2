"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const links = [
    { label: "WhatsApp", href: "https://wa.me/923274780117" },
    { label: "Instagram", href: "https://www.instagram.com/hssn._.1x/" },
    { label: "Facebook", href: "https://www.facebook.com/hassan.irfan.98499" },
  ];

  return (
    <section id="contact" className="relative w-full px-6 py-24 section-divider">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            group
            relative
            text-center
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            p-12 sm:p-14
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:border-sky-400/60
            hover:bg-white/[0.05]
            hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]
          "
        >
          {/* Accent line */}
          <div className="mx-auto mb-8 h-10 w-px bg-sky-500/40" />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-3">
            Connect
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-neutral-400 mb-12">
            Open to conversations — projects, markets, or ideas.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="
                  group
                  text-xs sm:text-sm
                  tracking-widest
                  text-neutral-300
                  border border-white/10
                  rounded-full
                  px-6 py-2.5
                  transition-all duration-300 ease-out
                  hover:text-sky-200
                  hover:border-sky-400/60
                  hover:bg-white/[0.05]
                  hover:shadow-[0_0_18px_rgba(56,189,248,0.45)]
                "
              >
                {link.label.toUpperCase()}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}