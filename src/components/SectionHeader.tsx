export function SectionHeader({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-cyan">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl uppercase leading-none text-cream md:text-6xl">{title}</h2>
      {copy ? <p className="mt-3 text-base leading-7 text-cream/76 md:text-lg">{copy}</p> : null}
    </div>
  );
}
