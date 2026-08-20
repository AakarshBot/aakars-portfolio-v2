import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-36 lg:pt-36">
      <SectionLabel>10+ years · sports media · content · strategy</SectionLabel>

      <h1 className="mt-6 max-w-6xl text-[clamp(3.35rem,9vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.068em] sm:mt-7">
        Sports Media
        <br />
        <span className="text-[var(--muted)]">&amp; Content Leader.</span>
      </h1>

      <div className="mt-9 grid max-w-5xl gap-7 sm:mt-12 sm:gap-8 md:grid-cols-[1fr_250px] md:items-end">
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl md:text-2xl">
          I build digital sports audiences through content strategy, storytelling, data and distribution — across football clubs, global sports platforms and media teams.
        </p>
        <a
          className="w-fit border-b border-black pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-50 sm:text-sm"
          href="#work"
        >
          Explore selected work ↓
        </a>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-y-4 border-t border-black/10 pt-5 text-[10px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase sm:mt-20 sm:grid-cols-2 sm:text-[11px] md:grid-cols-3 lg:grid-cols-6">
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
