import Link from "next/link";
import { Badge } from "./Badge";

export function CategoryCard({ title }: { title: string }) {
  return (
    <Link href={`/shop?category=${encodeURIComponent(title)}`} className="focus-ring spray-card group min-h-40 rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-hard">
      <div className="paint-swipe mb-5 h-2 w-20" />
      <h3 className="font-display text-4xl uppercase leading-none text-white">{title}</h3>
      <p className="mt-3 text-sm font-bold uppercase tracking-wide text-cyan">Shop category</p>
    </Link>
  );
}

export function InfoCard({ title, copy, badge }: { title: string; copy: string; badge?: string }) {
  return (
    <article className="spray-card rounded-lg p-5">
      {badge ? <Badge tone="yellow">{badge}</Badge> : null}
      <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>
      <p className="mt-2 text-cream/70">{copy}</p>
    </article>
  );
}
