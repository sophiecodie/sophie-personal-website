import Image from "next/image";
import { Book } from "@/data/books";

// Covers cycle through the site palette so the shelf reads as a set.
const COVERS = [
  { bg: "bg-brand-blue", text: "text-cream", band: "bg-brand-yellow" },
  { bg: "bg-[#FFFBEA]", text: "text-brand-blue", band: "bg-brand-blue" },
  { bg: "bg-navy", text: "text-brand-yellow", band: "bg-brand-yellow" },
];

// small height differences so the row looks like real books on a shelf
const HEIGHTS = ["h-[210px] sm:h-[250px]", "h-[196px] sm:h-[232px]", "h-[204px] sm:h-[242px]"];

/**
 * A single pixel-style book standing on the shelf. Hover (or keyboard
 * focus) lifts it and brings the title to full strength.
 */
export default function BookWidget({ book, index }: { book: Book; index: number }) {
  const c = COVERS[index % COVERS.length];
  const h = HEIGHTS[index % HEIGHTS.length];

  if (book.cover) {
    return (
      <div
        tabIndex={0}
        aria-label={`${book.title} by ${book.author}`}
        className={`group relative ${h} w-full max-w-[170px] overflow-hidden border-2 border-navy bg-navy shadow-[4px_0_0_0_#12163A] outline-none transition-[transform,filter] duration-300 ease-out hover:-translate-y-3 hover:brightness-110 focus-visible:-translate-y-3 focus-visible:brightness-110`}
      >
        <Image
          src={book.cover}
          alt={`Cover of ${book.title} by ${book.author}`}
          fill
          sizes="(min-width: 640px) 170px, 30vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      tabIndex={0}
      aria-label={`${book.title} by ${book.author}`}
      className={`group relative flex ${h} w-full max-w-[170px] flex-col justify-between border-2 border-navy ${c.bg} ${c.text} px-2 pb-3 pt-4 shadow-[4px_0_0_0_#12163A] outline-none transition-[transform,filter] duration-300 ease-out hover:-translate-y-3 hover:brightness-110 focus-visible:-translate-y-3 focus-visible:brightness-110 sm:px-4`}
    >
      {/* pixel spine bands */}
      <span aria-hidden className={`absolute inset-x-0 top-2 h-1 ${c.band} opacity-80`} />
      <span aria-hidden className={`absolute inset-x-0 bottom-2 h-1 ${c.band} opacity-80`} />

      <p className="mt-2 break-words text-[11px] font-semibold uppercase leading-tight opacity-80 [hyphens:auto] sm:text-base sm:tracking-wide transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {book.title}
      </p>

      {/* tiny pixel emblem */}
      <span aria-hidden className="grid w-fit grid-cols-3 gap-px self-center opacity-70 transition-transform duration-300 group-hover:scale-125">
        <span />
        <span className={`h-1.5 w-1.5 ${c.band}`} />
        <span />
        <span className={`h-1.5 w-1.5 ${c.band}`} />
        <span className={`h-1.5 w-1.5 ${c.band}`} />
        <span className={`h-1.5 w-1.5 ${c.band}`} />
        <span />
        <span className={`h-1.5 w-1.5 ${c.band}`} />
        <span />
      </span>

      <p className="mb-2 break-words text-[10px] uppercase opacity-60 sm:text-sm sm:tracking-wider transition-opacity duration-300 group-hover:opacity-90">
        {book.author}
      </p>
    </div>
  );
}
