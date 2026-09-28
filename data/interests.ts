import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export type Interest = {
  number: string;
  title: string;
  blurb: string; // for the destination page later — not shown on the homepage row
  href: string;
  image?: StaticImageData; // slides in beside the row on hover
};

export const primaryInterests: Interest[] = [
  {
    number: "01",
    title: "Dance",
    blurb:
      "I've danced for years, especially hip-hop, Afro-pop, and waacking.",
    href: "/dance",
  },
  {
    number: "02",
    title: "Reading",
    blurb: "I've recently found my way back to reading — fiction, poetry, essays.",
    href: "/reading",
    image: images.shelf,
  },
  {
    number: "03",
    title: "Writing",
    blurb: "Writing of all kinds — articles, essays, and creative work.",
    href: "/writing",
    image: images.quill,
  },
];

export type OtherInterest = {
  title: string;
  blurb: string;
};

export const otherInterests: OtherInterest[] = [
  {
    title: "Tennis",
    blurb: "Patience, consistency, and how to reset when something isn't working.",
  },
  {
    title: "Teaching",
    blurb: "Helping kids turn strange ideas into things that actually run.",
  },
  {
    title: "Mentoring",
    blurb: "Big Sib mentoring and other work with younger students.",
  },
];
