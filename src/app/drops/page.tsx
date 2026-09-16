import Image from "next/image";
import { InnerPage } from "@/components/InnerPage";
import { WaitlistForm } from "@/components/Forms";
import { brandAssets } from "@/config/assets";
import { capsuleDrop } from "@/data/drops";

export default function DropsPage() {
  return (
    <InnerPage eyebrow="Limited drops" title={capsuleDrop.capsule} copy={`${capsuleDrop.title}. ${capsuleDrop.tagline}`}>
      <div className="grid gap-5 lg:grid-cols-[1fr_420px]">
        <div className="grid gap-4">
          <div className="relative min-h-[460px] overflow-hidden rounded-sm border border-cream/20">
            <Image src={brandAssets.capsule} alt="Concrete Culture Barton Street capsule apparel and packaging" fill sizes="(min-width: 1024px) 760px, 94vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/88 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 max-w-lg tag-stroke font-display text-6xl uppercase leading-none text-safety">Limited 30 pieces</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capsuleDrop.items.map((item) => <div key={item} className="spray-card min-h-32 rounded-sm p-4"><p className="font-display text-3xl uppercase text-white">{item}</p><p className="mt-2 text-sm text-cream/70">Preorder and pickup-ready demo card.</p></div>)}
          </div>
        </div>
        <aside className="rounded-sm bg-cream p-6 text-night">
          <p className="font-display text-5xl uppercase leading-none">Join the capsule waitlist</p>
          <p className="my-4 font-bold">Hoodie / Tee / Cap / Full Capsule</p>
          <WaitlistForm />
        </aside>
      </div>
    </InnerPage>
  );
}
