import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-36">
      <SectionLabel>Sports media · content · strategy</SectionLabel>

      <h1 className="mt-7 max-w-6xl text-[clamp(3.8rem,9vw,9.5rem)] font-semibold leading-[0.87] tracking-[-0.068em]">
        Sports Media
        <br />
        <span className="text-[var(--muted)]">&amp; Content Leader.</span>
      </h1>

      <div className="mt-12 grid max-w-5xl gap-8 md:grid-cols-[1fr_250px] md:items-end">
        <p className="max-w-3xl text-xl leading-relaxed text-[var(--muted)] md:text-2xl">
          I build digital sports audiences through content strategy, storytelling, data and distribution — from football clubs to global sports platforms.
        </p>
        <a
          className="w-fit border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-50"
          href="#work"
        >
          Explore selected work ↓
        </a>
      </div>

      <div className="mt-20 grid gap-4 border-t border-black/10 pt-6 text-[11px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <span>FIFA</span>
        <span>FanCode</span>
        <span>Hyderabad FC</span>
        <span>Microsoft</span>
        <span>Premier League India</span>
        <span>Liverpool India</span>
      </div>
    </section>
  );
}
