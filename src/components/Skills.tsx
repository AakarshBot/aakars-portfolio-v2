import { skillGroups } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

const groupDescriptions: Record<string, string> = {
  Strategy: "Turning audience behaviour and editorial priorities into a clear content plan.",
  Content: "Building stories from the idea through production, publishing and distribution.",
  Platforms: "Understanding how content needs to change across YouTube, social and digital platforms.",
  Leadership: "Bringing people, partners and priorities together without losing the creative point of view.",
};

export function Skills() {
  return (
    <section id="skills" className="border-y border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr]">
          <div>
            <SectionLabel>Expertise</SectionLabel>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              A decade of working across football media, club publishing, global sports platforms and digital products.
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              The common thread: knowing what is worth making, how to package it, and how to get people to care.
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Strategy, content, platforms and people.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Not a list of software or buzzwords. These are the areas where editorial judgement, creative execution and audience thinking come together in the work.
            </p>

            <div className="mt-14 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className={`border-t border-black/15 py-7 pr-5 lg:border-t-0 lg:border-l lg:py-2 lg:pl-7 ${
                    index === 0 ? "lg:pl-0 lg:border-l-0" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)]">
                      0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">{group.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {groupDescriptions[group.title]}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {group.items.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-black/30" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
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
