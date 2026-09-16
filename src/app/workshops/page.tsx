import { InnerPage } from "@/components/InnerPage";
import { workshops } from "@/data/workshops";

export default function WorkshopsPage() {
  return (
    <InnerPage eyebrow="Workshops" title="Learn the tools, build the style" copy="Graffiti Lettering, Blackbook Basics, Marker Techniques, Sticker Design, Mural Planning, Color Theory, Spray Cap Basics, Shoe Customization, and Vinyl Design Basics.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{workshops.map((workshop) => <article className="spray-card rounded-lg p-5" key={workshop.title}><h2 className="text-2xl font-black text-white">{workshop.title}</h2><p className="mt-3 text-cream/70">{workshop.description}</p><dl className="mt-5 space-y-2 text-sm text-cream/70"><div><dt className="font-bold text-cyan">Date</dt><dd>{workshop.date}</dd></div><div><dt className="font-bold text-cyan">Duration</dt><dd>{workshop.duration}</dd></div><div><dt className="font-bold text-cyan">Price</dt><dd>{workshop.price}</dd></div><div><dt className="font-bold text-cyan">Capacity</dt><dd>{workshop.capacity}</dd></div></dl><button className="focus-ring mt-5 rounded-md bg-safety px-4 py-2 font-black uppercase text-night">Register</button></article>)}</div>
    </InnerPage>
  );
}
