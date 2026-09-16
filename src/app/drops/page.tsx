import { InnerPage } from "@/components/InnerPage";
import { WaitlistForm } from "@/components/Forms";
import { capsuleDrop } from "@/data/drops";

export default function DropsPage() {
  return (
    <InnerPage eyebrow="Limited drops" title={capsuleDrop.capsule} copy={`${capsuleDrop.title}. ${capsuleDrop.tagline}`}>
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="grid gap-4 sm:grid-cols-2">
          {capsuleDrop.items.map((item) => <div key={item} className="spray-card min-h-44 rounded-lg p-5"><p className="font-display text-4xl uppercase text-white">{item}</p><p className="mt-3 text-cream/70">Limited quantity, preorder and pickup-ready demo card.</p></div>)}
        </div>
        <aside className="rounded-lg bg-cream p-6 text-night">
          <p className="font-display text-5xl uppercase leading-none">Join the capsule waitlist</p>
          <p className="my-4 font-bold">Hoodie / Tee / Cap / Full Capsule</p>
          <WaitlistForm />
        </aside>
      </div>
    </InnerPage>
  );
}
