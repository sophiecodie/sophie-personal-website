import Image from "next/image";
import BackLink from "@/components/BackLink";
import Polaroid from "@/components/Polaroid";
import TravelMap from "@/components/TravelMap";
import { othersSections } from "@/data/others";
import { images } from "@/lib/images";

export const metadata = { title: "Others — Sophie Shih" };

// a few gentle tilts, cycled so neighboring photos never match
const TILTS = [-4, 3, -2, 5, -3];

export default function OthersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-blue px-6 py-16 text-cream md:px-20 md:py-24">
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="320px"
        className="pixel-art pointer-events-none absolute -right-12 top-24 w-56 animate-drift opacity-20 sm:w-80"
      />

      <div className="relative mx-auto max-w-4xl">
        <BackLink
          href="/#outside"
          className="text-sm uppercase tracking-wider text-cream/60 transition-colors duration-200 hover:text-brand-yellow"
        />

        <header className="mt-10">
          <p className="text-sm uppercase tracking-wider text-brand-yellow/80">Outside of class · 04</p>
          <h1 className="mt-2 text-5xl font-bold uppercase leading-none tracking-wide sm:text-7xl">
            Others
          </h1>
          <p className="mt-4 text-lg text-cream/70">a few more things that shaped me.</p>
        </header>

        <div className="mt-20 space-y-28 sm:mt-24 sm:space-y-36">
          {othersSections.map((section, s) => {
            const flip = s % 2 === 1;
            return (
              <section
                key={section.title}
                className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16"
              >
                <div className={flip ? "md:order-2" : ""}>
                  <h2 className="flex items-center gap-3 text-2xl font-semibold uppercase tracking-wide text-brand-yellow sm:text-3xl">
                    <span aria-hidden className="h-2 w-2 bg-brand-yellow" />
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="mt-1 pl-5 text-sm uppercase tracking-wider text-cream/60">
                      {section.subtitle}
                    </p>
                  )}
                  <p className="mt-4 max-w-sm text-cream/75">{section.blurb}</p>
                </div>

                {/* photos overlap slightly as more are added */}
                <div className={`flex flex-wrap justify-center px-4 ${flip ? "md:order-1" : ""}`}>
                  {section.photos.map((photo, i) => (
                    <Polaroid
                      key={i}
                      src={photo.src}
                      alt={photo.alt}
                      label={section.title}
                      rotate={TILTS[(s * 2 + i) % TILTS.length] * (flip ? -1 : 1)}
                      marker={photo.marker}
                      // landscape shots (like group photos) get a wider card so faces stay readable
                      sizes={photo.src.width > photo.src.height ? "(min-width: 768px) 460px, 90vw" : "(min-width: 768px) 340px, 80vw"}
                      className={`${
                        photo.src.width > photo.src.height ? "max-w-[460px]" : "max-w-[300px] sm:max-w-[340px]"
                      } ${i > 0 ? "-ml-10 mt-8" : ""}`}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-28 sm:mt-36">
          <h2 className="flex items-center gap-3 text-2xl font-semibold uppercase tracking-wide text-brand-yellow sm:text-3xl">
            <span aria-hidden className="h-2 w-2 bg-brand-yellow" />
            Travel
          </h2>
          <p className="mt-4 max-w-sm text-cream/75">A few places I&apos;ve been.</p>
          <div className="mt-10">
            <TravelMap />
          </div>
        </section>
      </div>
    </main>
  );
}
