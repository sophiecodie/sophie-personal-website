import type { Metadata } from "next";
import { Plus_Jakarta_Sans, VT323 } from "next/font/google";
import "./globals.css";

// friendly, rounded, visibly different from a default sans — carries
// headlines + body copy
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

// genuine pixel/retro-digital accent — used only for small interface
// details: numbers, nav labels, metadata, CTAs. Never for paragraphs.
const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400"],
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
    <html lang="en" className={`${jakarta.variable} ${vt323.variable}`}>
      <body className="bg-navy font-sans antialiased">{children}</body>
    </html>
  );
}
