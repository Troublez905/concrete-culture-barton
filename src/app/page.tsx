"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { SiteShell, useCart } from "@/components/SiteShell";
import { CategoryCard, InfoCard } from "@/components/Cards";
import { NewsletterForm } from "@/components/Forms";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { artists } from "@/data/artists";
import { categories, products } from "@/data/products";
import { events } from "@/data/events";
import { siteConfig } from "@/config/site";
import { brandAssets } from "@/config/assets";

function HomeContent() {
  const { addProduct } = useCart();
  const launchPriorities = [
    ["01", "Capsule drop", "Waitlist, pickup cards, apparel story, and launch content."],
    ["02", "Artist features", "Profiles, tools used, interviews, and local work galleries."],
    ["03", "Events engine", "Workshops, pop-ups, blackbook sessions, and Wall Rank showcases."]
  ];
  const shopSignals = ["Graffiti supplies", "Local artist support", "Barton St. pickup", "Workshops + drops"];
  const feedItems = [
    ["New paint rack", "Fresh cans, caps, mops, and blackbook tools."],
    ["Artist feature", "A local creator spotlight connected to supplies."],
    ["Capsule preview", "Drop tease for tees, hoodies, caps, and stickers."],
    ["Workshop clip", "Short-form content from in-store sessions."]
  ];

  return (
    <main>
      <section className="relative overflow-hidden border-b border-cream/15 px-4 py-8 md:py-12">
        <div className="absolute inset-0 opacity-18">
          <Image src={brandAssets.storefront} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/86 to-night/35" />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative z-10">
            <p className="mb-3 inline-flex bg-freight px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">Barton St. Hamilton</p>
            <div className="relative mb-5 h-32 max-w-xl sm:h-44">
              <Image src={brandAssets.logo} alt="Concrete Culture Paint Supplies Art logo" fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-contain object-left" />
            </div>
            <h1 className="tag-stroke font-display text-5xl uppercase leading-[0.88] text-safety md:text-7xl">Paint. Supplies. Art. Culture.</h1>
            <p className="mt-4 max-w-2xl text-lg font-bold leading-7 text-cream/86">Hamilton's creative supply hub for writers, muralists, illustrators, sticker artists, and makers.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/drops" className="focus-ring rounded-sm bg-safety px-5 py-3 font-black uppercase text-night shadow-hard">View latest drop</Link>
              <Link href="/wallrank" className="focus-ring rounded-sm border border-cyan bg-night/70 px-5 py-3 font-black uppercase text-cyan">Wall Rank partnership</Link>
              <Link href="/visit" className="focus-ring px-2 py-3 font-black uppercase text-cream hover:text-safety">Visit Barton St.</Link>
            </div>
            <div className="mt-6 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
              {shopSignals.map((signal) => (
                <div key={signal} className="border border-cream/20 bg-night/70 px-3 py-2 text-xs font-black uppercase tracking-wide text-cream/82">
                  {signal}
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 overflow-hidden rounded-sm border-2 border-cream/25 bg-night shadow-hard">
            <div className="hazard-edge h-3" />
            <div className="relative aspect-[4/3]">
              <Image src={brandAssets.writers} alt="Concrete Culture supplies, cans, caps, markers, and blackbooks" fill priority sizes="(min-width: 1024px) 620px, 94vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/65 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 max-w-sm rotate-[-2deg] bg-cream px-3 py-2 font-display text-3xl uppercase leading-none text-night">Built for writers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-sm border border-cream/20 bg-night">
            <Image src={brandAssets.capsule} alt="Concrete Culture Barton Street capsule apparel and sticker pack" fill sizes="(min-width: 1024px) 650px, 94vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-night/78 via-night/28 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-md">
              <p className="mb-2 inline-flex bg-freight px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">Current drop</p>
              <h2 className="tag-stroke font-display text-5xl uppercase leading-none text-safety md:text-7xl">Barton St. Capsule 001</h2>
            </div>
          </div>
          <div className="grid gap-3">
            <InfoCard title="Built on Barton" copy="A shop-first capsule designed to move online attention into the physical store." badge="Limited" />
            <InfoCard title="In-store + online" copy="Preorder, pickup, and waitlist flows are ready for real launch tools." badge="Drop" />
            <InfoCard title="Artist energy" copy="Merch, supplies, social content, and Wall Rank features all connect back to local creators." badge="Culture" />
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="spray-card rounded-sm p-5">
            <SectionHeader eyebrow="About us" title="More than a store" copy="Concrete Culture is presented here as a Barton Street creative hub: paint, supplies, artist support, workshops, drops, and real local culture under one roof." />
            <Link href="/about" className="focus-ring inline-flex rounded-sm bg-cyan px-5 py-3 font-black uppercase text-night">Read about the shop</Link>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-sm border border-cream/20">
            <Image src={brandAssets.supplies} alt="Concrete Culture shop supplies with spray cans, markers, caps, stickers, and blackbooks" fill sizes="(min-width: 1024px) 760px, 94vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-night/82 p-4">
              <p className="font-black uppercase tracking-[0.18em] text-safety">Good paint. Better people. Same tools. Bigger ideas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {launchPriorities.map(([number, title, copy]) => (
            <article key={title} className="spray-card relative overflow-hidden rounded-sm p-5">
              <p className="absolute right-4 top-2 font-display text-7xl leading-none text-cream/10">{number}</p>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Launch priority</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-cream/72">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Shop categories" title="Supplies by wall, book, studio, and drop" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{categories.slice(0, 10).map((item) => <CategoryCard key={item} title={item} />)}</div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="New paint in" title="Featured supplies" copy="A tight product preview for the pitch. Real product photography, prices, and inventory can replace these cards when the store is ready." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 8).map((product) => <ProductCard key={product.slug} product={product} onAdd={addProduct} />)}</div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Local artist spotlight" title="Work from the city, tools from the shop" copy="Murals, blackbook work, stickers, illustrations, canvas pieces, and lettering can all live here with approved artist content." />
            <Link href="/artists" className="focus-ring inline-flex rounded-md bg-cyan px-5 py-3 font-black uppercase text-night">See more local work</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">{artists.map((artist) => <InfoCard key={artist.slug} title={artist.name} copy={`${artist.medium}. ${artist.bio}`} />)}</div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-sm bg-freight p-6 text-white lg:col-span-1">
            <div className="absolute inset-x-0 top-0 h-2 bg-safety" />
            <p className="font-display text-5xl uppercase leading-none">Art Supply Weekend</p>
            <p className="mt-3 font-black uppercase">Paint | Markers | Books | Stickers</p>
            <p className="mt-6 text-sm leading-6">Weekend campaign block for real promo codes, sale dates, bundle offers, and in-store pickup pushes.</p>
          </div>
          <div className="spray-card rounded-sm p-6 lg:col-span-2">
            <SectionHeader eyebrow="Wall Rank x Concrete Culture" title="Supporting the artists behind the walls" copy="A partnership module for featured artists, walls, tools behind the piece, interviews, events, and sponsored community showcases." />
            <div className="flex flex-wrap gap-3">
              <Link href={siteConfig.wallRankUrl} className="focus-ring rounded-md bg-cream px-5 py-3 font-black uppercase text-night">Explore Wall Rank</Link>
              <Link href="/wallrank" className="focus-ring rounded-md border border-cyan px-5 py-3 font-black uppercase text-cyan">Learn about the partnership</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <div className="relative min-h-72 overflow-hidden rounded-sm border border-cream/20 lg:col-span-2">
            <Image src={brandAssets.freightTools} alt="Concrete Culture caps, markers, spray cans, blackbooks, and freight-yard tools" fill sizes="(min-width: 1024px) 780px, 94vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-night/82 via-night/22 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-xl">
              <p className="mb-2 inline-flex bg-cyan px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-night">CC Lab</p>
              <p className="tag-stroke font-display text-5xl uppercase leading-none text-safety">Objects, displays, tools</p>
            </div>
          </div>
          <div className="spray-card rounded-lg p-5">
            <p className="font-black uppercase text-cyan">Upcoming events</p>
            <div className="mt-4 space-y-3">{events.map((event) => <p key={event.title} className="flex gap-3 text-sm text-cream/75"><CalendarDays className="shrink-0 text-safety" size={18} />{event.title} - {event.date}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="spray-card rounded-sm p-6">
            <SectionHeader eyebrow="From the shop" title="Content that keeps moving" copy="A clean feed system for stock arrivals, local artist work, capsule teasers, workshop clips, and short-form video." />
            <div className="grid gap-3 sm:grid-cols-2">
              {feedItems.map(([title, copy]) => (
                <div key={title} className="border-l-4 border-freight bg-cream/8 p-4">
                  <p className="font-black uppercase text-white">{title}</p>
                  <p className="mt-2 text-sm text-cream/68">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm bg-cream p-6 text-night">
            <Sparkles className="mb-4" />
            <h2 className="font-display text-5xl uppercase leading-none">Stay in the loop</h2>
            <p className="mt-3 font-bold">New paint. Drops. Workshops. Artist features.</p>
            <div className="mt-6"><NewsletterForm /></div>
            <p className="mt-6 flex items-center gap-2 text-sm"><MapPin size={18} /> {siteConfig.address}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-sm border border-cream/20 bg-night p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Ready for the owner pitch</p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none text-white md:text-6xl">A real digital front door for the shop.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/pitch" className="focus-ring rounded-sm bg-safety px-5 py-3 font-black uppercase text-night">View pitch page</Link>
            <Link href="/visit" className="focus-ring rounded-sm border border-cream/25 px-5 py-3 font-black uppercase text-cream">Visit info</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  return <SiteShell><HomeContent /></SiteShell>;
}
