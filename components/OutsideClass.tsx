"use client";

import { motion } from "framer-motion";
import InterestRow from "./InterestRow";
import OthersRow from "./OthersRow";
import { primaryInterests } from "@/data/interests";

export default function OutsideClass() {
  return (
    <section
      id="outside"
      className="bg-brand-blue px-6 py-24 text-cream md:px-20 lg:pl-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl font-medium sm:text-5xl">Outside of Class</h2>
        <p className="mt-2 text-brand-yellow/80">
          Different pursuits, same curiosity.
        </p>
      </motion.div>

      <div className="flex flex-col divide-y divide-cream/15">
        {primaryInterests.map((interest, i) => (
          <InterestRow key={interest.number} interest={interest} index={i} />
        ))}
      </div>

      <div className="mt-2">
        <OthersRow />
      </div>
    </section>
  );
}
