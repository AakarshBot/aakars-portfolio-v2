import { metrics } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Impact() {
  return (
    <section id="impact" className="border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Selected impact</SectionLabel>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              A few signals of scale from a career that spans publishing, club media, technology and global sport.
            </p>
          </div>
          <span className="hidden text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase md:block">Across 10+ years</span>
        </div>
        <div className="grid grid-cols-2 border-t border-black/10 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`min-h-[150px] border-b border-black/10 py-7 lg:min-h-[190px] lg:border-b-0 lg:px-8 lg:py-8 ${index % 2 === 1 ? "border-l border-black/10" : ""} ${index >= 2 ? "lg:border-l" : ""}`}>
              <div className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">{metric.value}</div>
              <div className="mt-3 max-w-[180px] text-xs font-semibold leading-5 tracking-[0.14em] text-[var(--muted)] uppercase">{metric.label}</div>
              {metric.note && <div className="mt-2 max-w-[210px] text-xs leading-5 text-[var(--muted)]">{metric.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
