import { InnerPage } from "@/components/InnerPage";
import { InfoCard } from "@/components/Cards";

export default function AboutPage() {
  return (
    <InnerPage eyebrow="About" title="Barton Street creative supply hub" copy="This page avoids fake founding stories. Owner-provided history, team details, photos, and exact store information should replace the placeholders.">
      <div className="grid gap-5 md:grid-cols-3">
        <InfoCard title="Art supplies" copy="Spray paint, markers, blackbooks, stickers, canvas, gloves, tape, apparel, and tools." />
        <InfoCard title="Graffiti culture" copy="Built around practical tools, style development, local artists, education, and community." />
        <InfoCard title="Owner info needed" copy="Founding story, shop photos, staff bios, brand approvals, and contact details need owner input." />
      </div>
    </InnerPage>
  );
}
