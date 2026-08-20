import Image from "next/image";
import { caseStudies } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Work that moved audiences.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">Publishing, media strategy and storytelling across football, clubs and global sports platforms.</p>
      </div>

      <div className="space-y-20">
        {caseStudies.map((item, index) => (
          <article key={item.number} className="border-t border-black/15 pt-8 md:pt-10">
            <div className="mb-8 flex items-center justify-between gap-6 text-xs font-semibold tracking-[0.18em] uppercase">
              <span className="text-[var(--muted)]">{item.number}</span>
              <span className="text-[var(--muted)]">{item.tags.join(" · ")}</span>
            </div>

            <div className="grid overflow-hidden rounded-[2px] bg-[var(--surface)] md:grid-cols-[1.2fr_0.8fr]">
              <div className={`relative min-h-[280px] ${index % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                <div>
                  <h3 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">{item.title}</h3>
                  <p className="mt-3 text-lg leading-snug text-[var(--muted)]">{item.subtitle}</p>
                </div>
                <div className="mt-12">
                  <p className="text-2xl font-semibold tracking-[-0.025em] md:text-3xl">{item.metric}</p>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">{item.description}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
