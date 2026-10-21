export type WritingKind =
  | "chronicle" // Chronicle articles
  | "essay"
  | "academic" // academic papers
  | "creative" // creative writing
  | "published"; // other published work

export type WritingPiece = {
  title: string;
  kind: WritingKind;
  publication?: string;
  date?: string;
  href?: string;
};

// /writing shows "portfolio coming soon." when this is empty.
export const writing: WritingPiece[] = [
  {
    title: "A guide to reporting sexual assault and finding support at Duke and in Durham",
    kind: "chronicle",
    date: "Oct 20, 2026",
    href: "https://dukechronicle.com/article/duke-university-chronicle-guide-sexual-harm-violence-report-assault-support-care-durham-cornell-20261020",
  },
];

export const WRITING_KIND_LABELS: Record<WritingKind, string> = {
  chronicle: "The Duke Chronicle — News",
  essay: "Essays",
  academic: "Academic papers",
  creative: "Creative writing",
  published: "Other published work",
};
