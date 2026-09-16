"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { productAssetFor } from "@/config/assets";
import { Product } from "@/data/products";
import { Badge } from "./Badge";

export function ProductCard({ product, onAdd }: { product: Product; onAdd?: (product: Product) => void }) {
  return (
    <article className="spray-card group flex min-h-[360px] flex-col overflow-hidden rounded-md">
      <Link href={`/shop/${product.slug}`} className="focus-ring block">
        <div className="relative h-48 overflow-hidden bg-night">
          <Image src={productAssetFor(product.category)} alt={`${product.title} visual`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/15 to-transparent" />
          <div className="absolute bottom-3 left-3 border border-cream/40 bg-night/82 px-2 py-1 text-xs font-black uppercase tracking-[0.16em] text-cream">{product.stock}</div>
          {product.badge ? <div className="absolute left-3 top-3"><Badge tone={product.badge === "Sale" ? "red" : product.badge === "Limited" ? "yellow" : "cyan"}>{product.badge}</Badge></div> : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4 pt-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">{product.category}</p>
        <Link href={`/shop/${product.slug}`} className="focus-ring mt-2">
          <h3 className="text-xl font-black leading-tight text-white">{product.title}</h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-cream/68">{product.description}</p>
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
