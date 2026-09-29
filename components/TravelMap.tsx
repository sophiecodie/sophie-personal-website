"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Place, places } from "@/data/travel";
import { DOT_STEP, DOT_TOP_LAT, WORLD_DOTS } from "@/data/worldDots";

const COLS = WORLD_DOTS[0].length;
const ROWS = WORLD_DOTS.length;

// every land cell as one small square, joined into a single path
const LAND_PATH = WORLD_DOTS.flatMap((row, y) =>
  Array.from(row, (cell, x) => (cell === "1" ? `M${x} ${y}h.7v.7h-.7z` : ""))
).join("");

// tilts for the popped-out photos, cycled
const TILTS = [-4, 3, -2, 4, -3, 2];

/**
 * A compact pixel world map with a pin per place. Pressing a pin pops that
 * place's photos out below the map; pressing a photo opens it large.
 */
export default function TravelMap() {
  const [active, setActive] = useState<Place | null>(null);
  const [open, setOpen] = useState<number | null>(null); // index of the enlarged photo

  return (
    <div>
      <div className="relative mx-auto max-w-3xl">
        <svg viewBox={`0 0 ${COLS} ${ROWS}`} aria-hidden className="block h-auto w-full">
          <path d={LAND_PATH} className="fill-cream/25" />
        </svg>

        {places.map((place) => {
          const x = (place.lon + 180) / DOT_STEP;
          const y = (DOT_TOP_LAT - place.lat) / DOT_STEP;
          const isActive = active?.name === place.name;
          return (
            <button
              key={place.name}
              type="button"
              onClick={() => setActive(isActive ? null : place)}
              aria-pressed={isActive}
              aria-label={`${isActive ? "Hide" : "Show"} photos from ${place.name}`}
              style={{ left: `${(x / COLS) * 100}%`, top: `${(y / ROWS) * 100}%` }}
              className="group absolute -translate-x-1/2 -translate-y-1/2 p-2"
            >
              <span
                className={`relative block h-3 w-3 border-2 border-navy transition-transform duration-300 group-hover:scale-125 sm:h-3.5 sm:w-3.5 ${
                  isActive ? "scale-125 bg-brand-yellow" : "bg-cream"
                }`}
              >
                {!isActive && <span aria-hidden className="absolute inset-0 animate-ping bg-brand-yellow/60" />}
              </span>
              <span
                className={`absolute left-1/2 top-full -mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-wider transition-colors duration-200 sm:text-xs ${
                  isActive ? "text-brand-yellow" : "text-cream/70 group-hover:text-brand-yellow"
                }`}
              >
                {place.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* photos pop out for the selected place */}
      <div className="mt-10 min-h-[3rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <p className="text-center text-sm uppercase tracking-wider text-brand-yellow">
                {active.name} · {active.photos.length} photos
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5">
                {active.photos.map((photo, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-label={`View larger: ${photo.alt}`}
                    initial={{ opacity: 0, scale: 0.4, y: -40, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: TILTS[i % TILTS.length] }}
                    whileHover={{ y: -6, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.06 }}
                    className="border-2 border-navy bg-[#FFFBEA] p-1.5 pb-5 shadow-[3px_3px_0_0_rgba(18,22,58,0.25)]"
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      sizes="200px"
                      placeholder="blur"
                      className="h-28 w-auto sm:h-32"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-sm text-cream/50"
            >
              tap a pin to see photos
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && open !== null && (
          <Lightbox place={active} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

/** Full-screen view of one photo; arrow keys/buttons step through the place, Esc closes. */
function Lightbox({
  place,
  index,
  onChange,
  onClose,
}: {
  place: Place;
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = place.photos.length;
  const photo = place.photos[index];
  const step = (d: number) => onChange((index + d + count) % count);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onChange, onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${place.name} photo ${index + 1} of ${count}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-navy/90 p-4 sm:p-10"
    >
      <motion.div
        key={index}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="border-2 border-navy bg-[#FFFBEA] p-2 pb-8 sm:p-3 sm:pb-10"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          sizes="90vw"
          placeholder="blur"
          className="h-auto max-h-[70vh] w-auto max-w-[85vw]"
        />
      </motion.div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-6 text-sm uppercase tracking-wider text-cream"
      >
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="px-2 py-1 text-xl hover:text-brand-yellow">
          ←
        </button>
        <span className="text-cream/70">
          {place.name} · {index + 1}/{count}
        </span>
        <button type="button" onClick={() => step(1)} aria-label="Next photo" className="px-2 py-1 text-xl hover:text-brand-yellow">
          →
        </button>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="border-2 border-cream/40 px-3 py-1 hover:border-brand-yellow hover:text-brand-yellow"
        >
          close
        </button>
      </div>
    </motion.div>
  );
}
