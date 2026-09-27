"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceEntry, ExperienceVariant } from "@/data/experience";

function spanClass(variant: ExperienceVariant) {
  switch (variant) {
    case "feature":
      return "md:col-span-12";
    case "visual":
      return "md:col-span-7";
    case "motif":
      return "md:col-span-5";
    case "stat":
      return "md:col-span-5";
    case "compact":
      return "md:col-span-7";
  }
}

export default function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`${spanClass(
        entry.variant
      )} rounded-md bg-brand-blue/5 p-6 transition-colors duration-300 hover:bg-brand-blue/10 sm:p-7`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full flex-col text-left"
      >
        <Collapsed entry={entry} open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 border-t border-brand-blue/15 pt-5">
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-pixel text-sm text-brand-blue/50">
                {entry.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="mt-3 space-y-3 text-sm text-brand-blue/80 sm:text-base">
                {entry.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {entry.cta && (
                <a
                  href={entry.cta.href}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 inline-flex items-center gap-2 font-pixel text-base text-brand-blue"
                >
                  <span className="border-b border-brand-blue/40">
                    {entry.cta.label}
                  </span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Collapsed({ entry, open }: { entry: ExperienceEntry; open: boolean }) {
  switch (entry.variant) {
    case "feature":
      return (
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="font-pixel text-base text-brand-blue/50">
              {entry.number}
            </span>
            <h3 className="mt-2 text-4xl font-medium transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
              {entry.title}
            </h3>
            <p className="mt-2 font-pixel text-base text-brand-blue/60">
              {entry.role} · {entry.date}
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="font-pixel text-3xl text-brand-blue"
          >
            ↗
          </motion.span>
        </div>
      );

    case "visual":
      return (
        <>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-sm bg-brand-blue/10 transition-colors duration-300 group-hover:bg-brand-blue/15">
            <div className="flex h-full items-center justify-center font-pixel text-base text-brand-blue/40">
              image
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-medium sm:text-3xl">
                {entry.title}
              </h3>
              <p className="mt-1 font-pixel text-sm text-brand-blue/60">
                {entry.role} · {entry.date}
              </p>
            </div>
            <span className="font-pixel text-2xl text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
              {open ? "–" : "+"}
            </span>
          </div>
        </>
      );

    case "stat":
      return (
        <div className="flex flex-col items-start">
          <span className="font-pixel text-7xl leading-none text-brand-blue/25 transition-transform duration-300 group-hover:translate-x-1 sm:text-8xl">
            {entry.year}
          </span>
          <h3 className="mt-3 text-2xl font-medium sm:text-3xl">
            {entry.title}
          </h3>
          <p className="mt-1 font-pixel text-sm text-brand-blue/60">
            {entry.role}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
        </div>
      );

    case "motif":
      return (
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 transition-colors duration-300 group-hover:bg-brand-blue/20">
            <div className="grid grid-cols-2 gap-1">
              <span className="h-2 w-2 rounded-sm bg-brand-blue/70" />
              <span className="h-2 w-2 rounded-sm bg-brand-blue/30" />
              <span className="h-2 w-2 rounded-sm bg-brand-blue/30" />
              <span className="h-2 w-2 rounded-sm bg-brand-blue/70" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium sm:text-2xl">{entry.title}</h3>
            <p className="mt-1 font-pixel text-sm text-brand-blue/60">
              {entry.role} · {entry.date}
            </p>
          </div>
        </div>
      );

    case "compact":
      return (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-pixel text-sm text-brand-blue/50">
              {entry.number}
            </span>
            <h3 className="text-xl font-medium sm:text-2xl">{entry.title}</h3>
            <span className="font-pixel text-sm text-brand-blue/50">
              {entry.date}
            </span>
          </div>
          <span className="font-pixel text-2xl text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
            {open ? "–" : "↗"}
          </span>
        </div>
      );
  }
}
