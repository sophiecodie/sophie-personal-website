import Image from "next/image";
import BackLink from "@/components/BackLink";
import ChoreoVideoCard from "@/components/ChoreoVideoCard";
import PerformanceCard from "@/components/PerformanceCard";
import PixelStar from "@/components/PixelStar";
import Reveal from "@/components/Reveal";
import { choreo, stuyLegacy } from "@/data/dance";
import { images } from "@/lib/images";

export const metadata = { title: "Dance — Sophie Shih" };

export default function DancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-yellow px-6 py-16 text-brand-blue md:px-20 md:py-24">
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="280px"
        className="pixel-art pointer-events-none absolute -right-12 top-28 w-48 animate-drift-slow opacity-60 sm:w-72"
      />

      <div className="relative mx-auto max-w-4xl">
        <BackLink
          href="/#outside"
          className="text-sm uppercase tracking-wider text-brand-blue/60 transition-colors duration-200 hover:text-navy"
        />

        <header className="mt-10">
          <p className="text-sm uppercase tracking-wider text-brand-blue/60">Outside of class · 01</p>
          <h1 className="mt-2 text-5xl font-bold uppercase leading-none tracking-wide sm:text-7xl">
            Dance
          </h1>
          <p className="mt-4 flex items-center gap-3 text-lg text-brand-blue/70">
            a few stops along the way.
            <PixelStar className="animate-bob" />
          </p>
        </header>

        {/* the journey: numbered stops joined by a dotted path */}
        <ol className="mt-20 sm:mt-24">
          <Stop number="01" title="Stuy Legacy" subtitle="High school competitive dance team">
            <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-start">
              <div className="max-w-sm border-2 border-navy bg-[#FFFBEA] p-2 shadow-[4px_4px_0_0_#12163A]">
                <Image
                  src={stuyLegacy.photo}
                  alt="Stuy Legacy team photo at Prelude NY 2024"
                  sizes="(min-width: 768px) 360px, 90vw"
                  placeholder="blur"
                  className="h-auto w-full"
                />
              </div>
              <div className="space-y-10">
                {stuyLegacy.performances.map((p) => (
                  <PerformanceCard key={p.youtubeId} performance={p} />
                ))}
              </div>
            </div>
          </Stop>

          <Stop number="02" title="Favorite Choreo" subtitle="classes and pieces I keep coming back to">
            {/* a mini path: videos alternate sides of a center line on wider screens */}
            <div className="relative mt-12">
              <span
                aria-hidden
                className="path-dots absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 text-brand-blue/30 md:block"
              />
              <ol className="relative">
                {choreo.map((video, i) => {
                  const right = i % 2 === 1;
                  return (
                    // each video tucks up beside the previous one on the opposite side.
                    // The rows overlap, so only the card itself takes clicks — otherwise
                    // this row would cover the controls of the video above it.
                    <li
                      key={video.src}
                      className={`pointer-events-none relative flex ${right ? "md:justify-end" : ""} ${i > 0 ? "mt-14 md:-mt-24" : ""}`}
                    >
                      <span
                        aria-hidden
                        className="absolute left-1/2 top-1.5 hidden h-3 w-3 -translate-x-1/2 border-2 border-navy bg-brand-yellow md:block"
                      />
                      <Reveal
                        className={`pointer-events-auto flex w-full md:w-[calc(50%-2.5rem)] ${right ? "" : "md:justify-end"}`}
                      >
                        <ChoreoVideoCard video={video} number={String(i + 1).padStart(2, "0")} />
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Stop>

          <Stop number="03" title="StreetMed" subtitle="Duke dance team" unfinished>
            <p className="mt-8 flex items-center gap-4 text-2xl text-brand-blue/80 sm:text-3xl">
              coming soon...
              <PixelStar size="h-2 w-2" className="animate-bob" />
              <PixelStar size="h-1 w-1" color="bg-navy/60" className="-mt-6 animate-bob [animation-delay:0.6s]" />
            </p>
          </Stop>
        </ol>
      </div>
    </main>
  );
}

/**
 * One stop on the dance map: a numbered pixel marker on the dotted path,
 * with the path running down to the next stop. The last stop is drawn
 * dashed, and its path trails off the page, since that chapter is still
 * being written.
 */
function Stop({
  number,
  title,
  subtitle,
  unfinished = false,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  unfinished?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className={`relative pl-16 sm:pl-24 ${unfinished ? "pb-40" : "pb-24 sm:pb-28"}`}>
      <span
        aria-hidden
        className={`path-dots absolute left-[22px] top-12 w-1 text-brand-blue/50 ${
          unfinished ? "h-56 [mask-image:linear-gradient(to_bottom,black,transparent)]" : "bottom-0"
        }`}
      />
      <span
        className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center border-2 border-navy text-lg ${
          unfinished
            ? "border-dashed bg-brand-yellow text-brand-blue"
            : "bg-brand-blue text-brand-yellow shadow-[3px_3px_0_0_#12163A]"
        }`}
      >
        {number}
      </span>

      <Reveal>
        <h2 className="pt-1 text-3xl font-bold uppercase leading-none tracking-wide sm:text-5xl">{title}</h2>
        <p className="mt-2 text-brand-blue/70">{subtitle}</p>
        {children}
      </Reveal>
    </li>
  );
}
