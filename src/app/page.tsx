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
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Shop categories" title="Supplies by wall, book, studio, and drop" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{categories.slice(0, 10).map((item) => <CategoryCard key={item} title={item} />)}</div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="New paint in" title="Featured supplies" copy="Demo product cards now use the Concrete Culture promo graphics as shop visuals until real product photography is ready." />
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
          <div className="rounded-lg bg-freight p-6 text-white lg:col-span-1">
            <p className="font-display text-5xl uppercase leading-none">Art Supply Weekend</p>
            <p className="mt-3 font-black uppercase">Paint | Markers | Books | Stickers</p>
            <p className="mt-6 text-sm">Promo code placeholder: BARTON15. End date needs owner approval.</p>
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
          <InfoCard title="CC Lab" copy="3D-printed cap trays, marker stands, spray-can organizers, blackbook stands, and display tools." badge="Objects" />
          <InfoCard title="Canvas to Concrete" copy="Future footwear customization, paintable canvas shoes, lace swaps, paint markers, and workshops." badge="Coming" />
          <div className="spray-card rounded-lg p-5">
            <p className="font-black uppercase text-cyan">Upcoming events</p>
            <div className="mt-4 space-y-3">{events.map((event) => <p key={event.title} className="flex gap-3 text-sm text-cream/75"><CalendarDays className="shrink-0 text-safety" size={18} />{event.title} - {event.date}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
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
