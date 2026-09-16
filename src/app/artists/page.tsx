import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { artists } from "@/data/artists";

export default function ArtistsPage() {
  return (
    <InnerPage eyebrow="Artists" title="Local artist spotlight" copy="Featured work, socials, preferred tools, Concrete Culture products, events, and Wall Rank-ready profiles. Demo entries need artist approval.">
      <div className="grid gap-5 md:grid-cols-3">{artists.map((artist) => <Link className="focus-ring spray-card rounded-lg p-5" href={`/artists/${artist.slug}`} key={artist.slug}><div className="paint-swipe h-3 w-24" /><h2 className="mt-5 font-display text-4xl uppercase text-white">{artist.name}</h2><p className="mt-2 text-cyan">{artist.medium}</p><p className="mt-3 text-cream/70">{artist.bio}</p></Link>)}</div>
    </InnerPage>
  );
}
