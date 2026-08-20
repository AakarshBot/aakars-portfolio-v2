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
          A decade of football storytelling, club media, platform publishing and audience-led content — across local clubs and global sporting properties.
        </p>
      </div>

      <div className="space-y-24 sm:space-y-32">
        {caseStudies.map((item, index) => (
          <article key={item.number} className="group">
            <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-black/50">{item.number}</span>
                <span>{item.tags.join(" · ")}</span>
              </div>
              {index === 0 && <span className="hidden rounded-full bg-black px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white sm:block">Global scale</span>}
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-black/[0.06]">
              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[2/1] lg:aspect-[2.15/1]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-8 lg:p-10">
                  <div>
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">{item.subtitle}</p>
                    <h3 className="text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">{item.title}</h3>
                  </div>
                  <div className="hidden max-w-xs text-right text-sm leading-6 text-white/75 lg:block">{item.metric}</div>
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
                <div>
                  <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">{item.description}</p>
                </div>

                {item.stats && (
                  <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-6 lg:min-w-[310px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{stat.value}</div>
                        <div className="mt-1 max-w-[9rem] text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-[var(--muted)] sm:text-[10px]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
