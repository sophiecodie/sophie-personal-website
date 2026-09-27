"use client";

import { motion } from "framer-motion";
import { useActiveSection, SectionId } from "@/lib/useActiveSection";

const TABS: { id: SectionId; label: string[] }[] = [
  { id: "about", label: ["ABOUT"] },
  { id: "experience", label: ["EXPERIENCE"] },
  { id: "outside", label: ["OUTSIDE", "CLASS"] },
  { id: "contact", label: ["RESUME", "CONTACT"] },
];

// each section's background color, so the active tab can invert against it.
// Selected Works sits between "about" and "experience" but isn't tracked —
// it's a homepage feature, not its own nav destination.
const SECTION_BG: Record<SectionId, "yellow" | "blue"> = {
  about: "yellow",
  experience: "yellow",
  outside: "blue",
  contact: "yellow",
};

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function SideTabs() {
  const active = useActiveSection();

  return (
    <>
      {/* Desktop: fixed vertical bookmarks on the left edge */}
      <nav
        aria-label="Section navigation"
        className="fixed left-0 top-0 z-50 hidden h-screen flex-col justify-center gap-3 py-8 md:flex"
      >
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          const invertClasses =
            SECTION_BG[tab.id] === "yellow"
              ? "bg-brand-blue text-brand-yellow"
              : "bg-brand-yellow text-brand-blue";

          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              <motion.span
                animate={{ x: isActive ? 14 : 0 }}
                whileHover={{ x: 14 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className={`flex flex-col items-start whitespace-nowrap rounded-r-md border px-4 py-3 font-pixel text-sm leading-tight tracking-wide transition-colors duration-200 ${
                  isActive
                    ? `${invertClasses} border-transparent`
                    : "border-cream/20 bg-navy/80 text-cream/55 group-hover:text-cream"
                }`}
              >
                {tab.label.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </motion.span>
            </button>
          );
        })}
      </nav>

      {/* Mobile: compact bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-cream/15 bg-navy/95 py-3 backdrop-blur md:hidden">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              aria-current={isActive ? "true" : undefined}
              className={`font-pixel text-sm tracking-wide transition-colors duration-200 ${
                isActive ? "text-brand-yellow" : "text-cream/50"
              }`}
            >
              {tab.label.join(" ")}
            </button>
          );
        })}
      </div>
    </>
  );
}
