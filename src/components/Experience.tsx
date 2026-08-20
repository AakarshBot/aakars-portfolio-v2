import { experience } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-[#171815] text-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">A decade inside sports media.</h2>
        <div className="mt-16 border-t border-white/15">
          {experience.map((item) => (
            <article key={`${item.period}-${item.role}`} className="grid gap-4 border-b border-white/15 py-9 md:grid-cols-[180px_1fr_1fr] md:items-start">
              <span className="text-sm text-white/45">{item.period}</span>
              <div><h3 className="text-xl font-medium">{item.role}</h3><p className="mt-2 text-white/50">{item.company}</p></div>
              <p className="max-w-md text-sm leading-relaxed text-white/55">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
