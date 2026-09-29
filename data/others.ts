import type { StaticImageData } from "next/image";
import tennis from "@/imgs/others/tennis.jpg";
import believers from "@/imgs/others/believers.jpg";

export type OthersSection = {
  title: string;
  blurb: string;
  // add more photos here and they fan out as overlapping Polaroids
  photos: { src: StaticImageData; alt: string }[];
};

export const othersSections: OthersSection[] = [
  {
    title: "Varsity Tennis",
    blurb:
      "Competitive varsity tennis was a major part of my high school experience, including serving as team captain.",
    photos: [{ src: tennis, alt: "Hitting a forehand on the tennis court" }],
  },
  {
    title: "Believers",
    blurb:
      "Believers is a community in Tokyo supporting students who have stepped away from traditional school environments. I volunteered through activities such as crafts, cooking, geography, music, and conversation.",
    photos: [{ src: believers, alt: "Volunteers and students doing a resin craft activity around a table" }],
  },
];
