import type { StaticImageData } from "next/image";
import janeEyre from "@/imgs/covers/jane-eyre.jpg";
import covenantOfWater from "@/imgs/covers/covenant-of-water.jpg";
import unbearableLightness from "@/imgs/covers/unbearable-lightness.jpg";
import myBrilliantFriend from "@/imgs/covers/my-brilliant-friend.jpg";
import identity from "@/imgs/covers/identity.jpg";
import nightingale from "@/imgs/covers/nightingale.jpg";

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
  { title: "Jane Eyre", author: "Charlotte Brontë", cover: janeEyre },
  { title: "The Covenant of Water", author: "Abraham Verghese", cover: covenantOfWater },
  { title: "The Unbearable Lightness of Being", author: "Milan Kundera", cover: unbearableLightness },
  { title: "My Brilliant Friend", author: "Elena Ferrante", cover: myBrilliantFriend },
  { title: "Identity", author: "Milan Kundera", cover: identity },
  { title: "The Nightingale", author: "Kristin Hannah", cover: nightingale },
];
