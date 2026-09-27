"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group block"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-pixel text-lg text-brand-yellow/70">
          {project.number}
        </span>
        {project.badge && (
          <span className="font-pixel text-sm text-brand-yellow/50">
            {project.badge}
          </span>
        )}
      </div>

      <h3 className="mt-2 text-3xl font-medium sm:text-4xl">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-cream/60">{project.descriptor}</p>
      <p className="mt-3 max-w-sm text-sm text-cream/80 sm:text-base">
        {project.blurb}
      </p>

      {/* placeholder visual — swap for a real screenshot / diagram */}
      <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-md bg-cream/10 transition-colors duration-300 group-hover:bg-cream/20">
        <div className="flex h-full items-center justify-center font-pixel text-lg text-cream/40 transition-transform duration-300 group-hover:scale-105">
          image
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 font-pixel text-lg tracking-wide text-brand-yellow">
        <span>EXPLORE</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </motion.a>
  );
}
