import Image from "next/image";
import { caseStudies } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

const fifaComparison = [
  ["5.4×", "Views", "811.99M → 4.4B"],
  ["2.3×", "Publishing", "992 → 2,315"],
  ["2.0×", "Watch time", "30.26M → 61.8M hrs"],
  ["2.1×", "Impressions", "8.02B → 16.6B"],
];

const fifaAudience = [
  ["79%", "New viewers", "of World Cup-period audience"],
  ["~20%", "Converted to subscribers", "of new viewers"],
  ["−21%", "Returning viewers", "during the period"],
];

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
          A decade of football media — from writing and club storytelling to technology, live sports and global publishing.
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
                <div className="grid md:grid-cols-[0.82fr_1.18fr]">
                  <div className={`relative min-h-[340px] overflow-hidden md:min-h-[650px] ${index % 2 ? "md:order-2" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 44vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/[0.04]" />
                  </div>

                  <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">Case study</p>
                        {isFifa && <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">10 Jun — 20 Jul 2026</span>}
                      </div>
                      <h3 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-5xl lg:text-6xl">{item.title}</h3>
                      <p className="mt-4 max-w-xl text-lg leading-snug text-[var(--muted)]">{item.subtitle}</p>

                      {isFifa && item.stats ? (
                        <>
                          <div className="mt-10 grid grid-cols-2 border-y border-black/10">
                            {item.stats.map((stat, statIndex) => (
                              <div key={stat.label} className={`py-6 ${statIndex % 2 === 1 ? "border-l border-black/10 pl-5" : "pr-5"} ${statIndex > 1 ? "border-t border-black/10" : ""}`}>
                                <p className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">{stat.value}</p>
                                <p className="mt-2 text-[10px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">{stat.label}</p>
                                {stat.note && <p className="mt-1 text-xs text-[var(--muted)]">{stat.note}</p>}
                              </div>
                            ))}
                          </div>

                          <div className="mt-10 rounded-sm border border-black/10 bg-[var(--background)]/55 p-5 md:p-6">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">2026 vs 2022</p>
                              <span className="text-[10px] tracking-[0.12em] text-[var(--muted)] uppercase">Tournament period</span>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4">
                              {fifaComparison.map(([value, label, baseline]) => (
                                <div key={label}>
                                  <p className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">{value}</p>
                                  <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">{label}</p>
                                  <p className="mt-1 text-[10px] text-[var(--muted)]">{baseline}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-10">
                            <div className="mb-5 flex items-end justify-between gap-4">
                              <div>
                                <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">Audience shift</p>
                                <p className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-2xl">Reach expanded dramatically.</p>
                              </div>
                              <p className="hidden max-w-[180px] text-right text-[10px] leading-4 text-[var(--muted)] md:block">The trade-off: a much larger share of first-time viewers.</p>
                            </div>
                            <div className="grid border-y border-black/10 md:grid-cols-3">
                              {fifaAudience.map(([value, label, note], audienceIndex) => (
                                <div key={label} className={`py-5 ${audienceIndex > 0 ? "border-t border-black/10 md:border-l md:border-t-0 md:pl-5" : "pr-5"}`}>
                                  <p className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">{value}</p>
                                  <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">{label}</p>
                                  <p className="mt-1 text-xs text-[var(--muted)]">{note}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-10">
                            <p className="text-2xl font-semibold tracking-[-0.035em] md:text-3xl">The biggest tournament performance in channel history.</p>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                          </div>

                          {item.highlights && (
                            <div className="mt-8 border-t border-black/10 pt-6">
                              <p className="mb-5 text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">What worked</p>
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
