"use client";

import { Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useMemo, useState } from "react";
import { brandAssets } from "@/config/assets";
import { socials } from "@/config/socials";
import { siteConfig } from "@/config/site";
import { Product, products } from "@/data/products";
import { CartDrawer, CartItem } from "./CartDrawer";

const nav = [
  ["Shop", "/shop"],
  ["Drops", "/drops"],
  ["Sales", "/sales"],
  ["Artists", "/artists"],
  ["Workshops", "/workshops"],
  ["Events", "/events"],
  ["Wall Rank", "/wallrank"],
  ["Owner Pitch", "/pitch"],
  ["About", "/about"],
  ["Visit", "/visit"]
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const count = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  function addProduct(product: Product) {
    setCart((items) => {
      const found = items.find((item) => item.slug === product.slug);
      if (found) return items.map((item) => item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item);
      return [...items, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function addSlug(slug: string) {
    const product = products.find((item) => item.slug === slug);
    if (product) addProduct(product);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b-2 border-freight bg-night/95 shadow-[0_8px_0_rgba(0,0,0,0.35)] backdrop-blur">
        <div className="hazard-edge h-1.5" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <Link href="/" className="focus-ring flex items-center gap-3">
            <span className="relative h-14 w-16 overflow-hidden rounded-sm bg-black">
              <Image src={brandAssets.mark} alt="Concrete Culture CC logo" fill sizes="64px" className="object-contain p-1" />
            </span>
            <span>
              <span className="block font-display text-2xl uppercase leading-none text-white md:text-3xl">Concrete Culture</span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">{siteConfig.tagline}</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {nav.map(([label, href]) => <Link key={href} href={href} className="focus-ring border border-cream/15 px-2.5 py-2 text-xs font-black uppercase tracking-wide text-cream/82 hover:border-safety hover:bg-safety hover:text-night">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <button className="focus-ring rounded-md border border-cream/20 p-2" aria-label="Search"><Search size={20} /></button>
            <button className="focus-ring rounded-md border border-cream/20 p-2" aria-label="Account placeholder"><UserRound size={20} /></button>
            <button className="focus-ring relative rounded-md bg-cream p-2 text-night" onClick={() => setCartOpen(true)} aria-label="Cart">
              <ShoppingCart size={20} />
              {count ? <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-freight px-1 text-xs font-black text-white">{count}</span> : null}
            </button>
            <button className="focus-ring rounded-md border border-cream/20 p-2 lg:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menu ? (
          <nav className="grid border-t border-cream/15 bg-night px-4 py-3 lg:hidden">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenu(false)} className="focus-ring border-b border-cream/10 py-3 font-black uppercase">{label}</Link>)}
          </nav>
        ) : null}
      </header>
      <CartContext.Provider value={{ addProduct }}>
        {children}
      </CartContext.Provider>
      <footer className="border-t-2 border-freight bg-night px-4 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.25fr_0.85fr_0.9fr_0.9fr]">
          <div>
            <div className="relative mb-4 h-24 max-w-72">
              <Image src={brandAssets.logo} alt="Concrete Culture Paint Supplies Art logo" fill sizes="288px" className="object-contain object-left" />
            </div>
            <p className="max-w-lg text-sm leading-6 text-cream/70">Hamilton creative supply hub for paint, supplies, art, drops, workshops, artists, and community partnerships.</p>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-safety">Visit</p>
            <p className="mt-2 text-sm leading-6 text-cream/70">{siteConfig.address}</p>
            <p className="text-sm leading-6 text-cream/70">{siteConfig.hours}</p>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-safety">Explore</p>
            <div className="mt-2 grid gap-1 text-sm font-bold uppercase text-cream/70">
              {nav.slice(0, 6).map(([label, href]) => <Link key={href} href={href} className="focus-ring hover:text-cyan">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-safety">Follow the culture</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ name, href, Icon }) => <Link key={name} href={href} className="focus-ring rounded-md border border-cream/20 p-2" aria-label={name}><Icon size={18} /></Link>)}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-cream/10 pt-4 text-xs font-bold uppercase tracking-[0.18em] text-cream/45">
          Concrete Culture // Barton St. Hamilton // Paint | Supplies | Art
        </div>
      </footer>
      <CartDrawer
        items={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onAdd={addSlug}
        onRemove={(slug) => setCart((items) => items.flatMap((item) => item.slug === slug ? (item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []) : [item]))}
        onDelete={(slug) => setCart((items) => items.filter((item) => item.slug !== slug))}
      />
    </>
  );
}

type CartApi = { addProduct: (product: Product) => void };
const CartContext = createContext<CartApi>({ addProduct: () => undefined });
export const useCart = () => useContext(CartContext);
