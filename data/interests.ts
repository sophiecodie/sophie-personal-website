export type Interest = {
  number: string;
  title: string;
  blurb: string; // kept for /dance and /reading-writing later — not shown on the homepage row
  href: string;
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
    title: "Reading + Writing",
    blurb:
      "I've recently found my way back to reading and writing — fiction, poetry, essays.",
    href: "/reading-writing",
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
