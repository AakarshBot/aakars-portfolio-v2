import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.8fr] lg:px-10 lg:py-32">
      <div>
        <SectionLabel>About</SectionLabel>
        <p className="mt-8 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
          More than a decade across football publishing, club media, technology, live sports and global tournament content.
        </p>
      </div>
      <div>
        <p className="max-w-5xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
          I build sports content that has a job to do: make people care, keep them watching and turn attention into a stronger audience.
        </p>
        <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
          My career has moved from football writing and editing to Microsoft’s Bing Sports team, from leading Hyderabad FC’s media operation to global football publishing around the FIFA World Cup. Along the way, I’ve scripted a two-season documentary series for Disney+ Hotstar and worked across live sports, sponsors and digital platforms.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
          That breadth matters to me. I’ve worked both inside organisations telling the story and on platforms helping audiences find it. It means I’m comfortable with the idea, the execution and the numbers — without losing sight of the audience behind them.
        </p>
        <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Where I add value</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--muted)]">
              Content strategy, YouTube publishing, social storytelling, editorial leadership, audience growth and sports media operations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">How I work</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--muted)]">
              Start with the audience. Build the right story. Package it well. Measure what happened. Then make the next piece better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
