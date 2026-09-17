import { notFound } from "next/navigation";
import { InnerPage } from "@/components/InnerPage";
import { artists } from "@/data/artists";

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((item) => item.slug === slug);
  if (!artist) notFound();
  return (
    <InnerPage eyebrow={artist.medium} title={artist.name} copy={artist.bio}>
      <div className="grid gap-5 md:grid-cols-4">
        {["Gallery", "About", "Tools", "Upcoming Events"].map((section) => <div key={section} className="spray-card rounded-lg p-5"><h2 className="font-display text-4xl uppercase">{section}</h2><p className="mt-3 text-cream/70">{section === "Tools" ? artist.tools.join(", ") : "Owner and artist-provided content placeholder."}</p></div>)}
      </div>
    </InnerPage>
  );
}
