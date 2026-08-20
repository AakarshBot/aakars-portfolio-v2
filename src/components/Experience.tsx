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
              From football writing to club media, technology and global tournament publishing — a career built across the sports media ecosystem.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-5 border-b border-white/15 pb-8 sm:gap-6 sm:pb-10 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                A decade inside sports media.
              </h2>
              <span className="shrink-0 text-[10px] font-semibold tracking-[0.16em] text-white/35 uppercase sm:text-xs">2014 — now</span>
            </div>
            <div className="border-t border-white/15">
              {experience.map((item, index) => (
                <article key={`${item.period}-${item.role}`} className="group grid gap-4 border-b border-white/15 py-7 transition sm:gap-5 sm:py-9 md:grid-cols-[150px_1fr_1fr] md:items-start md:py-10">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase sm:text-xs sm:tracking-[0.16em]">{item.period}</span>
                  <div>
                    <span className="mb-2 block text-[10px] font-semibold tracking-[0.16em] text-[#aab7a9] sm:mb-3 sm:text-xs">0{index + 1}</span>
                    <h3 className="text-lg font-medium leading-tight tracking-[-0.02em] sm:text-xl md:text-2xl">{item.role}</h3>
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
