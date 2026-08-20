import { metrics } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Impact() {
  return (
    <section id="impact" className="border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
          <div>
            <SectionLabel>Selected impact</SectionLabel>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              A few signals of scale from a career spanning publishing, club media, technology and global sport.
            </p>
          </div>
          <span className="hidden text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase md:block">Across 10+ years</span>
        </div>

        <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`min-h-[160px] border-b border-black/10 py-7 sm:min-h-[175px] sm:px-7 lg:min-h-[190px] lg:border-b-0 lg:px-8 lg:py-8 ${index % 2 === 1 ? "sm:border-l" : ""} ${index >= 2 ? "sm:border-t lg:border-t-0 lg:border-l" : ""}`}
            >
              <div className="text-[2.65rem] font-semibold leading-none tracking-[-0.055em] sm:text-5xl lg:text-[3.4rem]">{metric.value}</div>
              <div className="mt-4 max-w-[190px] text-[10px] font-semibold leading-5 tracking-[0.14em] text-[var(--muted)] uppercase sm:text-[11px]">{metric.label}</div>
              {metric.note && <div className="mt-2 max-w-[220px] text-xs leading-5 text-[var(--muted)]">{metric.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
