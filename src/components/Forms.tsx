"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="rounded-lg border border-lime bg-lime/10 p-5 font-bold text-lime">You are on the demo waitlist. Real mailing list integration can be connected next.</div>;
  return (
    <form className="grid gap-3" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <input required className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" placeholder="First name" />
      <input required type="email" className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" placeholder="Email" />
      <input type="tel" className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" placeholder="Phone optional" />
      <select className="focus-ring rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" defaultValue="Full Capsule">
        {["Hoodie", "Tee", "Cap", "Full Capsule"].map((item) => <option key={item}>{item}</option>)}
      </select>
      <button className="focus-ring rounded-md bg-cyan px-5 py-3 font-black uppercase text-night">Join the waitlist</button>
    </form>
  );
}

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <input required type="email" className="focus-ring min-w-0 flex-1 rounded-md border border-cream/20 bg-night px-4 py-3 text-cream" placeholder="Email address" />
      <button className="focus-ring rounded-md bg-safety px-5 py-3 font-black uppercase text-night">Join the list</button>
      {sent ? <p className="text-sm font-bold text-lime sm:self-center">Signed up in demo mode.</p> : null}
    </form>
  );
}
