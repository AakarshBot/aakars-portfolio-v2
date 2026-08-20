import { SectionLabel } from "./SectionLabel";

const legacyAsset = (file: string) => `https://raw.githubusercontent.com/AakarshBot/aakars-portfolio-new/main/public/${file}`;

const clients = [
  { name: "FIFA", file: "fifa.png" },
  { name: "FanCode", file: "fancode.png" },
  { name: "Hyderabad FC", file: "hfc.png" },
  { name: "Microsoft", file: "microsoft.png" },
  { name: "Premier League India", file: "pl-india.png" },
  { name: "Liverpool India", file: "lfc-india.png" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-16">
        <div>
          <SectionLabel>10+ years · sports media · content · strategy</SectionLabel>

          <h1 className="mt-6 max-w-5xl text-[clamp(3.25rem,8vw,8.6rem)] font-semibold leading-[0.86] tracking-[-0.068em] sm:mt-7">
            Sports Media
            <br />
            <span className="text-[var(--muted)]">&amp; Content Leader.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:mt-10 sm:text-xl md:text-2xl">
            I build digital sports audiences through content strategy, storytelling, data and distribution — across football clubs, global sports platforms and media teams.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10">
            <a className="border-b border-black pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-50 sm:text-sm" href="#work">
              Explore selected work ↓
            </a>
            <a className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-black sm:text-sm" href="#contact">
              Get in touch →
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[390px] md:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e8e5df] shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
            <img
              src={legacyAsset("profile.jpg")}
              alt="Aakarsh Bommakanti"
              className="h-full w-full object-cover object-center grayscale-[10%]"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-black/70 px-4 py-3 text-white backdrop-blur-md">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">Aakarsh Bommakanti</div>
              <div className="mt-1 text-sm font-medium">Sports media · content · publishing</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] shadow-lg">
            10+ years in sports
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-black/10 pt-6 sm:mt-20">
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Selected organisations &amp; platforms</div>
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
          {clients.map((client) => (
            <div key={client.name} className="group flex h-12 items-center justify-start md:justify-center">
              <img
                src={legacyAsset(client.file)}
                alt={client.name}
                className="max-h-9 max-w-[120px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
