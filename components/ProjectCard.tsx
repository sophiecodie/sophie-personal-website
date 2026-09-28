import Image from "next/image";
import Link from "next/link";
import { Project, projectHref } from "@/data/projects";

/**
 * One widget in the Selected Works tray: number, title, context line, one
 * sentence, a small visual and OPEN ↗. Everything longer lives on /work/[slug].
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={projectHref(project)}
      draggable={false}
      className="group block w-[85%] shrink-0 snap-start rounded-xl border border-cream/25 bg-navy/35 p-5 transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-[5px] hover:border-brand-yellow/80 hover:bg-navy/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:w-[70%] lg:w-full"
    >
      <span className="text-sm uppercase tracking-wider text-brand-yellow">
        {project.number}
      </span>

      <h3 className="mt-2 text-2xl font-semibold uppercase leading-tight tracking-wide sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-1 text-sm uppercase tracking-wider text-brand-yellow/75">
        {project.context}
      </p>
      <p className="mt-3 text-sm leading-snug text-cream/85 sm:text-base">{project.summary}</p>

      <div
        className={`mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg ${
          project.imageFit === "contain" ? "bg-white" : "bg-brand-yellow/10"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            sizes="(min-width: 1024px) 480px, 85vw"
            draggable={false}
            className={`h-full w-full ${
              project.imageFit === "contain" ? "object-contain p-2" : "pixel-art object-cover"
            } transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]`}
          />
        ) : (
          // placeholder until there's an image for this project
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-wider text-cream/40 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]">
            image
          </div>
        )}
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-base uppercase tracking-wider text-brand-yellow">
        <span>Open</span>
        <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </Link>
  );
}
