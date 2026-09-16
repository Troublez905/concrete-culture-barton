import { InnerPage } from "@/components/InnerPage";
import { InfoCard } from "@/components/Cards";

export default function SalesPage() {
  return (
    <InnerPage eyebrow="Sales" title="Art Supply Weekend" copy="Paint | Markers | Books | Stickers. Demo discounts, coupon banners, bundle deals, and countdown blocks for the pitch.">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-lg bg-freight p-6 text-white md:col-span-2"><p className="font-display text-6xl uppercase leading-none">15% off sample weekend</p><p className="mt-4 font-black uppercase">Promo code: BARTON15</p><p className="mt-2">End date placeholder. Owner-provided dates required.</p></div>
        <InfoCard title="Clearance wall" copy="Rotating clearance products and last-call supplies." badge="Sale" />
        <InfoCard title="Starter bundle" copy="Blackbook, marker, sticker blanks, and cap pack." badge="Bundle" />
        <InfoCard title="Weekend paint rack" copy="Featured demo paint discount with in-store pickup." badge="Paint" />
      </div>
    </InnerPage>
  );
}
