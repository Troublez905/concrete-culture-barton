import Image from "next/image";
import { InnerPage } from "@/components/InnerPage";
import { InfoCard } from "@/components/Cards";
import { brandAssets } from "@/config/assets";

export default function AboutPage() {
  return (
    <InnerPage eyebrow="About" title="Barton Street creative supply hub" copy="This page avoids fake founding stories. Owner-provided history, team details, photos, and exact store information should replace the placeholders.">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[430px] overflow-hidden rounded-sm border border-cream/20">
          <Image src={brandAssets.storefront} alt="Concrete Culture storefront and signage concept" fill sizes="(min-width: 1024px) 680px, 94vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/86 via-night/18 to-transparent" />
          <div className="absolute bottom-5 left-5 max-w-lg">
            <p className="tag-stroke font-display text-5xl uppercase leading-none text-safety">Local supplies. Real culture.</p>
          </div>
        </div>
        <div className="grid gap-4">
          <InfoCard title="Art supplies" copy="Spray paint, markers, blackbooks, stickers, canvas, gloves, tape, apparel, and tools." />
          <InfoCard title="Graffiti culture" copy="Built around practical tools, style development, local artists, education, and community." />
          <InfoCard title="Owner info needed" copy="Founding story, shop photos, staff bios, brand approvals, and contact details need owner input." />
        </div>
      </div>
    </InnerPage>
  );
}
