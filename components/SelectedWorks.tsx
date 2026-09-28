"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

/**
 * Selected Works as a sliding tray embedded in the hero. It's a native
 * scroll container (vertical on desktop, horizontal on small screens) with
 * scroll-snap, so trackpads, wheels and touch all just scroll it. Mouse
 * users can also click-and-drag it.
 */
export default function SelectedWorks() {
  const trayRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(
    null
  );
  const suppressClick = useRef(false);
  const total = projects.length;

  // whichever axis actually overflows is the one the tray scrolls on
  function isVertical(el: HTMLElement) {
    return el.scrollHeight > el.clientHeight + 1;
  }

  // index of the widget whose leading edge is closest to the scroll position
  function nearestIndex(el: HTMLElement) {
    const vertical = isVertical(el);
    const pos = vertical ? el.scrollTop : el.scrollLeft;
    const starts = (Array.from(el.children) as HTMLElement[]).map((item) =>
      vertical ? item.offsetTop : item.offsetLeft
    );
    return starts.reduce(
      (best, start, i) =>
        Math.abs(start - pos) < Math.abs(starts[best] - pos) ? i : best,
      0
    );
  }

  function updateActive() {
    const el = trayRef.current;
    if (!el) return;
    const vertical = isVertical(el);
    const pos = vertical ? el.scrollTop : el.scrollLeft;
    const max = vertical
      ? el.scrollHeight - el.clientHeight
      : el.scrollWidth - el.clientWidth;
    setActive(pos >= max - 2 ? total - 1 : nearestIndex(el));
  }

  function scrollToItem(i: number) {
    const el = trayRef.current;
    const item = el?.children[i] as HTMLElement | undefined;
    if (!el || !item) return;
    const vertical = isVertical(el);
    el.scrollTo({
      top: vertical ? item.offsetTop - parseFloat(getComputedStyle(el).paddingTop) : 0,
      left: vertical ? 0 : item.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft),
      behavior: "smooth",
    });
  }

  // click-and-drag for mouse users; touch already scrolls natively
  function onPointerDown(e: React.PointerEvent) {
    const el = trayRef.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop, moved: false };
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = trayRef.current;
    const d = drag.current;
    if (!el || !d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.moved && Math.hypot(dx, dy) < 5) return;
    if (!d.moved) {
      d.moved = true;
      // snapping would fight the pointer mid-drag
      el.style.scrollSnapType = "none";
      el.setPointerCapture(e.pointerId);
    }
    el.scrollTop = d.top - dy;
    el.scrollLeft = d.left - dx;
  }

  function onPointerUp() {
    const el = trayRef.current;
    const d = drag.current;
    drag.current = null;
    if (!el || !d?.moved) return;
    suppressClick.current = true;
    el.style.scrollSnapType = "";
    updateActive();
    // settle onto the nearest widget, same as a native snap would
    scrollToItem(nearestIndex(el));
  }

  function onClickCapture(e: React.MouseEvent) {
    // a drag that ends over a widget shouldn't also open it
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClick.current = false;
    }
  }

  return (
    <motion.aside
      id="selected-works"
      aria-label="Selected works"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-navy/15 bg-brand-blue text-cream lg:h-[min(80vh,720px)]"
    >
      <header className="flex items-end justify-between gap-4 px-6 pb-5 pt-6 uppercase">
        <h2 className="text-3xl font-bold leading-none tracking-wide text-brand-yellow sm:text-4xl">
          Selected Works
        </h2>
        <span className="flex shrink-0 items-center gap-1 pb-0.5 text-base leading-none tracking-wider text-cream/60" aria-live="polite">
          <span className="relative inline-block h-[1em] w-[2ch] overflow-hidden text-cream">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={active}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {projects[active].number}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>/ {String(total).padStart(2, "0")}</span>
        </span>
      </header>

      <div
        ref={trayRef}
        onScroll={updateActive}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        className="no-scrollbar relative flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 py-3 lg:snap-y lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:scroll-py-3 lg:pb-16"
      >
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <footer className="flex items-center justify-between border-t border-cream/15 px-6 py-4">
        <div className="flex items-center gap-2" aria-label="Jump to project">
          {projects.map((p, i) => (
            <button
              key={p.number}
              aria-label={`${p.number}: ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => scrollToItem(i)}
              className="group flex h-6 items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-brand-yellow"
                    : "w-1.5 bg-cream/40 group-hover:bg-cream/70"
                }`}
              />
            </button>
          ))}
        </div>
        <span className="text-sm uppercase tracking-wider text-cream/50">
          <span className="lg:hidden">swipe →</span>
          <span className="hidden lg:inline">scroll ↓</span>
        </span>
      </footer>
    </motion.aside>
  );
}
