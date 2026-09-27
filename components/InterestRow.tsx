"use client";

import { motion } from "framer-motion";
import { Interest } from "@/data/interests";

export default function InterestRow({
  interest,
  index,
}: {
  interest: Interest;
  index: number;
}) {
  return (
    <motion.a
      href={interest.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group block py-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-pixel text-base text-cream/50">
            {interest.number}
          </span>
          <h3 className="text-3xl font-medium sm:text-4xl">
            {interest.title}
          </h3>
        </div>
        <span className="font-pixel text-2xl text-brand-yellow transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </div>

      {/* small placeholder visual — swap for a real photo */}
      <div className="mt-4 h-20 w-full max-w-xs overflow-hidden rounded-md bg-cream/10 transition-colors duration-300 group-hover:bg-cream/20">
        <div className="flex h-full items-center justify-center font-pixel text-sm text-cream/40">
          image
        </div>
      </div>
    </motion.a>
  );
}
