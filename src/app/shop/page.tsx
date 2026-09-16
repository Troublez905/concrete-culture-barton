"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { InnerPage } from "@/components/InnerPage";
import { useCart } from "@/components/SiteShell";
import { categories, products } from "@/data/products";

function ShopContent() {
  const { addProduct } = useCart();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const list = products.filter((product) => (category === "All" || product.category === category) && product.title.toLowerCase().includes(query.toLowerCase()));
    if (sort === "price-low") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, query, sort]);

  return (
    <InnerPage eyebrow="Online shop" title="Paint, markers, books, apparel, and tools" copy="Working demo product grid with filters, search, sorting, stock indicators, and cart actions. Pricing is sample-only.">
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_220px_220px]">
        <input className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" placeholder="Search products" value={query} onChange={(event) => setQuery(event.target.value)} />
        <select className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" value={category} onChange={(event) => setCategory(event.target.value)}>
          {["All", ...categories].map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-low">Price low to high</option>
          <option value="price-high">Price high to low</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filtered.map((product) => <ProductCard key={product.slug} product={product} onAdd={addProduct} />)}</div>
    </InnerPage>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
