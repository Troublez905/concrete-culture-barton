import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Concrete Culture | Hamilton Graffiti and Art Supplies",
    template: "%s | Concrete Culture"
  },
  description:
    "Concrete Culture website prototype for Hamilton art supplies, graffiti supplies, capsule drops, local artists, workshops, and Wall Rank integration.",
  keywords: [
    "Concrete Culture",
    "Hamilton art supplies",
    "graffiti supplies Hamilton",
    "spray paint Hamilton",
    "graffiti markers",
    "blackbooks",
    "art supply store Hamilton",
    "Barton Street art store"
  ],
  openGraph: {
    title: "Concrete Culture",
    description: "Paint, supplies, art, drops, workshops, and Wall Rank community features.",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
