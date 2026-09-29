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
