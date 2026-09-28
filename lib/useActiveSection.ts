"use client";

import { useEffect, useState } from "react";

export type SectionId = "about" | "experience" | "skills" | "outside" | "contact";

const SECTION_IDS: SectionId[] = [
  "about",
  "experience",
  "skills",
  "outside",
  "contact",
];

/**
 * Watches the page sections and reports which one is currently
 * centered in the viewport, so SideTabs.tsx can highlight the right tab
 * as the user scrolls (no click required).
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        });
      },
      // shrink the viewport to a thin band through the middle of the
      // screen — whichever section crosses that band becomes "active"
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
