"use client";

import { useState } from "react";
import Image from "next/image";
import { Performance } from "@/data/dance";

/**
 * A YouTube performance as a thumbnail card. Pressing play swaps the
 * thumbnail for the embedded player right here on the page (full screen
 * works from the player). The YouTube player only loads once play is
 * pressed, which keeps the page light.
 */
export default function PerformanceCard({ performance }: { performance: Performance }) {
  const [playing, setPlaying] = useState(false);
  const label = `${performance.title}${performance.note ? `, ${performance.note}` : ""}`;

  const params = new URLSearchParams({ autoplay: "1", rel: "0", playsinline: "1" });
  if (performance.start) params.set("start", String(performance.start));

  return (
    <div className="group">
      <div
        className={`relative aspect-video overflow-hidden border-2 border-navy bg-navy shadow-[4px_4px_0_0_#12163A] transition-[transform,border-color] duration-300 ease-out group-hover:border-brand-blue ${
          playing ? "" : "group-hover:-translate-y-1.5"
        }`}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${performance.youtubeId}?${params}`}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${label}`}
            className="absolute inset-0"
          >
            <Image
              src={`https://i.ytimg.com/vi/${performance.youtubeId}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-3 left-3 flex items-center gap-2 border-2 border-navy bg-brand-yellow px-3 py-1 text-sm uppercase tracking-wider text-navy">
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">▶</span>
              play
            </span>
          </button>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4">
        <p className="text-lg font-semibold uppercase tracking-wide sm:text-xl">
          {performance.title}
          {performance.note && (
            <span className="ml-3 text-sm font-normal normal-case tracking-normal text-brand-blue/70">
              {performance.note}
            </span>
          )}
        </p>
        <a
          href={performance.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/yt shrink-0 text-sm uppercase tracking-wider transition-colors duration-200 hover:text-navy"
        >
          YouTube{" "}
          <span className="inline-block transition-transform duration-300 group-hover/yt:-translate-y-0.5 group-hover/yt:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
