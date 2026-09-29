import Image, { StaticImageData } from "next/image";

export type PhotoMarker = {
  x: number; // % from the left of the photo
  y: number; // % from the top of the photo
  label?: string;
};

/**
 * A photo mounted like a Polaroid: thick cream border, extra room at the
 * bottom for a short pixel-note label, a small strip of tape on top and a
 * slight tilt that straightens as it lifts on hover. An optional `marker`
 * adds a bobbing "me!" arrow whose tip sits at x%/y% of the photo.
 */
export default function Polaroid({
  src,
  alt,
  label,
  rotate,
  sizes,
  marker,
  tapeClassName = "bg-brand-yellow/70",
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  label: string;
  rotate: number; // degrees
  sizes: string;
  marker?: PhotoMarker;
  tapeClassName?: string;
  className?: string;
}) {
  return (
    <figure
      tabIndex={0}
      style={{ "--tilt": `${rotate}deg` } as React.CSSProperties}
      className={`group relative w-full outline-none [transform:rotate(var(--tilt))] transition-transform duration-300 ease-out hover:z-10 hover:[transform:translateY(-6px)_rotate(0deg)] focus-visible:z-10 focus-visible:[transform:translateY(-6px)_rotate(0deg)] ${className}`}
    >
      {/* tape */}
      <span
        aria-hidden
        className={`absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-3deg] ${tapeClassName}`}
      />
      <div className="border-2 border-navy bg-[#FFFBEA] p-3 pb-0 shadow-[4px_4px_0_0_rgba(18,22,58,0.25)] sm:p-4 sm:pb-0">
        <div className="relative overflow-hidden border border-navy/20">
          <Image
            src={src}
            alt={alt}
            sizes={sizes}
            placeholder="blur"
            className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {marker && <MeArrow {...marker} />}
        </div>
        <figcaption className="flex h-14 items-center justify-center gap-2 text-base text-navy sm:h-16 sm:text-lg">
          {label}
          <span
            aria-hidden
            className="h-1.5 w-1.5 bg-brand-blue transition-transform duration-300 group-hover:rotate-45 group-hover:scale-150"
          />
        </figcaption>
      </div>
    </figure>
  );
}

/** A pixel "me!" tag with a down arrow, its tip at x%/y% of the photo. */
function MeArrow({ x, y, label = "me!" }: PhotoMarker) {
  return (
    <span
      aria-hidden
      style={{ left: `${x}%`, top: `${y}%` }}
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-full"
    >
      <span className="flex animate-bob flex-col items-center">
        <span className="border-2 border-navy bg-brand-yellow px-2 py-0.5 text-xs uppercase tracking-wider text-navy sm:text-sm">
          {label}
        </span>
        <svg
          viewBox="0 0 8 7"
          shapeRendering="crispEdges"
          className="mt-0.5 h-3.5 w-4 fill-brand-yellow [filter:drop-shadow(1px_0_0_#12163A)_drop-shadow(-1px_0_0_#12163A)_drop-shadow(0_1px_0_#12163A)_drop-shadow(0_-1px_0_#12163A)]"
        >
          <rect x="3" y="0" width="2" height="3" />
          <rect x="0" y="3" width="8" height="1" />
          <rect x="1" y="4" width="6" height="1" />
          <rect x="2" y="5" width="4" height="1" />
          <rect x="3" y="6" width="2" height="1" />
        </svg>
      </span>
    </span>
  );
}
