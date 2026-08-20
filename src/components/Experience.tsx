import { experience } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-[#171815] text-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.8fr]">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/45 sm:mt-8">
              A career built across football publishing, technology, club media and global tournament storytelling.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-6 border-b border-white/15 pb-8 sm:gap-7 sm:pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="max-w-3xl text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                  From the byline to the global stage.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                  Ten years of learning the craft from different sides of the sports media ecosystem — writer, editor, analyst, club media leader and global publisher.
                </p>
              </div>
              <span className="shrink-0 text-[10px] font-semibold tracking-[0.16em] text-white/35 uppercase sm:text-xs">2014 — now</span>
            </div>

            <div className="border-t border-white/15">
              {experience.map((item) => (
                <article
                  key={`${item.period}-${item.role}`}
                  className="grid gap-5 border-b border-white/15 py-7 sm:py-9 md:grid-cols-[145px_1fr_1fr] md:items-start md:gap-6 md:py-10"
                >
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase sm:text-xs sm:tracking-[0.16em]">
                    {item.period}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium leading-tight tracking-[-0.02em] sm:text-xl md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm text-[#aab7a9]">{item.company}</p>
                  </div>

                  <p className="max-w-md text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
