import { InnerPage } from "@/components/InnerPage";
import { socials } from "@/config/socials";
import { siteConfig } from "@/config/site";

export default function VisitPage() {
  return (
    <InnerPage eyebrow="Visit Concrete Culture" title="Barton St. Hamilton" copy="Address, hours, phone, email, map, parking, and transit details are placeholders for owner confirmation.">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="spray-card rounded-lg p-6">
          <p className="font-black text-safety">Address</p><p className="mb-4 text-cream/75">{siteConfig.address}</p>
          <p className="font-black text-safety">Hours</p><p className="mb-4 text-cream/75">{siteConfig.hours}</p>
          <p className="font-black text-safety">Phone</p><p className="mb-4 text-cream/75">{siteConfig.phone}</p>
          <p className="font-black text-safety">Email</p><p className="mb-4 text-cream/75">{siteConfig.email}</p>
          <p className="font-black text-safety">Parking / transit</p><p className="text-cream/75">Placeholder note for Barton Street access.</p>
        </div>
        <div className="grid min-h-[420px] place-items-center rounded-lg border border-cream/15 bg-cream/5 p-6 text-center">
          <div><p className="font-display text-5xl uppercase text-white">Map placeholder</p><p className="mt-3 text-cream/70">Embed Google Maps or another approved map provider here.</p><div className="mt-5 flex justify-center gap-2">{socials.map(({ name, href, Icon }) => <a className="focus-ring rounded-md border border-cream/20 p-2" href={href} key={name} aria-label={name}><Icon /></a>)}</div></div>
        </div>
      </div>
    </InnerPage>
  );
}
