"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import ExperienceCard, { spanClass } from "./ExperienceCard";
import { experience } from "@/data/experience";

// Pixel-art that fills the empty space left under a shorter card in its row
// (TheCoderSchool sits beside the tall Weill Cornell card, MD.ai beside
// Believers). Both images have white backgrounds, which multiply drops.
const DECOR: Record<string, { src: StaticImageData; frame: string; img: string; motion: string }> = {
  // coding coach
  "02": {
    src: images.figure,
    frame: "h-40 w-40 sm:h-56 sm:w-56",
    img: "h-full w-full",
    motion: "animate-bob",
  },
  // the jpg has lots of white margin, so the frame crops to the flower
  "04": {
    src: images.sunflower,
    frame: "h-40 w-28 overflow-hidden sm:h-48 sm:w-36",
    img: "absolute left-1/2 top-1/2 h-[300px] w-[300px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[360px] sm:w-[360px]",
    motion: "animate-sway origin-bottom",
  },
};

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

      {/* cells stretch to their row; cards keep their natural height, so
          opening one never stretches its neighbor */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {experience.map((entry, i) => {
          const decor = DECOR[entry.number];
          return (
            <div key={entry.number} className={`flex flex-col gap-6 ${spanClass(entry.variant)}`}>
              <ExperienceCard entry={entry} index={i} />
              {decor && (
                <div aria-hidden className="flex flex-1 items-center justify-center py-2">
                  {/* the animation's transform starts a new layer, so the
                      multiply has to live on this wrapper to reach the page */}
                  <div className={`relative mix-blend-multiply ${decor.frame} ${decor.motion}`}>
                    <Image
                      src={decor.src}
                      alt=""
                      sizes="360px"
                      // tiny files: serve the originals so the white stays
                      // pure white and multiply removes it completely
                      unoptimized
                      className={`pixel-art ${decor.img}`}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
