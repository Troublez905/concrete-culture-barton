import { InnerPage } from "@/components/InnerPage";
import { siteConfig } from "@/config/site";

const sections = [
  { title: "What the site can do", items: ["Sell online", "Promote drops", "Feature artists", "Promote events", "Showcase 3D products", "Connect social media", "Integrate Wall Rank", "Drive traffic in-store"] },
  { title: "What we can launch first", items: ["Barton St. Capsule", "Online shop", "Waitlist", "Events", "Artist features"] },
  { title: "Future expansion", items: ["Footwear", "Workshops", "Wall Rank", "Artist collaborations", "Full e-commerce"] }
];

export default function PitchPage() {
  return (
    <InnerPage eyebrow="Branded Promotions pitch" title="Concrete Culture digital vision" copy="A practical path from physical shop energy to a stronger online business: store, supplies, artists, merch, events, community, and Wall Rank.">
      <div className="grid gap-5 md:grid-cols-3">{sections.map((section) => <article className="spray-card rounded-lg p-5" key={section.title}><h2 className="font-display text-4xl uppercase text-white">{section.title}</h2><ul className="mt-5 space-y-2">{section.items.map((item) => <li className="border-b border-cream/10 pb-2 text-cream/75" key={item}>{item}</li>)}</ul></article>)}</div>
      <div className="mt-8 rounded-lg bg-safety p-6 text-night"><p className="font-display text-5xl uppercase leading-none">Let's build the first drop</p><p className="mt-3 font-bold">Start with the capsule, shop content, waitlist, artist features, events, and owner-approved contact details.</p></div>
      <p className="mt-6 text-xs text-cream/50">{siteConfig.pitchDisclaimer}</p>
    </InnerPage>
  );
}
