import { caseStudies } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><SectionLabel>Selected work</SectionLabel><h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Work that moved audiences.</h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">Publishing, media strategy and storytelling across football, clubs and global sports platforms.</p>
      </div>
      <div className="border-t border-black/15">
        {caseStudies.map((item) => (
          <article key={item.number} className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[90px_1fr_1.1fr] md:items-start md:py-14">
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--muted)]">{item.number}</span>
            <div><h3 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">{item.title}</h3><p className="mt-3 text-lg text-[var(--muted)]">{item.subtitle}</p><div className="mt-6 flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="border border-black/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase">{tag}</span>)}</div></div>
            <div><p className="text-2xl font-semibold tracking-[-0.025em]">{item.metric}</p><p className="mt-4 max-w-lg leading-relaxed text-[var(--muted)]">{item.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
