import { skillGroups } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr]">
          <div>
            <SectionLabel>Expertise</SectionLabel>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              The mix of editorial judgement, platform knowledge and audience thinking behind the work.
            </p>
          </div>
          <div>
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Strategy, content, data and leadership.</h2>
            <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group, index) => (
                <div key={group.title} className={`border-t border-black/15 p-6 pl-0 lg:border-t-0 lg:border-l lg:pl-7 ${index > 0 ? "md:pl-7" : ""}`}>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)]">0{index + 1}</span>
                  <h3 className="mt-5 text-sm font-semibold tracking-[0.16em] uppercase">{group.title}</h3>
                  <ul className="mt-7 space-y-3 text-[var(--muted)]">
                    {group.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
