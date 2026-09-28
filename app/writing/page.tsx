import Image from "next/image";
import Link from "next/link";
import { writing, WRITING_KIND_LABELS, WritingKind } from "@/data/writing";
import { images } from "@/lib/images";

export const metadata = { title: "Writing — Sophie Shih" };

export default function WritingPage() {
  const kinds = (Object.keys(WRITING_KIND_LABELS) as WritingKind[]).filter((k) =>
    writing.some((w) => w.kind === k)
  );

  return (
    <main className="min-h-screen bg-brand-blue px-6 py-16 text-cream md:px-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#outside"
          className="text-sm uppercase tracking-wider text-cream/60 transition-colors duration-200 hover:text-brand-yellow"
        >
          ← back
        </Link>

        <h1 className="mt-10 text-5xl font-bold uppercase leading-none tracking-wide sm:text-7xl">
          Writing
        </h1>

        {writing.length === 0 ? (
          <div className="flex min-h-[55vh] flex-col items-center justify-center gap-8 text-center">
            <Image
              src={images.quill}
              alt=""
              priority
              sizes="200px"
              className="pixel-art w-36 sm:w-48"
            />
            <p className="text-3xl text-brand-yellow sm:text-5xl">portfolio coming soon.</p>
          </div>
        ) : (
          <div className="mt-16 space-y-12">
            {kinds.map((kind) => (
              <section key={kind}>
                <h2 className="text-sm uppercase tracking-wider text-brand-yellow">
                  {WRITING_KIND_LABELS[kind]}
                </h2>
                <ul className="mt-4 divide-y divide-cream/15 border-t border-cream/15">
                  {writing
                    .filter((w) => w.kind === kind)
                    .map((w) => (
                      <li key={w.title}>
                        <a
                          href={w.href}
                          className="group flex items-baseline justify-between gap-4 py-4"
                        >
                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                            {w.title}
                          </span>
                          <span className="shrink-0 text-sm uppercase tracking-wider text-cream/50">
                            {[w.publication, w.date].filter(Boolean).join(" · ")}
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
