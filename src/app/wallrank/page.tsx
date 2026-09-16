import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { InfoCard } from "@/components/Cards";
import { siteConfig } from "@/config/site";

export default function WallRankPage() {
  const modules = ["Featured Artist of the Week", "Wall of the Month", "Tools Behind the Piece", "Concrete Culture Sponsored Feature", "Shop Featured Supplies", "Artist Interviews", "Event Links"];
  return (
    <InnerPage eyebrow="Wall Rank x Concrete Culture" title="Supporting the artists behind the walls" copy="Wall Rank is positioned as an online graffiti showcase platform in development and testing, with Concrete Culture as a possible founding partner, launch sponsor, community sponsor, featured retailer, and artist-support partner.">
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="spray-card rounded-lg p-6">
          <h2 className="font-display text-5xl uppercase leading-none text-safety">Community showcase platform</h2>
          <p className="mt-4 text-cream/75">Wall Rank can feature graffiti pieces, murals, artists, walls, locations, profiles, and community submissions while connecting each feature back to supplies, interviews, events, and retail support.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={siteConfig.wallRankUrl} className="focus-ring rounded-md bg-cyan px-5 py-3 font-black uppercase text-night">Explore Wall Rank</Link>
            <Link href="/pitch" className="focus-ring rounded-md border border-cream/25 px-5 py-3 font-black uppercase">Pitch vision</Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{modules.map((item) => <InfoCard key={item} title={item} copy="Mock integration module ready for real Wall Rank content or API data." />)}</div>
      </div>
    </InnerPage>
  );
}
