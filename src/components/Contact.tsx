import { SectionLabel } from "./SectionLabel";

const resumeUrl = "https://raw.githubusercontent.com/AakarshBot/aakars-portfolio-new/main/public/AakarshBommakanti-Resume.pdf";
const socialUrl = "https://x.com/aakarsh_ab";

export function Contact() {
  return (
    <section id="contact" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              For senior sports media, content, publishing and audience-growth opportunities.
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
              Let&apos;s build something people want to watch.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              I bring editorial judgement, creative execution, platform expertise and a decade-plus of sports media experience to the table.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5">
              <a className="border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60" href="mailto:aakarsh.bommakanti@gmail.com">Email me ↗</a>
              <a className="border-b border-black/50 pb-2 text-sm font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60" href={socialUrl} target="_blank" rel="noreferrer">X / Twitter ↗</a>
              <a className="border-b border-black/25 pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition-opacity hover:opacity-60" href={resumeUrl} target="_blank" rel="noreferrer">Download CV ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
