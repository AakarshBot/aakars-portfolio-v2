import { experience } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-[#171815] text-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.9fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionLabel>Experience</SectionLabel>
            <p className="mt-8 max-w-xs text-sm leading-7 text-white/45">
              A decade across football writing, editorial, product, club media and global sports publishing.
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Built across every side of sports media.
            </h2>

            <div className="mt-16 border-t border-white/15">
              {experience.map((item, index) => (
                <article
                  key={`${item.period}-${item.role}`}
                  className="group relative grid gap-7 border-b border-white/15 py-10 md:grid-cols-[150px_1fr] md:gap-10 md:py-12"
                >
                  <div className="flex items-start justify-between md:block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/38">
                      {item.period}
                    </span>
                    <span className="text-xs font-medium tracking-[0.14em] text-white/20 md:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative pl-0 md:pl-8">
                    <span className="absolute left-0 top-2 hidden h-1.5 w-1.5 rounded-full bg-[#aab7a9] md:block" />
                    <span className="absolute -left-px top-0 hidden h-full w-px bg-white/10 md:block" />

                    <div className="relative">
                      <p className="mb-3 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#aab7a9]/65 md:block">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-white/50">
                        {item.company}
                      </p>
                      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
