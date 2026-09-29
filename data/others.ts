import type { StaticImageData } from "next/image";
import tennis from "@/imgs/others/tennis.jpg";
import believers from "@/imgs/others/believers.jpg";
import bigSib from "@/imgs/others/big-sib.jpg";
import type { PhotoMarker } from "@/components/Polaroid";

export type OthersSection = {
  title: string;
  subtitle?: string;
  blurb: string;
  // add more photos here and they fan out as overlapping Polaroids
  photos: { src: StaticImageData; alt: string; marker?: PhotoMarker }[];
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
  {
    title: "Big Sib",
    subtitle: "Peer Mentor",
    blurb:
      "As a Big Sib, I was a peer mentor for incoming freshmen, helping them find their footing in high school.",
    photos: [
      {
        src: bigSib,
        alt: "Big Sibs group photo with a Funky Fireflies poster; Sophie is seated at the far right of the front row",
        // tip of the "me!" arrow: front row, far right
        marker: { x: 87, y: 61 },
      },
    ],
  },
];
