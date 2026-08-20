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
        {caseStudies.map((item, index) => {
          const isFifa = Boolean(item.stats?.length);

          return (
            <article key={item.number} className="group border-t border-black/15 pt-6 md:pt-8">
              <div className="mb-7 flex items-center justify-between gap-5 text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)] uppercase">
                <span>{item.number}</span>
                <span className="text-right">{item.tags.join(" · ")}</span>
              </div>

              <div className="overflow-hidden rounded-sm bg-[var(--surface)]">
                <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                  <div className={`relative min-h-[340px] overflow-hidden md:min-h-[570px] ${index % 2 ? "md:order-2" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 48vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/[0.04]" />
                  </div>

                  <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                    <div>
                      <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">Case study</p>
                      <h3 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl lg:text-6xl">{item.title}</h3>
                      <p className="mt-4 max-w-xl text-lg leading-snug text-[var(--muted)]">{item.subtitle}</p>

                      {isFifa && item.stats ? (
                        <>
                          <div className="mt-10 grid grid-cols-2 border-y border-black/10">
                            {item.stats.map((stat, statIndex) => (
                              <div
                                key={stat.label}
                                className={`py-6 ${statIndex % 2 === 1 ? "border-l border-black/10 pl-5" : "pr-5"} ${statIndex > 1 ? "border-t border-black/10" : ""}`}
                              >
                                <p className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">{stat.value}</p>
                                <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">{stat.label}</p>
                                {stat.note && <p className="mt-1 text-xs text-[var(--muted)]">{stat.note}</p>}
                              </div>
                            ))}
                          </div>

                          <div className="mt-9">
                            <p className="text-2xl font-semibold tracking-[-0.035em] md:text-3xl">The biggest tournament performance in channel history.</p>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                          </div>

                          {item.highlights && (
                            <div className="mt-8 border-t border-black/10 pt-6">
                              <div className="space-y-4">
                                {item.highlights.map((highlight) => (
                                  <div key={highlight} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                                    <span>{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="mt-14 border-t border-black/10 pt-7">
                          <p className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{item.metric}</p>
                          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
