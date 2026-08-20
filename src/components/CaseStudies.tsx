import Image from "next/image";
import { caseStudies } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-16 grid gap-6 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
            Work that moved audiences.
          </h2>
        </div>
        <p className="text-sm leading-7 text-[var(--muted)]">
          Publishing, media strategy and storytelling across football, clubs and global sports platforms.
        </p>
      </div>

      <div className="space-y-24">
        {caseStudies.map((item, index) => (
          <article key={item.number} className="group border-t border-black/15 pt-6 md:pt-8">
            <div className="mb-7 flex items-center justify-between gap-5 text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)] uppercase">
              <span>{item.number}</span>
              <span className="text-right">{item.tags.join(" · ")}</span>
            </div>

            <div className="grid overflow-hidden rounded-sm bg-[var(--surface)] md:grid-cols-[1.15fr_0.85fr]">
              <div className={`relative min-h-[340px] overflow-hidden md:min-h-[520px] ${index % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/[0.04]" />
              </div>

              <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                <div>
                  <p className="mb-8 text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">Case study</p>
                  <h3 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl lg:text-6xl">{item.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-snug text-[var(--muted)]">{item.subtitle}</p>
                </div>

                <div className="mt-14 border-t border-black/10 pt-7">
                  <p className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{item.metric}</p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{item.description}</p>

                  {item.stats && (
                    <div className="mt-8 grid grid-cols-3 border-t border-black/10 pt-6">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="pr-3">
                          <div className="text-xl font-semibold tracking-[-0.04em] md:text-2xl">{stat.value}</div>
                          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
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
