import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-32 lg:pt-36">
      <SectionLabel>Sports media · content · strategy</SectionLabel>
      <h1 className="max-w-6xl text-[clamp(3.8rem,9vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
        Sports Media<br />&amp; Content Leader.
      </h1>
      <div className="mt-12 grid max-w-5xl gap-8 md:grid-cols-[1fr_250px] md:items-end">
        <p className="max-w-3xl text-xl leading-relaxed text-[var(--muted)] md:text-2xl">
          I build digital sports audiences through content strategy, storytelling, data and distribution — from football clubs to global sports platforms.
        </p>
        <a className="w-fit border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em]" href="#work">Explore selected work ↓</a>
      </div>
    </section>
  );
}
