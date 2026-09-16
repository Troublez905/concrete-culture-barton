import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CalendarDays, Megaphone, PackageCheck, Palette, Store, UsersRound } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";
import { brandAssets } from "@/config/assets";
import { siteConfig } from "@/config/site";

const goals = [
  { title: "Turn attention into store visits", copy: "Make every campaign point back to Barton Street: pickup, launches, workshops, artist nights, and reasons to come in." },
  { title: "Build a recognizable local brand", copy: "Keep the Concrete Culture look consistent across signage, apparel, social posts, emails, product labels, and events." },
  { title: "Create repeatable monthly promotions", copy: "Use a simple calendar so the shop always has something to talk about without scrambling for last-minute content." },
  { title: "Grow community around artists", copy: "Feature local artists, their tools, their work, and their events so the shop becomes part of the creative scene." }
];

const offers = [
  {
    icon: PackageCheck,
    title: "Barton St. Capsule Drops",
    image: brandAssets.capsule,
    what: "Limited apparel, sticker packs, numbered pickup cards, launch graphics, and preorder/waitlist pages.",
    business: "Creates urgency, gives customers a reason to visit, and turns Concrete Culture into a brand people can wear.",
    why: "Limited runs work because they feel collectible. A numbered pickup card and strong visuals make the drop feel official, not random merch.",
    deliverables: ["Drop identity", "Product mockups", "Waitlist page", "Pickup campaign", "Launch posts"]
  },
  {
    icon: Megaphone,
    title: "Monthly Sale Campaigns",
    image: brandAssets.storefront,
    what: "Branded weekend sale graphics for paint, markers, books, caps, stickers, and bundles.",
    business: "Moves inventory, keeps social channels active, and creates predictable traffic spikes around payday/weekend shopping.",
    why: "Clear sale themes are easier for customers to remember than random discounts. Repeating the format builds recognition.",
    deliverables: ["Sale posters", "Story posts", "Coupon banners", "Bundle naming", "In-store signage"]
  },
  {
    icon: UsersRound,
    title: "Local Artist Spotlight",
    image: brandAssets.writers,
    what: "Artist profiles, tool lists, short interviews, mini galleries, and supply recommendations tied to real creators.",
    business: "Brings artists into the shop ecosystem and gives followers a reason to share Concrete Culture content.",
    why: "Artists trust other artists. Showing what local creators use makes the products feel practical and authentic.",
    deliverables: ["Artist profile page", "Interview template", "Tool feature", "Social carousel", "Wall Rank feature"]
  },
  {
    icon: CalendarDays,
    title: "Workshops + In-Store Events",
    image: brandAssets.supplies,
    what: "Blackbook sessions, marker technique nights, sticker design, cap basics, mural planning, and customization events.",
    business: "Creates paid or RSVP-based experiences, introduces beginners to supplies, and turns slow nights into community nights.",
    why: "Workshops create education and confidence. When people learn how to use a product, they are more likely to buy it.",
    deliverables: ["Event pages", "RSVP graphics", "Workshop pricing", "Reminder posts", "Recap content"]
  },
  {
    icon: Palette,
    title: "CC Lab + 3D Printed Objects",
    image: brandAssets.freightTools,
    what: "Cap trays, marker stands, can organizers, display tools, sticker holders, and branded shop objects.",
    business: "Adds a unique product lane that separates Concrete Culture from generic art supply stores.",
    why: "Custom utility products show innovation and give customers something they cannot easily find elsewhere.",
    deliverables: ["Product naming", "Launch visuals", "Shelf signage", "Simple product pages", "Demo content"]
  },
  {
    icon: BarChart3,
    title: "Wall Rank Partnership",
    image: brandAssets.mark,
    what: "Featured artist, wall of the month, tools behind the piece, interviews, event links, and shop-sponsored features.",
    business: "Positions Concrete Culture as the supply partner behind local graffiti and mural culture.",
    why: "A platform partnership creates a bigger story than selling supplies alone. It connects products to real work in the city.",
    deliverables: ["Partner landing page", "Featured artist module", "Sponsored supply list", "Interview format", "Event tie-ins"]
  }
];

const timeline = [
  ["Week 1", "Confirm owner details, hours, products, preferred socials, drop items, and real photos."],
  ["Week 2", "Launch owner-approved website pages, capsule waitlist, first sale campaign, and email signup."],
  ["Week 3", "Release artist spotlight, workshop calendar, and first content batch for Instagram, TikTok, and YouTube."],
  ["Week 4", "Run the first campaign report: traffic, clicks, waitlist signups, event RSVPs, and top products."]
];

const metrics = ["Waitlist signups", "Website visits", "Store direction clicks", "Social reach", "Event RSVPs", "Product interest", "Email subscribers", "Campaign redemptions"];

export default function PitchPage() {
  return (
    <InnerPage
      eyebrow="Owner proposal"
      title="Branded Promotions x Concrete Culture"
      copy="A professional marketing and digital growth plan for turning Concrete Culture into a stronger online brand, a busier Barton Street destination, and a recognized hub for local artists."
    >
      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="spray-card rounded-sm p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">The big idea</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-white md:text-7xl">Make the shop feel as strong online as it does in person.</h2>
          <p className="mt-5 text-lg leading-8 text-cream/76">Branded Promotions can build the digital system around Concrete Culture: campaign graphics, website updates, social content, drop launches, artist features, events, email capture, and clear reporting.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#ideas" className="focus-ring rounded-sm bg-safety px-5 py-3 font-black uppercase text-night">View ideas</Link>
            <Link href="#launch-plan" className="focus-ring rounded-sm border border-cyan px-5 py-3 font-black uppercase text-cyan">Launch plan</Link>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded-sm border border-cream/20">
          <Image src={brandAssets.storefront} alt="Concrete Culture storefront marketing package concept" fill priority sizes="(min-width: 1024px) 620px, 94vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-md tag-stroke font-display text-5xl uppercase leading-none text-safety">Store. Supplies. Artists. Culture.</p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        {goals.map((goal) => (
          <article key={goal.title} className="spray-card rounded-sm p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Marketing goal</p>
            <h3 className="mt-3 text-xl font-black uppercase text-white">{goal.title}</h3>
            <p className="mt-3 text-sm leading-6 text-cream/70">{goal.copy}</p>
          </article>
        ))}
      </section>

      <section id="ideas" className="mt-10">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Promotion ideas</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-none text-white md:text-7xl">What we can build for Concrete Culture</h2>
          <p className="mt-4 text-lg leading-8 text-cream/72">Each idea has a clear business purpose: bring people in, grow the audience, sell more supplies, and make the shop feel like the center of Hamilton's creative culture.</p>
        </div>
        <div className="grid gap-5">
          {offers.map(({ icon: Icon, title, image, what, business, why, deliverables }, index) => (
            <article key={title} className="grid overflow-hidden rounded-sm border border-cream/20 bg-night lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[320px]">
                <Image src={image} alt={`${title} concept graphic`} fill sizes="(min-width: 1024px) 520px, 94vw" className={title.includes("Wall Rank") ? "object-contain p-10" : "object-cover"} />
                <div className="absolute inset-0 bg-gradient-to-t from-night/82 via-transparent to-transparent" />
                <p className="absolute left-4 top-4 bg-freight px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">Idea {index + 1}</p>
              </div>
              <div className="p-5 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-safety text-night"><Icon size={22} /></span>
                  <h3 className="font-display text-4xl uppercase leading-none text-white md:text-5xl">{title}</h3>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">What it is</p><p className="mt-2 text-sm leading-6 text-cream/72">{what}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Business impact</p><p className="mt-2 text-sm leading-6 text-cream/72">{business}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Why it works</p><p className="mt-2 text-sm leading-6 text-cream/72">{why}</p></div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {deliverables.map((item) => <span key={item} className="border border-cream/20 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-cream/70">{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="launch-plan" className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-sm bg-cream p-6 text-night">
          <Store className="mb-4" size={32} />
          <h2 className="font-display text-5xl uppercase leading-none">First month launch plan</h2>
          <p className="mt-4 font-bold leading-7">Start with the highest-impact pieces first: owner-approved info, a polished site, the capsule waitlist, the first sale, and one artist spotlight.</p>
          <Link href="/drops" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-sm bg-night px-5 py-3 font-black uppercase text-cream">See drop page <ArrowRight size={18} /></Link>
        </div>
        <div className="grid gap-3">
          {timeline.map(([label, copy]) => (
            <div key={label} className="spray-card rounded-sm p-4">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-safety">{label}</p>
              <p className="mt-2 text-cream/76">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="spray-card rounded-sm p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Reporting</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-none text-white">Know what is working.</h2>
          <p className="mt-4 text-cream/72">Every promotion should have a simple report so Concrete Culture can see what moved attention, what brought people in, and what should be repeated.</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {metrics.map((metric) => <div key={metric} className="border-l-4 border-freight bg-cream/8 px-3 py-2 text-sm font-bold uppercase text-cream/78">{metric}</div>)}
          </div>
        </div>
        <div className="relative min-h-[390px] overflow-hidden rounded-sm border border-cream/20">
          <Image src={brandAssets.freightTools} alt="Concrete Culture supply tools concept" fill sizes="(min-width: 1024px) 580px, 94vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/86 via-night/10 to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-md tag-stroke font-display text-5xl uppercase leading-none text-safety">Good campaigns create repeat business.</p>
        </div>
      </section>

      <section className="mt-10 rounded-sm border border-cream/20 bg-night p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Recommended next step</p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-5xl uppercase leading-none text-white">Approve the first campaign package.</h2>
            <p className="mt-3 max-w-3xl text-cream/72">The cleanest first move is the Barton St. Capsule plus one sale campaign, one artist spotlight, and a workshop/event calendar. That gives the owners something visual, measurable, and easy to understand.</p>
          </div>
          <Link href="/visit" className="focus-ring rounded-sm bg-safety px-5 py-3 text-center font-black uppercase text-night">Owner info needed</Link>
        </div>
      </section>

      <p className="mt-6 text-xs text-cream/50">{siteConfig.pitchDisclaimer}</p>
    </InnerPage>
  );
}
