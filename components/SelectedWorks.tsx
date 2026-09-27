"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedWorks() {
  return (
    <section
      id="selected-works"
      className="bg-brand-blue px-6 py-24 text-cream md:px-20 lg:pl-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-4xl font-medium sm:text-5xl"
      >
        Selected Works
      </motion.h2>

      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
