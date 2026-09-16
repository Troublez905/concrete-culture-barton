import { SiteShell } from "./SiteShell";
import { SectionHeader } from "./SectionHeader";

export function InnerPage({ eyebrow, title, copy, children }: { eyebrow?: string; title: string; copy?: string; children: React.ReactNode }) {
  return (
    <SiteShell>
      <main className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow={eyebrow} title={title} copy={copy} />
          {children}
        </div>
      </main>
    </SiteShell>
  );
}
