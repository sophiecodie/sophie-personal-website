"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExperienceEntry, ExperienceVariant } from "@/data/experience";
import { images } from "@/lib/images";

export function spanClass(variant: ExperienceVariant) {
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
  const links = (entry.links ?? []).filter((l) => l.href);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 24 } }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      // cream "paper" card: opaque, thin border, no glass, no big shadow
      className={`group rounded-xl border border-navy/10 bg-[#FFFBEA] p-6 text-brand-blue transition-colors duration-300 hover:border-brand-blue/40 sm:p-8`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
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
            <div className="mt-6 border-t border-navy/10 pt-6">
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-4 space-y-3 text-sm text-navy/80 sm:text-base">
                {entry.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {links.map((l) => {
                    // in-site pages navigate without a reload; everything else opens a new tab
                    const Anchor = l.href.startsWith("/") ? Link : "a";
                    return (
                      <Anchor
                        key={l.label}
                        href={l.href}
                        onClick={(e) => e.stopPropagation()}
                        {...(l.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        className="group/cta inline-flex items-center gap-2 text-sm uppercase tracking-wider text-brand-blue"
                      >
                        <span className="border-b border-brand-blue/40">{l.label}</span>
                        <span className="transition-transform duration-300 group-hover/cta:translate-x-1">↗</span>
                      </Anchor>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-brand-blue/10 px-2 py-0.5 text-xs uppercase tracking-wider text-brand-blue/80">
      {children}
    </span>
  );
}

// "VIEW ↗" cue shared by every variant: the label fades in on hover, the
// arrow nudges, and it flips to "CLOSE" once the card is open.
function Cue({ open, large = false }: { open: boolean; large?: boolean }) {
  return (
    <span className="flex shrink-0 items-center gap-2 uppercase tracking-wider text-brand-blue">
      <span
        className={`text-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {open ? "close" : "view"}
      </span>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.25 }}
        className={`inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          large ? "text-3xl" : "text-2xl"
        }`}
      >
        {open ? "+" : "↗"}
      </motion.span>
    </span>
  );
}

// slides right slightly on card hover
const titleHover = "transition-transform duration-300 group-hover:translate-x-1";
const meta = "text-sm uppercase tracking-wider text-brand-blue/60";
const descriptor = "text-sm text-navy/70 sm:text-base";

function Collapsed({ entry, open }: { entry: ExperienceEntry; open: boolean }) {
  switch (entry.variant) {
    // type-led: large organization name, small metadata
    case "feature":
      return (
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="text-base text-brand-blue/50">{entry.number}</span>
            <h3 className={`mt-2 text-4xl font-semibold uppercase leading-none tracking-wide sm:text-6xl ${titleHover}`}>
              {entry.title}
            </h3>
            <p className={`mt-3 ${meta}`}>
              {entry.role} · {entry.date}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className={descriptor}>{entry.descriptor}</p>
              <Tag>{entry.tags[0]}</Tag>
            </div>
          </div>
          <Cue open={open} large />
        </div>
      );

    // visual-led: small image first, concise text
    case "visual":
      return (
        <>
          <div className="aspect-[2/1] w-full overflow-hidden rounded-lg bg-brand-blue/10">
            <Image
              src={images.weillCornell}
              alt=""
              sizes="(min-width: 768px) 640px, 100vw"
              className="pixel-art h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <h3 className={`text-2xl font-semibold uppercase tracking-wide sm:text-3xl ${titleHover}`}>
                {entry.title}
              </h3>
              <p className={`mt-1 ${meta}`}>
                {entry.role} · {entry.date}
              </p>
              <p className={`mt-2 ${descriptor}`}>{entry.descriptor}</p>
            </div>
            <Cue open={open} />
          </div>
        </>
      );

    // stat-led: one big number carries the card
    case "stat":
      return (
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="block text-6xl font-bold leading-none text-brand-blue/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand-blue/30 sm:text-7xl">
              {entry.year}
            </span>
            <h3 className={`mt-4 text-2xl font-semibold uppercase tracking-wide sm:text-3xl ${titleHover}`}>
              {entry.title}
            </h3>
            <p className={`mt-1 ${meta}`}>
              {entry.role} · {entry.date}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
            <p className={`mt-2 ${descriptor}`}>{entry.descriptor}</p>
          </div>
          <Cue open={open} />
        </div>
      );

    // small pixel motif + text
    case "motif":
      return (
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center sm:h-14 sm:w-14 justify-center rounded-lg bg-brand-blue/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <div className="grid grid-cols-2 gap-1">
                <span className="h-2.5 w-2.5 bg-brand-blue/70" />
                <span className="h-2.5 w-2.5 bg-brand-blue/30" />
                <span className="h-2.5 w-2.5 bg-brand-blue/30" />
                <span className="h-2.5 w-2.5 bg-brand-blue/70" />
              </div>
            </div>
            <div>
              <h3 className={`text-lg font-semibold uppercase tracking-wide sm:text-2xl ${titleHover}`}>
                {entry.title}
              </h3>
              <p className={`mt-1 ${meta}`}>
                {entry.role} · {entry.date}
              </p>
              <p className={`mt-2 ${descriptor}`}>{entry.descriptor}</p>
            </div>
          </div>
          <Cue open={open} />
        </div>
      );

    // horizontal: compact line + arrow
    case "compact":
      return (
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-sm text-brand-blue/50">{entry.number}</span>
            <h3 className={`text-xl font-semibold uppercase tracking-wide sm:text-2xl ${titleHover}`}>
              {entry.title}
            </h3>
            <span className={meta}>
              {entry.role} · {entry.date}
            </span>
            <p className={`w-full ${descriptor}`}>{entry.descriptor}</p>
          </div>
          <Cue open={open} />
        </div>
      );
  }
}
