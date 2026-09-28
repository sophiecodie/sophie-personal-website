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

// Empty on purpose — /writing shows "portfolio coming soon." until pieces
// are added here.
export const writing: WritingPiece[] = [];

export const WRITING_KIND_LABELS: Record<WritingKind, string> = {
  chronicle: "Chronicle",
  essay: "Essays",
  academic: "Academic papers",
  creative: "Creative writing",
  published: "Other published work",
};
