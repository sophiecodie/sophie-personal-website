"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SelectedWorks from "./SelectedWorks";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // raw cursor position (as -0.5..0.5 relative to the section), springed
  // for a soft, lagged follow rather than a snap
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // two shapes drift by different, small amounts — keeps it understated
  const shapeAX = useTransform(sx, (v) => v * 28);
  const shapeAY = useTransform(sy, (v) => v * 28);
  const shapeBX = useTransform(sy, (v) => v * -18);
  const shapeBY = useTransform(sx, (v) => v * 18);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="about"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col justify-center gap-14 overflow-hidden bg-brand-yellow px-6 py-24 text-brand-blue md:px-20 lg:flex-row lg:items-center lg:gap-12 lg:pl-32 lg:pr-12 xl:pr-16"
    >
      {/* abstract shapes — no illustration needed, just soft geometry */}
      <motion.div
        aria-hidden
        style={{ x: shapeAX, y: shapeAY }}
        className="pointer-events-none absolute -right-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand-blue/90 md:h-[520px] md:w-[520px]"
      />
      <motion.div
        aria-hidden
        style={{ x: shapeBX, y: shapeBY }}
        className="pointer-events-none absolute -right-6 top-[28%] h-32 w-32 rounded-full bg-navy/70 md:h-52 md:w-52"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-xl lg:flex-1"
      >
        <motion.p
          variants={item}
          className="font-pixel text-sm tracking-wide text-brand-blue/70"
        >
          SOPHIE SHIH
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl"
        >
          hi, i&apos;m sophie.
        </motion.h1>
        <motion.p variants={item} className="mt-6 text-lg font-medium sm:text-xl">
          CS + Neuroscience @ Duke
        </motion.p>
        <motion.p
          variants={item}
          className="mt-3 max-w-md text-base text-brand-blue/80 sm:text-lg"
        >
          I build things at the intersection of technology, medicine, and
          people.
        </motion.p>
      </motion.div>

      {/* Selected Works lives inside the hero as a side panel, not its own
          section. The blue circle above sits behind it and shows through
          the panel's blur. */}
      <div className="relative w-full lg:w-[36vw] lg:min-w-[380px] lg:max-w-[560px] lg:shrink-0">
        <SelectedWorks />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 left-6 flex items-center gap-2 font-pixel text-sm text-brand-blue/60 md:left-20 lg:left-32"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        scroll
      </motion.div>
    </section>
  );
}
