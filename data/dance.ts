import type { StaticImageData } from "next/image";
import stuyLegacyPhoto from "@/imgs/dance/stuy-legacy.jpg";

export type Performance = {
  title: string;
  note?: string;
  youtubeId: string;
  start?: number; // seconds into the video to begin playing
  href: string;
};

export type ChoreoVideo = {
  label: string;
  choreographer: string;
  src: string; // served from /public
  poster: string;
  width: number;
  height: number;
};

export const stuyLegacy: {
  photo: StaticImageData;
  performances: Performance[];
} = {
  photo: stuyLegacyPhoto,
  performances: [
    {
      title: "Prelude NY 2024",
      note: "3rd Place",
      youtubeId: "dMIKYwqW9Wk",
      href: "https://www.youtube.com/watch?v=dMIKYwqW9Wk",
    },
    {
      title: "SAYAW XII",
      youtubeId: "ZiafA8CqzNw",
      start: 216,
      href: "https://www.youtube.com/watch?v=ZiafA8CqzNw&t=216s",
    },
  ],
};

// Order is intentional: 1 is the favorite, 4 the least favorite of the set.
// Don't sort this list.
export const choreo: ChoreoVideo[] = [
  { label: "Class 1", choreographer: "Kara Lee", src: "/media/dance/class-1.mp4", poster: "/media/dance/class-1.jpg", width: 872, height: 1280 },
  { label: "Class 2", choreographer: "James Kho", src: "/media/dance/class-2.mp4", poster: "/media/dance/class-2.jpg", width: 1246, height: 1158 },
  { label: "Class 3", choreographer: "Bo Belza", src: "/media/dance/class-3.mp4", poster: "/media/dance/class-3.jpg", width: 1280, height: 720 },
  { label: "Class 4", choreographer: "James Kho", src: "/media/dance/class-4.mp4", poster: "/media/dance/class-4.jpg", width: 1108, height: 1280 },
];
