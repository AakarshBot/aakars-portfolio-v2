import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">Let&apos;s build something people want to watch.</h2>
        <div className="mt-12 flex flex-wrap gap-7">
          <a className="border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em]" href="mailto:hello@aakarshbommakanti.com">Get in touch ↗</a>
          <a className="border-b border-black/25 pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]" href="/AakarshBommakanti-Resume.pdf">Download CV ↗</a>
        </div>
      </div>
    </section>
  );
}
