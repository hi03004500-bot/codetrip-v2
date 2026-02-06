"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const games = [
  {
    name: "Red Dead Redemption 2",
    src: "/games/rdr2.png",
    type: "wide",
  },
  {
    name: "Minecraft",
    src: "/games/minecraft.svg",
    type: "square",
  },
  {
    name: "GTA V",
    src: "/games/gta5.svg",
    type: "square",
  },
  {
    name: "Tekken 8",
    src: "/games/tekken8.png",
    type: "wide",
  },
];

export default function Games() {
  return (
    <section
      id="games"
      className="relative w-full py-32 min-h-[70vh] section-divider"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-3">
            Games
          </h2>
          <p className="text-sm text-neutral-500">
            Titles I enjoy outside work — focus, reflex, immersion.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-10 place-items-center">
          {games.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-center"
            >
              <div
                className={`
                  relative flex items-center justify-center
                  transition-all duration-300
                  ${
                    game.type === "wide"
                      ? "w-[130px] h-[65px] sm:w-[170px] sm:h-[85px]"
                      : "w-[90px] h-[90px] sm:w-[110px] sm:h-[110px]"
                  }
                `}
              >
                <Image
                  src={game.src}
                  alt={game.name}
                  fill
                  sizes="(max-width: 640px) 80px, 160px"
                  className={`
                    object-contain
                    opacity-70
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]
                    ${
                      game.name === "Red Dead Redemption 2" ||
                      game.name === "Tekken 8"
                        ? "scale-125"
                        : ""
                    }
                  `}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}