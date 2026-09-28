import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

// one pixel typeface for the whole site — headings, nav, cards and body.
// Hierarchy comes from size, weight and capitalization, not a second font.
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sophie Shih",
  description:
    "CS + Neuroscience @ Duke. I build things at the intersection of technology, medicine, and people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pixelify.variable}>
      <body className="bg-navy font-sans antialiased">{children}</body>
    </html>
  );
}
