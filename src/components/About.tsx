import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.8fr] lg:px-10 lg:py-32">
      <div><SectionLabel>About</SectionLabel></div>
      <div>
        <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">I&apos;ve spent over a decade bringing fans closer to the sports they love — moving from writing and editorial into club media, global publishing, audience strategy and content leadership.</p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">My approach combines creative storytelling with tactical analysis and data. I care about the idea, the execution and what happens after a piece of content goes live.</p>
      </div>
    </section>
  );
}
