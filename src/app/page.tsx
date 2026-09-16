"use client";

import Link from "next/link";
import { CalendarDays, MapPin, RadioTower, Sparkles } from "lucide-react";
import { SiteShell, useCart } from "@/components/SiteShell";
import { CategoryCard, InfoCard } from "@/components/Cards";
import { NewsletterForm } from "@/components/Forms";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { artists } from "@/data/artists";
import { categories, products } from "@/data/products";
import { events } from "@/data/events";
import { siteConfig } from "@/config/site";

function HomeContent() {
  const { addProduct } = useCart();
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex bg-freight px-3 py-1 text-sm font-black uppercase tracking-[0.18em] text-white">Barton St. Hamilton</p>
            <h1 className="tag-stroke font-display text-6xl uppercase leading-[0.9] text-safety md:text-8xl">Paint. Supplies. Art. Culture.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-cream/82">Hamilton's creative supply hub for writers, muralists, illustrators, sticker artists, and makers.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="focus-ring rounded-md bg-safety px-5 py-3 font-black uppercase text-night">Shop supplies</Link>
              <Link href="/drops" className="focus-ring rounded-md border border-cyan px-5 py-3 font-black uppercase text-cyan">View latest drop</Link>
              <Link href="/visit" className="focus-ring px-2 py-3 font-black uppercase text-cream hover:text-safety">Visit Barton St.</Link>
            </div>
          </div>
          <div className="spray-card relative min-h-[420px] overflow-hidden rounded-lg p-6 shadow-glow">
            <div className="absolute inset-x-0 top-8 paint-swipe h-8 rotate-[-4deg]" />
            <div className="relative grid h-full grid-cols-3 items-end gap-4 pt-16">
              {["bg-freight", "bg-safety", "bg-cyan"].map((color, index) => (
                <div key={color} className={`${index === 1 ? "h-72" : "h-60"} rounded-t-3xl border-4 border-night ${color} shadow-hard`}>
                  <div className="mx-auto mt-6 h-24 w-10 rounded bg-night/90" />
                </div>
              ))}
            </div>
            <p className="absolute bottom-5 left-5 max-w-xs font-black uppercase tracking-wide text-night"><span className="bg-cream px-2 py-1">Spray cans, markers, blackbooks, stickers, apparel, local art.</span></p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Current drop" title="Barton St. Capsule 001" copy="Concrete Culture x Branded Promotions concept drop with apparel, stickers, packaging, and numbered pickup cards." />
          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard title="Built on Barton" copy="A shop-first capsule designed to move online attention into the physical store." badge="Limited" />
            <InfoCard title="In-store + online" copy="Preorder, pickup, and waitlist flows are ready for real launch tools." badge="Drop" />
            <InfoCard title="Artist energy" copy="Merch, supplies, social content, and Wall Rank features all connect back to local creators." badge="Culture" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Shop categories" title="Supplies by wall, book, studio, and drop" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{categories.slice(0, 10).map((item) => <CategoryCard key={item} title={item} />)}</div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="New paint in" title="Featured products" copy="Demo pricing and availability are placeholders for the pitch prototype." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 8).map((product) => <ProductCard key={product.slug} product={product} onAdd={addProduct} />)}</div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Local artist spotlight" title="Work from the city, tools from the shop" copy="Murals, blackbook work, stickers, illustrations, canvas pieces, and lettering can all live here with approved artist content." />
            <Link href="/artists" className="focus-ring inline-flex rounded-md bg-cyan px-5 py-3 font-black uppercase text-night">See more local work</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">{artists.map((artist) => <InfoCard key={artist.slug} title={artist.name} copy={`${artist.medium}. ${artist.bio}`} />)}</div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <div className="rounded-lg bg-freight p-6 text-white lg:col-span-1">
            <p className="font-display text-5xl uppercase leading-none">Art Supply Weekend</p>
            <p className="mt-3 font-black uppercase">Paint | Markers | Books | Stickers</p>
            <p className="mt-6 text-sm">Promo code placeholder: BARTON15. End date needs owner approval.</p>
          </div>
          <div className="spray-card rounded-lg p-6 lg:col-span-2">
            <SectionHeader eyebrow="Wall Rank x Concrete Culture" title="Supporting the artists behind the walls" copy="A partnership module for featured artists, walls, tools behind the piece, interviews, events, and sponsored community showcases." />
            <div className="flex flex-wrap gap-3">
              <Link href={siteConfig.wallRankUrl} className="focus-ring rounded-md bg-cream px-5 py-3 font-black uppercase text-night">Explore Wall Rank</Link>
              <Link href="/wallrank" className="focus-ring rounded-md border border-cyan px-5 py-3 font-black uppercase text-cyan">Learn about the partnership</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <InfoCard title="CC Lab" copy="3D-printed cap trays, marker stands, spray-can organizers, blackbook stands, and display tools." badge="Objects" />
          <InfoCard title="Canvas to Concrete" copy="Future footwear customization, paintable canvas shoes, lace swaps, paint markers, and workshops." badge="Coming" />
          <div className="spray-card rounded-lg p-5">
            <p className="font-black uppercase text-cyan">Upcoming events</p>
            <div className="mt-4 space-y-3">{events.map((event) => <p key={event.title} className="flex gap-3 text-sm text-cream/75"><CalendarDays className="shrink-0 text-safety" size={18} />{event.title} - {event.date}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="spray-card rounded-lg p-6">
            <SectionHeader eyebrow="From the shop" title="Social feed ready" copy="Mock cards for new stock, artist features, drop previews, workshop clips, shop photos, Reels, and YouTube videos." />
            <div className="grid gap-3 sm:grid-cols-2">{["New stock reel", "Artist feature", "Drop preview", "Workshop clip"].map((item) => <div key={item} className="rounded bg-cream/8 p-4 font-bold">{item}</div>)}</div>
          </div>
          <div className="rounded-lg bg-cream p-6 text-night">
            <Sparkles className="mb-4" />
            <h2 className="font-display text-5xl uppercase leading-none">Stay in the loop</h2>
            <p className="mt-3 font-bold">New paint. Drops. Workshops. Artist features.</p>
            <div className="mt-6"><NewsletterForm /></div>
            <p className="mt-6 flex items-center gap-2 text-sm"><MapPin size={18} /> {siteConfig.address}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  return <SiteShell><HomeContent /></SiteShell>;
}
