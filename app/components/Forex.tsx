"use client";

import { motion } from "framer-motion";

const PAIRS = [
  {
    symbol: "EURUSD",
    label: "EUR / USD",
    tvSymbol: "FX:EURUSD",
  },
  {
    symbol: "GBPUSD",
    label: "GBP / USD",
    tvSymbol: "FX:GBPUSD",
  },
];

export default function Forex() {
  return (
    <section
      id="forex"
      className="relative w-full px-6 py-28 section-divider"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 mb-20"
        >
          Forex
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {PAIRS.map((pair, i) => (
            <motion.a
              key={pair.symbol}
              href={`https://www.tradingview.com/chart/?symbol=${pair.tvSymbol}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.07,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="
                group relative block rounded-2xl p-[1px]
                bg-gradient-to-br from-white/10 via-white/5 to-white/10
                hover:from-sky-400/40 hover:via-white/10 hover:to-sky-400/40
                transition-all duration-300
              "
            >
              {/* Inner glass */}
              <div
                className="
                  relative rounded-2xl bg-[#0b0d10]/80 backdrop-blur-xl
                  p-6 transition-all duration-300
                  group-hover:bg-[#0b0d10]/90
                "
              >
                {/* Edge glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    shadow-[0_0_0_1px_rgba(56,189,248,0.55),0_0_36px_rgba(56,189,248,0.35)]
                  "
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-medium tracking-wide text-neutral-100 group-hover:text-sky-200 transition-colors">
                    {pair.label}
                  </h3>
                  <span className="text-[10px] tracking-[0.25em] text-sky-400/80">
                    LIVE
                  </span>
                </div>

                {/* Chart */}
                <div className="relative h-[120px] rounded-lg overflow-hidden border border-white/5">
                  <iframe
                    src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=${pair.tvSymbol}&locale=en&dateRange=1D&colorTheme=dark&isTransparent=true`}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Footer hint */}
                <p className="mt-5 text-[11px] tracking-wide text-neutral-500 group-hover:text-neutral-400 transition-colors">
                  Open full TradingView chart →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}