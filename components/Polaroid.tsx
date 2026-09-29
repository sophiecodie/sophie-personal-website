import Image, { StaticImageData } from "next/image";

/**
 * A photo mounted like a Polaroid: thick cream border, extra room at the
 * bottom for a short pixel-note label, a small strip of tape on top and a
 * slight tilt that straightens as it lifts on hover.
 */
export default function Polaroid({
  src,
  alt,
  label,
  rotate,
  sizes,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  label: string;
  rotate: number; // degrees
  sizes: string;
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
        className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-brand-yellow/70"
      />
      <div className="border-2 border-navy bg-[#FFFBEA] p-3 pb-0 shadow-[4px_4px_0_0_rgba(18,22,58,0.25)] sm:p-4 sm:pb-0">
        <div className="overflow-hidden border border-navy/20">
          <Image
            src={src}
            alt={alt}
            sizes={sizes}
            placeholder="blur"
            className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
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
