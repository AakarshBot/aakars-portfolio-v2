import { metrics } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Impact() {
  return (
    <section id="impact" className="border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionLabel>Selected impact</SectionLabel>
          <span className="hidden text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase md:block">Across 10+ years</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`py-5 lg:px-8 ${index > 0 ? "lg:border-l lg:border-black/10" : ""}`}>
              <div className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">{metric.value}</div>
              <div className="mt-3 text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">{metric.label}</div>
              {metric.note && <div className="mt-2 text-xs leading-5 text-[var(--muted)]">{metric.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
