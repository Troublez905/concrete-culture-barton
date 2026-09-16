"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";
import { Badge } from "./Badge";

export function ProductCard({ product, onAdd }: { product: Product; onAdd?: (product: Product) => void }) {
  return (
    <article className="spray-card group flex min-h-[390px] flex-col overflow-hidden rounded-lg">
      <Link href={`/shop/${product.slug}`} className="focus-ring block">
        <div className="relative h-44 overflow-hidden bg-night">
          <div className="absolute inset-0 paint-swipe opacity-70" />
          <div className="absolute inset-x-8 bottom-0 h-32 rounded-t-2xl border-2 border-night bg-cream shadow-hard transition-transform group-hover:-translate-y-1">
            <div className="mx-auto mt-4 h-16 w-12 rounded-md bg-night" />
            <div className="mx-auto mt-2 h-3 w-20 bg-freight" />
          </div>
          {product.badge ? <div className="absolute left-3 top-3"><Badge tone={product.badge === "Sale" ? "red" : product.badge === "Limited" ? "yellow" : "cyan"}>{product.badge}</Badge></div> : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">{product.category}</p>
        <Link href={`/shop/${product.slug}`} className="focus-ring mt-2">
          <h3 className="text-xl font-black leading-tight text-white">{product.title}</h3>
        </Link>
        <p className="mt-2 text-sm text-cream/70">{product.stock}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <div>
            <p className="text-2xl font-black text-safety">${product.price.toFixed(2)}</p>
            {product.compareAt ? <p className="text-sm text-cream/55 line-through">${product.compareAt.toFixed(2)}</p> : null}
          </div>
          <button
            type="button"
            onClick={() => onAdd?.(product)}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-cream px-3 py-2 text-sm font-black uppercase text-night transition hover:bg-safety"
          >
            <ShoppingCart size={17} aria-hidden />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
