"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillGroups, Skill } from "@/data/skills";
import { images } from "@/lib/images";

function SkillTag({ skill }: { skill: Skill }) {
  return (
    <span
      // tags with a note are focusable so the note also shows on keyboard
      // focus and on tap
      tabIndex={skill.usedIn ? 0 : undefined}
      className={`group/tag relative inline-block cursor-default border-2 border-navy bg-[#FFFBEA] uppercase text-brand-blue shadow-[2px_2px_0_0_#12163A] outline-none transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow hover:text-navy hover:shadow-[3px_3px_0_0_#12163A] focus:-translate-y-0.5 focus:bg-brand-yellow focus:text-navy ${
        skill.major
          ? "px-3 py-1.5 text-base font-semibold tracking-wide sm:text-lg"
          : "px-2 py-1 text-xs tracking-wider sm:text-sm"
      }`}
    >
      {skill.name}
      {skill.usedIn && (
        // one yellow pixel marks tags that have a note
        <span aria-hidden className="absolute -right-1 -top-1 h-2 w-2 border border-navy bg-brand-yellow" />
      )}
      {skill.usedIn && (
        <span
          role="tooltip"
          className="pointer-events-none invisible absolute bottom-full left-0 z-10 mb-2 whitespace-nowrap border-2 border-navy bg-navy px-2 py-1 text-xs normal-case tracking-normal text-brand-yellow opacity-0 transition-opacity duration-150 group-hover/tag:visible group-hover/tag:opacity-100 group-focus/tag:visible group-focus/tag:opacity-100"
        >
          → {skill.usedIn}
        </span>
      )}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-brand-blue px-6 py-24 text-cream md:px-20 lg:pl-32"
    >
      {/* faint drifting clouds behind the tags, same treatment as Outside of Class */}
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="360px"
        className="pixel-art pointer-events-none absolute right-6 top-16 w-52 animate-drift opacity-25 sm:right-24 sm:w-[360px]"
      />
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="220px"
        className="pixel-art pointer-events-none absolute right-[16%] top-[53%] w-32 animate-drift-slow opacity-15 sm:w-48"
      />
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="260px"
        className="pixel-art pointer-events-none absolute -right-12 bottom-10 w-40 animate-drift-slow opacity-20 sm:w-64"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="relative mb-14"
      >
        <h2 className="text-4xl font-medium sm:text-5xl">Skills</h2>
        <p className="mt-2 max-w-xl text-brand-yellow/80">
          A collection of languages, tools, frameworks, and technologies
          I&apos;ve worked with.
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm uppercase tracking-wider text-cream/45">
          <span aria-hidden className="inline-block h-2 w-2 border border-navy bg-brand-yellow" />
          hover or tap to see where I used it
        </p>
      </motion.div>

      <div className="relative grid gap-x-16 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
          >
            <h3 className="flex items-baseline gap-3 border-b border-cream/15 pb-2 text-sm uppercase tracking-wider text-brand-yellow">
              <span className="text-cream/40">{String(i + 1).padStart(2, "0")}</span>
              {group.title}
            </h3>
            {/* top padding leaves room for the first row's hover notes */}
            <div className="flex flex-wrap items-center gap-2.5 pt-8">
              {group.skills.map((skill) => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
