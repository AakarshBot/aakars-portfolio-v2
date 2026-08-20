import { metrics } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Impact() {
  const [primary, ...supporting] = metrics;

  return (
    <section id="impact" className="overflow-hidden border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Selected impact</SectionLabel>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A career measured in audiences, stories and scale.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[var(--muted)]">
              From football publishing and club media to global tournament programming, these are a few signals of the work&apos;s reach.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[var(--foreground)] p-7 text-[var(--background)] sm:p-10 lg:p-12">
            <div className="absolute -right-12 -top-20 text-[10rem] font-semibold leading-none tracking-[-0.09em] text-white/[0.045] sm:text-[14rem]">01</div>
            <div className="relative">
              <div className="text-[4.8rem] font-semibold leading-none tracking-[-0.075em] sm:text-[7rem] lg:text-[8rem]">{primary.value}</div>
              <div className="mt-4 max-w-sm text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-white/65 sm:text-sm">{primary.label}</div>
              {primary.note && <div className="mt-3 text-sm text-white/45">{primary.note}</div>}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-3">
          {supporting.map((metric, index) => (
            <div key={metric.label} className="group relative min-h-[185px] bg-[var(--background)] p-7 transition duration-300 hover:bg-white sm:p-8 lg:min-h-[215px]">
              <div className="mb-12 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                <span>0{index + 2}</span>
                <span className="opacity-0 transition-opacity group-hover:opacity-100">Career signal</span>
              </div>
              <div className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">{metric.value}</div>
              <div className="mt-3 max-w-[220px] text-[10px] font-semibold uppercase leading-5 tracking-[0.13em] text-[var(--muted)]">{metric.label}</div>
              {metric.note && <div className="mt-2 text-xs leading-5 text-[var(--muted)]">{metric.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
