import { InnerPage } from "@/components/InnerPage";
import { products } from "@/data/products";

export default function CCLabPage() {
  return (
    <InnerPage eyebrow="CC Lab" title="Concrete Culture Objects" copy="A slightly more technical industrial section for 3D-printed display tools, organizers, stands, trays, and shop objects.">
      <div className="grid gap-5 md:grid-cols-3">{products.filter((item) => item.category === "3D-Printed Tools").concat([
        { slug: "cc-002-marker-stand", title: "CC-002 Marker Stand", category: "3D-Printed Tools", price: 22, stock: "Pickup only", specs: [], description: "Marker stand prototype for counter displays and home studios.", tags: [] },
        { slug: "cc-003-can-organizer", title: "CC-003 Can Organizer", category: "3D-Printed Tools", price: 30, stock: "Pickup only", specs: [], description: "Spray-can organizer concept for shelves, workshops, and artist studios.", tags: [] }
      ]).map((item) => <article className="rounded-lg border border-cyan/25 bg-cyan/5 p-5" key={item.slug}><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan">{item.category}</p><h2 className="mt-3 text-2xl font-black text-white">{item.title}</h2><p className="mt-3 text-cream/70">{item.description}</p><p className="mt-5 text-3xl font-black text-safety">${item.price.toFixed(2)}</p></article>)}</div>
    </InnerPage>
  );
}
