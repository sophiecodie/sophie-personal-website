"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { otherInterests } from "@/data/interests";

export default function OthersRow() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-cream/15 pt-8">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between text-left"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-pixel text-base text-cream/50">03</span>
          <h3 className="text-2xl font-medium sm:text-3xl">Others</h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="font-pixel text-2xl text-brand-yellow"
        >
          +
        </motion.span>
      </button>

      <p className="mt-3 font-pixel text-base text-cream/50">
        {otherInterests.map((o) => o.title).join(" · ")}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="others-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {otherInterests.map((o) => (
                <div key={o.title}>
                  <p className="font-pixel text-sm text-brand-yellow/80">
                    {o.title}
                  </p>
                  <p className="mt-1 text-sm text-cream/70">{o.blurb}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
