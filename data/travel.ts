import type { StaticImageData } from "next/image";
import brazil1 from "@/imgs/travel/brzl.jpg";
import brazil2 from "@/imgs/travel/brzl2.jpg";
import italy1 from "@/imgs/travel/italy.jpg";
import italy2 from "@/imgs/travel/italy2.jpg";
import italy3 from "@/imgs/travel/italy3.jpg";
import italy4 from "@/imgs/travel/italy4.jpg";
import italy5 from "@/imgs/travel/italy5.jpg";
import italy6 from "@/imgs/travel/italy6.jpg";
import japan1 from "@/imgs/travel/japan.jpg";
import japan2 from "@/imgs/travel/japan2.jpg";
import japan3 from "@/imgs/travel/japan3.jpg";
import japan4 from "@/imgs/travel/japan4.jpg";
import japan5 from "@/imgs/travel/japan5.jpg";
import japan6 from "@/imgs/travel/japan6.jpg";
import pr1 from "@/imgs/travel/pr.jpg";
import pr2 from "@/imgs/travel/pr2.jpg";
import pr3 from "@/imgs/travel/pr3.jpg";
import pr4 from "@/imgs/travel/pr4.jpg";

export type Place = {
  name: string;
  lat: number; // where the pin sits on the map
  lon: number;
  photos: { src: StaticImageData; alt: string }[];
};

export const places: Place[] = [
  {
    name: "Japan",
    lat: 36.2,
    lon: 138.3,
    photos: [
      { src: japan1, alt: "Neon-lit shopping street at night" },
      { src: japan2, alt: "Turquoise sea and green islands under a blue sky" },
      { src: japan3, alt: "Thatched-roof farmhouses in a green mountain valley" },
      { src: japan4, alt: "Sitting by a clear green river beneath a mossy cliff" },
      { src: japan5, alt: "The floating torii gate at Itsukushima Shrine" },
      { src: japan6, alt: "Boats on a canal lined with willow trees" },
    ],
  },
  {
    name: "Brazil",
    lat: -22.9,
    lon: -43.2,
    photos: [
      { src: brazil1, alt: "Misty view over forested hills toward the city and coast" },
      { src: brazil2, alt: "A busy beach with twin mountain peaks behind it" },
    ],
  },
  {
    name: "Italy",
    lat: 42.5,
    lon: 12.5,
    photos: [
      { src: italy1, alt: "A lit-up piazza and street at dusk" },
      { src: italy2, alt: "Standing in clear shallow water with a rocky island behind" },
      { src: italy3, alt: "Narrow street of pastel buildings climbing a hillside" },
      { src: italy4, alt: "A garden terrace overlooking the sea" },
      { src: italy5, alt: "Rocky cliffs over turquoise water" },
      { src: italy6, alt: "Horseback ride toward a snow-capped volcano" },
    ],
  },
  {
    name: "Puerto Rico",
    lat: 18.2,
    lon: -66.5,
    photos: [
      { src: pr1, alt: "Sitting on seaside rocks with a fishing rod" },
      { src: pr2, alt: "Palm trees against a pink and purple sunset" },
      { src: pr3, alt: "Colorful colonial buildings along a cobblestone street" },
      { src: pr4, alt: "A café-lined street lit up at dusk" },
    ],
  },
];
