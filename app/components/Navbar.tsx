"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const indicatorRef = useRef<HTMLDivElement>(null);

  const sections = ["home", "about", "projects", "skills", "games", "contact"];

  // ---------- SCROLL DETECTION ----------
  useEffect(() => {
    const onScroll = () => {
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.48) {
          current = id;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---------- INDICATOR ----------
  useEffect(() => {
    const indicator = indicatorRef.current;
    const activeEl = document.getElementById(`nav-${active}`);
    if (!indicator || !activeEl) return;

    const rect = activeEl.getBoundingClientRect();
    const parentRect = activeEl.parentElement!.getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  }, [active]);

  const linkClass = (id: string) =>
    `
      relative px-1
      text-[11px] sm:text-sm
      transition-colors duration-300
      ${
        active === id
          ? "text-white"
          : "text-white/50 hover:text-white/90"
      }
    `;

  return (
    <nav className="sticky top-5 z-50 flex justify-center pointer-events-none">
      <div
        className="
          pointer-events-auto
          relative
          rounded-full
          border border-white/10
          bg-white/[0.035]
          backdrop-blur-md
          px-5 py-2
          shadow-[0_0_25px_rgba(255,255,255,0.04)]
        "
      >
        <div className="relative flex items-center gap-5 whitespace-nowrap">

          <a id="nav-home" href="#home" className={linkClass("home")}>
            Home
          </a>

          <a id="nav-about" href="#about" className={linkClass("about")}>
            About
          </a>

          <a id="nav-projects" href="#projects" className={linkClass("projects")}>
            Projects
          </a>

          <a
            id="nav-skills"
            href="#skills"
            className={`text-[10px] sm:text-sm ${linkClass("skills")}`}
          >
            Skills
          </a>

          <a id="nav-games" href="#games" className={linkClass("games")}>
            Games
          </a>

          <a id="nav-contact" href="#contact" className={linkClass("contact")}>
            Contact
          </a>

          {/* Active indicator */}
          <div
            ref={indicatorRef}
            className="
              absolute
              -bottom-[6px]
              h-[2px]
              rounded-full
              bg-sky-300/80
              shadow-[0_0_14px_rgba(56,189,248,0.55)]
              transition-all duration-300 ease-out
            "
          />
        </div>
      </div>
    </nav>
  );
}