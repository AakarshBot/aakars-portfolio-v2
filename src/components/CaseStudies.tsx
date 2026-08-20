import Image from "next/image";
import { caseStudies } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mb-12 grid gap-6 sm:mb-16 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-5 max-w-4xl text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Work that moved audiences.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
          From football editorial and club storytelling to global publishing and audience strategy — work shaped by what audiences actually respond to.
        </p>
      </div>

      <div className="space-y-20 sm:space-y-28">
        {caseStudies.map((item, index) => (
          <article key={item.number} className="group border-t border-black/15 pt-5 sm:pt-7">
            <div className="mb-6 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:mb-8 sm:text-[11px]">
              <span className="text-black/45">{item.number}</span>
              <span className="max-w-[75%] text-right">{item.tags.join(" · ")}</span>
            </div>

            <div className="grid overflow-hidden rounded-md bg-[var(--surface)] ring-1 ring-black/[0.04] md:grid-cols-[1.08fr_0.92fr]">
              <div className={`relative min-h-[260px] overflow-hidden sm:min-h-[360px] md:min-h-[540px] ${index % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/[0.035]" />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
                <div>
                  <div className="mb-7 flex items-center justify-between gap-4 sm:mb-10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-xs">Case study</p>
                    {index === 0 && (
                      <span className="rounded-full border border-black/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                        Global scale
                      </span>
                    )}
                  </div>
                  <h3 className="text-[2.7rem] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-4xl md:text-5xl lg:text-6xl">{item.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-snug text-[var(--muted)] sm:text-lg">{item.subtitle}</p>
                </div>

                <div className="mt-12 border-t border-black/10 pt-6 sm:mt-16 sm:pt-7">
                  <p className="text-lg font-semibold tracking-[-0.025em] sm:text-xl md:text-2xl">{item.metric}</p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)] sm:mt-4">{item.description}</p>

                  {item.stats && (
                    <div className="mt-7 grid grid-cols-2 border-t border-black/10 pt-5 sm:mt-8 sm:pt-6">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="pr-4">
                          <div className="text-xl font-semibold tracking-[-0.045em] sm:text-2xl">{stat.value}</div>
                          <div className="mt-1 max-w-[10rem] text-[9px] font-semibold uppercase tracking-[0.11em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.12em]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
