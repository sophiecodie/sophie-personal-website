"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Interest } from "@/data/interests";

const MotionLink = motion(Link);

/**
 * One large Outside of Class destination. The whole row is the link; on
 * hover the title slides right, the line extends, the image rises into
 * place and the arrow nudges.
 */
export default function InterestRow({
  interest,
  index,
}: {
  interest: Interest;
  index: number;
}) {
  return (
    <MotionLink
      href={interest.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex items-center gap-4 py-8 sm:gap-6 sm:py-10"
    >
      <span className="text-base text-cream/50">{interest.number}</span>
      <h3 className="text-3xl font-semibold uppercase tracking-wide transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
        {interest.title}
      </h3>

      {/* extending line */}
      <span aria-hidden className="relative hidden h-px flex-1 bg-cream/15 sm:block">
        <span className="absolute inset-y-0 left-0 w-10 bg-brand-yellow transition-all duration-500 ease-out group-hover:w-full" />
      </span>
      <span className="flex-1 sm:hidden" />

      {interest.image && (
        <span className="relative h-12 w-20 shrink-0 sm:h-20 sm:w-32 md:h-24 md:w-40">
          <Image
            src={interest.image}
            alt=""
            fill
            sizes="160px"
            className="pixel-art object-contain sm:translate-x-3 sm:opacity-60 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </span>
      )}

      <span className="flex shrink-0 items-center gap-2 uppercase tracking-wider text-brand-yellow">
        <span className="hidden text-sm sm:inline">Explore</span>
        <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
          ↗
        </span>
      </span>
    </MotionLink>
  );
}
