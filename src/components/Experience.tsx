import { experience } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-[#171815] text-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr]">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/45">
              A career built across writing, editorial, product, club media and global sports publishing.
            </p>
          </div>
          <div>
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              A decade inside sports media.
            </h2>
            <div className="mt-16 border-t border-white/15">
              {experience.map((item, index) => (
                <article key={`${item.period}-${item.role}`} className="grid gap-5 border-b border-white/15 py-9 md:grid-cols-[150px_1fr_1fr] md:items-start md:py-10">
                  <span className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">{item.period}</span>
                  <div>
                    <span className="mb-3 block text-xs font-semibold tracking-[0.16em] text-[#aab7a9]">0{index + 1}</span>
                    <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">{item.role}</h3>
                    <p className="mt-2 text-sm text-white/45">{item.company}</p>
                  </div>
                  <p className="max-w-md text-sm leading-7 text-white/55">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
