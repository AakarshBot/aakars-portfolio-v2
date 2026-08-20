import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-32">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
        <div>
          <SectionLabel>Sports media · content · strategy</SectionLabel>

          <h1 className="mt-7 max-w-6xl text-[clamp(3.7rem,8.7vw,9.2rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            I build sports
            <br />
            <span className="text-[var(--muted)]">audiences.</span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-[1.45] text-[var(--muted)] md:text-2xl">
            Over a decade in football and digital media — building content, stories and publishing systems that turn attention into audiences.
          </p>
        </div>

        <div className="flex flex-col gap-7 lg:pb-2">
          <p className="max-w-[18rem] text-sm leading-relaxed text-[var(--muted)]">
            FIFA · FanCode · Hyderabad FC · Microsoft
          </p>
          <a
            className="w-fit border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-50"
            href="#work"
          >
            Explore selected work ↓
          </a>
        </div>
      </div>

      <div className="mt-20 grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-3 lg:grid-cols-6">
        {[
          ["10+", "years in sports media"],
          ["4.4B", "FIFA World Cup views"],
          ["2,315", "videos published"],
          ["7.9M", "subscribers"],
          ["143M", "peak day views"],
          ["2", "documentary seasons"],
        ].map(([value, label]) => (
          <div key={label}>
            <div className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{value}</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
