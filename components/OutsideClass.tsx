"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import InterestRow from "./InterestRow";
import OthersRow from "./OthersRow";
import { primaryInterests } from "@/data/interests";

export default function OutsideClass() {
  return (
    <section
      id="outside"
      className="relative overflow-hidden border-t border-cream/15 bg-brand-blue px-6 py-24 text-cream md:px-20 lg:pl-32"
    >
      {/* two faint clouds drifting behind the content */}
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="320px"
        className="pixel-art pointer-events-none absolute -right-10 top-10 w-56 animate-drift opacity-25 sm:w-80"
      />
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="200px"
        className="pixel-art pointer-events-none absolute bottom-16 left-1/3 w-32 animate-drift-slow opacity-15 sm:w-48"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="relative mb-14"
      >
        <h2 className="text-4xl font-medium sm:text-5xl">Outside of Class</h2>
        <p className="mt-2 text-brand-yellow/80">
          Different pursuits, same curiosity.
        </p>
      </motion.div>

      <div className="relative flex flex-col divide-y divide-cream/15">
        {primaryInterests.map((interest, i) => (
          <InterestRow key={interest.number} interest={interest} index={i} />
        ))}
      </div>

      <div className="relative mt-2">
        <OthersRow />
      </div>
    </section>
  );
}
