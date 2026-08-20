import { SectionLabel } from "./SectionLabel";

const impact = [
  {
    value: "10+",
    label: "Years in sports media",
    text: "From football writing and editorial to club media, technology, live sports and global publishing.",
  },
  {
    value: "4.4B",
    label: "FIFA World Cup views",
    text: "A record tournament performance built through publishing strategy, speed, packaging and audience insight.",
  },
  {
    value: "2",
    label: "Documentary seasons",
    text: "Future Is Us for Disney+ Hotstar — long-form storytelling built around a football club and its people.",
  },
  {
    value: "15K+",
    label: "Articles published",
    text: "A decade of editorial work across football media, alongside hands-on video, social and digital publishing.",
  },
];

export function Impact() {
  return (
    <section id="impact" className="border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <SectionLabel>Selected impact</SectionLabel>
            <h2 className="mt-6 max-w-md text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              A career built across the whole sports media ecosystem.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
            {impact.map((item) => (
              <article key={item.label} className="bg-[var(--surface)] p-7 md:p-8">
                <div className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{item.value}</div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em]">{item.label}</div>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
