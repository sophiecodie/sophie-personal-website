import Image from "next/image";
import { Performance } from "@/data/dance";

/** A YouTube performance as a thumbnail card; opens the video in a new tab. */
export default function PerformanceCard({ performance }: { performance: Performance }) {
  return (
    <a
      href={performance.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${performance.title}${performance.note ? `, ${performance.note}` : ""} on YouTube`}
      className="group block transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
    >
      <div className="relative aspect-video overflow-hidden border-2 border-navy bg-navy shadow-[4px_4px_0_0_#12163A] transition-colors duration-300 group-hover:border-brand-blue">
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
        <span className="shrink-0 text-sm uppercase tracking-wider">
          Watch{" "}
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
            ↗
          </span>
        </span>
      </div>
    </a>
  );
}
