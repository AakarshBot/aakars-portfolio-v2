const metrics = [
  { value: "127.3M", label: "FIFA views" },
  { value: "4.95M", label: "hours watched" },
  { value: "15,000+", label: "articles" },
  { value: "2", label: "documentary seasons" },
];

const partners = ["FIFA", "FanCode", "Hyderabad FC", "Microsoft", "Premier League India", "Liverpool India"];

const work = [
  {
    title: "FIFA",
    subtitle: "Global YouTube Publishing & Audience Growth",
    metric: "66.18M → 127.33M",
    description:
      "Publishing, packaging, optimisation and audience strategy across FIFA's global YouTube ecosystem.",
  },
  {
    title: "FanCode",
    subtitle: "Live Sports Content & Social Publishing",
    metric: "ISL · LaLiga · Live Sports",
    description:
      "Platform-native content, live coverage, promotional storytelling and tune-ins across major sporting properties.",
  },
  {
    title: "Hyderabad FC",
    subtitle: "Building a Club's Digital Identity",
    metric: "Future Is Us · ISL",
    description:
      "Led media and content strategy around the club's championship era, fan culture and documentary storytelling.",
  },
];

const experience = [
  ["2026 — Present", "Digital Content Manager", "Red Lantern Digital Media"],
  ["2020 — 2025", "Media Manager", "Hyderabad FC"],
  ["2018 — 2020", "Content Analyst", "Microsoft · Bing Sports"],
  ["2016 — 2018", "Editor", "The 4th Official"],
  ["2014 — 2020", "Freelance Writer", "Multiple Outlets"],
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-sm font-semibold tracking-[0.18em] uppercase">
            Aakarsh Bommakanti
          </a>
          <div className="hidden gap-7 text-sm md:flex">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-32 lg:pt-36">
        <p className="mb-7 text-xs font-semibold tracking-[0.28em] text-[#4f6b52] uppercase">Sports media · content · strategy</p>
        <h1 className="max-w-5xl text-6xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-8xl lg:text-[9.5rem]">
          Sports Media
          <br />&amp; Content Leader.
        </h1>
        <div className="mt-12 grid max-w-4xl gap-8 md:grid-cols-[1fr_280px] md:items-end">
          <p className="max-w-2xl text-xl leading-relaxed text-[#555851] md:text-2xl">
            I build digital sports audiences through content strategy, storytelling, data and distribution — from football clubs to global sports platforms.
          </p>
          <a href="#work" className="inline-flex w-fit border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em]">
            Explore selected work ↓
          </a>
        </div>
        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-sm text-[#6d7068]">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ebe9e2]" aria-label="Impact metrics">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-16 lg:grid-cols-4 lg:px-10 lg:py-20">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`py-5 lg:px-8 ${index > 0 ? "lg:border-l lg:border-black/10" : ""}`}>
              <div className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{metric.value}</div>
              <div className="mt-3 text-xs font-semibold tracking-[0.18em] text-[#6d7068] uppercase">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-[#4f6b52] uppercase">Selected work</p>
            <h2 className="text-5xl font-semibold tracking-[-0.045em] md:text-7xl">Work that moved audiences.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#6d7068]">A selection of publishing, media strategy and storytelling work across football and global sports.</p>
        </div>

        <div className="space-y-5">
          {work.map((item, index) => (
            <article key={item.title} className="group grid gap-8 border-t border-black/15 py-10 md:grid-cols-[120px_1fr_1.1fr] md:items-start md:py-14">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#6d7068]">0{index + 1}</span>
              <div>
                <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{item.title}</h3>
                <p className="mt-3 text-lg text-[#555851]">{item.subtitle}</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.02em]">{item.metric}</p>
                <p className="mt-4 max-w-lg leading-relaxed text-[#6d7068]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-black/10 bg-[#171815] text-[#f5f3ee]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-[#aab7a9] uppercase">Experience</p>
          <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] md:text-7xl">A decade inside sports media.</h2>
          <div className="mt-16 border-t border-white/15">
            {experience.map(([period, role, company]) => (
              <div key={`${period}-${role}`} className="grid gap-3 border-b border-white/15 py-8 md:grid-cols-[180px_1fr_1fr] md:items-center">
                <span className="text-sm text-white/50">{period}</span>
                <strong className="text-xl font-medium">{role}</strong>
                <span className="text-white/60">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr] lg:px-10 lg:py-32">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-[#4f6b52] uppercase">About</p>
        </div>
        <div>
          <p className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            I&apos;ve spent over a decade bringing fans closer to the sports they love — moving from writing and editorial into club media, global publishing, audience strategy and content leadership.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6d7068]">
            My approach combines creative storytelling with tactical analysis and data. I care about the idea, the execution and what happens after a piece of content goes live.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-[#4f6b52] uppercase">Contact</p>
          <h2 className="max-w-4xl text-6xl font-semibold leading-none tracking-[-0.055em] md:text-8xl">Let&apos;s build something people want to watch.</h2>
          <div className="mt-12 flex flex-wrap gap-6">
            <a className="border-b border-black pb-2 text-sm font-semibold uppercase tracking-[0.14em]" href="mailto:hello@aakarshbommakanti.com">Get in touch ↗</a>
            <a className="border-b border-black/30 pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#6d7068]" href="/AakarshBommakanti-Resume.pdf">Download CV ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-[#6d7068] md:flex-row">
          <span>Aakarsh Bommakanti</span>
          <span>Sports Media &amp; Content</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
