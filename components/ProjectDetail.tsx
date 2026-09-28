import Image from "next/image";
import Link from "next/link";
import { projects, projectHref, Project } from "@/data/projects";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 border-t border-cream/15 py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="text-sm uppercase tracking-wider text-brand-yellow">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-base text-cream/85 sm:text-lg">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="text-brand-yellow">▪</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Shared layout for /work/[slug]. Empty sections in the data are skipped. */
export default function ProjectDetail({ project }: { project: Project }) {
  const d = project.detail;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="min-h-screen bg-brand-blue px-6 py-16 text-cream md:px-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#selected-works"
          className="text-sm uppercase tracking-wider text-cream/60 transition-colors duration-200 hover:text-brand-yellow"
        >
          ← back
        </Link>

        <header className="mt-10 pb-10">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm uppercase tracking-wider text-brand-yellow/80">
            <span>{project.number}</span>
            <span>{project.context}</span>
          </div>
          <h1 className="mt-3 text-4xl font-semibold uppercase leading-[1.05] tracking-wide sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-cream/60 sm:text-lg">{d.descriptor}</p>
          <p className="mt-8 max-w-2xl text-xl leading-snug sm:text-2xl">{d.overview}</p>
          {d.team && (
            <p className="mt-4 text-sm uppercase tracking-wider text-cream/50">{d.team}</p>
          )}
        </header>

        {project.image && (
          <Image
            src={project.image}
            alt=""
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
            className={`mb-10 w-full rounded-xl border border-cream/15 ${
              project.imageFit === "contain" ? "bg-white" : "pixel-art"
            }`}
          />
        )}

        {d.problem && (
          <Section label="The problem">
            <p className="max-w-2xl text-base text-cream/85 sm:text-lg">{d.problem}</p>
          </Section>
        )}

        {d.context && (
          <Section label="Research context">
            <p className="max-w-2xl text-base text-cream/85 sm:text-lg">{d.context}</p>
          </Section>
        )}

        {d.built.length > 0 && (
          <Section label={d.team ? "What we built" : "What I built"}>
            <List items={d.built} />
          </Section>
        )}

        {d.process.length > 0 && (
          <Section label={d.processLabel ?? "Process"}>
            <List items={d.process} />
          </Section>
        )}

        {d.tech.length > 0 && (
          <Section label="Technologies">
            <div className="flex flex-wrap gap-2">
              {d.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-cream/25 px-3 py-1 text-sm text-cream/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>
        )}

        <Section label="Screenshots">
          <div className="grid gap-4 sm:grid-cols-2">
            {d.screenshots.length > 0
              ? d.screenshots.map((s) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    className="w-full rounded-lg border border-cream/15"
                  />
                ))
              : [0, 1].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-[16/10] items-center justify-center rounded-lg bg-brand-yellow/10 text-sm uppercase tracking-wider text-cream/40"
                  >
                    screenshot
                  </div>
                ))}
          </div>
        </Section>

        {d.outcomes.length > 0 && (
          <Section label="Outcomes">
            <List items={d.outcomes} />
          </Section>
        )}

        {d.links.length > 0 && (
          <Section label="Links">
            <div className="flex flex-col gap-2">
              {d.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-base uppercase tracking-wider text-brand-yellow"
                >
                  {l.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              ))}
            </div>
          </Section>
        )}

        <Link
          href={projectHref(next)}
          className="group mt-8 flex items-center justify-between border-t border-cream/15 pt-8 text-cream/70 transition-colors hover:text-brand-yellow"
        >
          <span className="text-sm uppercase tracking-wider">Next project</span>
          <span className="flex items-center gap-2 text-xl uppercase tracking-wide sm:text-2xl">
            {next.title}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </main>
  );
}
