import { InnerPage } from "@/components/InnerPage";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <InnerPage eyebrow="Events" title="Drops, pop-ups, sessions, and showcases" copy="Friday Drops, Artist Pop-Ups, Workshops, Blackbook Sessions, Product Launches, Shoe Customization Nights, and Wall Rank Showcases.">
      <div className="grid gap-5 md:grid-cols-3">{events.map((event) => <article className="spray-card rounded-lg p-5" key={event.title}><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan">{event.type}</p><h2 className="mt-3 text-2xl font-black text-white">{event.title}</h2><p className="mt-3 text-safety">{event.date} - {event.time}</p><p className="mt-1 text-cream/70">{event.location}</p><p className="mt-4 text-cream/70">{event.description}</p><button className="focus-ring mt-5 rounded-md bg-cream px-4 py-2 font-black uppercase text-night">RSVP</button></article>)}</div>
    </InnerPage>
  );
}
