export function Badge({ children, tone = "cyan" }: { children: React.ReactNode; tone?: "cyan" | "red" | "yellow" | "lime" }) {
  const tones = {
    cyan: "bg-cyan text-night",
    red: "bg-freight text-white",
    yellow: "bg-safety text-night",
    lime: "bg-lime text-night"
  };

  return <span className={`inline-flex items-center px-2.5 py-1 text-xs font-black uppercase tracking-wide ${tones[tone]}`}>{children}</span>;
}
