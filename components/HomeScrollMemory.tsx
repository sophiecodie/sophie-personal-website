"use client";

import { useLayoutEffect } from "react";

const KEY = "home-scroll-y";

// false until the home page has mounted once in this browser tab session
// (resets on a full reload, when the browser handles scroll itself)
let mountedBefore = false;

/**
 * Remembers how far down the home page you were, so coming back from a
 * project, Reading or Writing page lands you where you left off instead
 * of at the top.
 */
export default function HomeScrollMemory() {
  useLayoutEffect(() => {
    let saved: number | null = null;
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw !== null) saved = Number(raw);
    } catch {}

    if (mountedBefore && saved !== null) {
      // "instant" skips the smooth scroll set on <html> in globals.css
      window.scrollTo({ top: saved, behavior: "instant" });
    } else if (window.location.hash) {
      // back links fall back to a section anchor (e.g. /#outside)
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    }
    mountedBefore = true;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // ignore the scroll-to-top that happens as the next page takes over
        if (window.location.pathname !== "/") return;
        try {
          sessionStorage.setItem(KEY, String(window.scrollY));
        } catch {}
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
