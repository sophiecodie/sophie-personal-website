"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-brand-yellow px-6 py-24 text-brand-blue md:px-20 lg:pl-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-4xl font-medium sm:text-5xl"
      >
        Experience
      </motion.h2>

      <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
        {experience.map((entry, i) => (
          <ExperienceCard key={entry.number} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
