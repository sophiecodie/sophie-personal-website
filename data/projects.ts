export type Project = {
  number: string;
  title: string;
  descriptor: string;
  blurb: string; // one sentence, max — detail lives on /work/[slug]
  href: string;
  badge?: string; // optional, very short — e.g. an award
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Neurobiome Navigator",
    descriptor: "Parkinson's × microbiome × AI",
    blurb:
      "Exploring Parkinson's research through knowledge graphs, semantic search, and LLMs.",
    href: "/work/neurobiome",
  },
  {
    number: "02",
    title: "SIIM Hackathon",
    descriptor: "LLM agents × medical imaging × healthcare",
    blurb:
      "Turning radiology findings into patient-friendly guidance with AI agents.",
    href: "/work/siim",
    badge: "2nd place, SIIM",
  },
];
