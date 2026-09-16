import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { InnerPage } from "@/components/InnerPage";
import { Badge } from "@/components/Badge";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  return { title: product?.title ?? "Product" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <InnerPage eyebrow={product.category} title={product.title} copy={product.description}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="spray-card min-h-[430px] rounded-lg p-8">
          <div className="paint-swipe h-10 rotate-[-3deg]" />
          <div className="mx-auto mt-12 h-72 max-w-44 rounded-t-3xl border-4 border-night bg-safety shadow-hard" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            {product.badge ? <Badge tone="yellow">{product.badge}</Badge> : null}
            <span className="font-bold text-cyan">{product.stock}</span>
          </div>
          <p className="mt-5 text-5xl font-black text-safety">${product.price.toFixed(2)}</p>
          {product.compareAt ? <p className="text-xl text-cream/50 line-through">${product.compareAt.toFixed(2)}</p> : null}
          <div className="mt-6 grid gap-3 sm:grid-cols-[120px_1fr]">
            <input min={1} defaultValue={1} type="number" className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" />
            <AddToCartButton product={product} />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-cream/15 p-4"><p className="font-black text-white">Pickup availability</p><p className="mt-1 text-cream/70">Barton St. pickup option shown for prototype.</p></div>
            <div className="rounded-lg border border-cream/15 p-4"><p className="font-black text-white">Shipping info</p><p className="mt-1 text-cream/70">Shipping rates and zones need owner confirmation.</p></div>
          </div>
          <ul className="mt-8 grid gap-2">{product.specs.map((spec) => <li key={spec} className="border-b border-cream/10 py-2 text-cream/80">{spec}</li>)}</ul>
        </div>
      </div>
      {related.length ? <div className="mt-10"><h2 className="font-display text-4xl uppercase">Related products</h2><div className="mt-4 flex flex-wrap gap-3">{related.map((item) => <Link className="focus-ring rounded-md border border-cream/20 px-4 py-2 font-bold" href={`/shop/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div></div> : null}
    </InnerPage>
  );
}
