import Image from "next/image";
import Link from "next/link";
import BookWidget from "@/components/BookWidget";
import { books } from "@/data/books";
import { images } from "@/lib/images";

export const metadata = { title: "My Bookshelf — Sophie Shih" };

const PER_SHELF = 3;

export default function ReadingPage() {
  const shelves = Array.from({ length: Math.ceil(books.length / PER_SHELF) }, (_, i) =>
    books.slice(i * PER_SHELF, (i + 1) * PER_SHELF)
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-yellow px-6 py-16 text-brand-blue md:px-20 md:py-24">
      <Image
        src={images.cloud}
        alt=""
        aria-hidden
        sizes="280px"
        className="pixel-art pointer-events-none absolute -left-12 top-40 w-48 animate-drift-slow opacity-60 sm:w-72"
      />

      <div className="relative mx-auto max-w-3xl">
        <Link
          href="/#outside"
          className="text-sm uppercase tracking-wider text-brand-blue/60 transition-colors duration-200 hover:text-navy"
        >
          ← back
        </Link>

        <header className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wider text-brand-blue/60">Reading</p>
            <h1 className="mt-2 text-5xl font-bold uppercase leading-none tracking-wide sm:text-6xl">
              My Bookshelf
            </h1>
          </div>
          <Image
            src={images.shelf}
            alt=""
            priority
            sizes="(min-width: 640px) 260px, 200px"
            className="pixel-art w-48 shrink-0 sm:w-64"
          />
        </header>

        <div className="mt-16 space-y-14 sm:mt-20 sm:space-y-16">
          {shelves.map((shelf, s) => (
            <div key={s}>
              <div className="grid grid-cols-3 items-end gap-3 px-2 sm:gap-6 sm:px-6">
                {shelf.map((book, i) => (
                  <BookWidget key={book.title} book={book} index={s * PER_SHELF + i} />
                ))}
              </div>
              {/* the shelf plank, drawn in the site palette */}
              <div aria-hidden className="relative">
                <div className="h-3 border-2 border-navy bg-brand-blue" />
                <div className="absolute left-6 top-full h-4 w-3 border-2 border-t-0 border-navy bg-brand-blue" />
                <div className="absolute right-6 top-full h-4 w-3 border-2 border-t-0 border-navy bg-brand-blue" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
