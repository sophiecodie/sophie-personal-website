import type { StaticImageData } from "next/image";

export type Book = {
  title: string;
  author: string;
  // Optional — the bookshelf ignores these until you fill them in.
  cover?: StaticImageData;
  rating?: number;
  quote?: string;
  review?: string;
  dateRead?: string;
  tags?: string[];
};

// Shelf order, left to right, three books per shelf.
export const books: Book[] = [
  { title: "Jane Eyre", author: "Charlotte Brontë" },
  { title: "The Covenant of Water", author: "Abraham Verghese" },
  { title: "The Unbearable Lightness of Being", author: "Milan Kundera" },
  { title: "My Brilliant Friend", author: "Elena Ferrante" },
  { title: "Identity", author: "Milan Kundera" },
  { title: "The Nightingale", author: "Kristin Hannah" },
];
